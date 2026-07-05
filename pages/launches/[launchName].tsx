import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Alert, Box, Button, Card, CardContent, Chip, CircularProgress, Container, Stack, Typography } from '@mui/material';
import {
  formatAltitude,
  formatAltitudeInKm,
  formatLaunchDatetime,
  formatLaunchName,
  slugifyLaunchName
} from '@/src/shared/utils/formatters.utils';
import { useGetLaunchContent } from '@/src/core/services/launches/useGetLaunchContent.service';
import { LaunchSummary } from '@/src/shared/types/api/launches-api.types';
import dynamic from 'next/dynamic';
import LaunchAndLandingCities from '@/src/components/LaunchAndLandingCities/LaunchAndLandingCities';

const SELECTED_LAUNCH_STORAGE_KEY = 'zenith-selected-launch';

// TODO mover textos para arquivo de tradução
// TODO mover para arquivos de formatters
const formatMissionDuration = (start: string, end: string) => {
  const durationInSeconds = Math.max(0, Math.round((new Date(end).getTime() - new Date(start).getTime()) / 1000));
  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);
  const seconds = durationInSeconds % 60;

  return `${hours}h ${minutes}min ${seconds}seg`;
};

export default function LaunchDetailsPage() {
  const router = useRouter();
  const launchName = typeof router.query.launchName === 'string' ? router.query.launchName : '';
  const [launch, setLaunch] = useState<LaunchSummary | null>(null);
  const [launchResolved, setLaunchResolved] = useState(false);

  const { records, isLoadingRecords, recordsError } = useGetLaunchContent(launch?.download_url ?? '', Boolean(launch));

  const MapTrajectory = useMemo(
    () =>
      dynamic(() => import('@/src/components/Map/MapTrajectory'), {
        loading: () => <p>A map is loading</p>,
        ssr: false
      }),
    []
  );

  useEffect(() => {
    router.prefetch('/launches');
  }, [router]);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    setLaunchResolved(false);

    const storedLaunch = sessionStorage.getItem(SELECTED_LAUNCH_STORAGE_KEY);

    if (!storedLaunch) {
      setLaunch(null);
      setLaunchResolved(true);
      return;
    }

    try {
      const parsedLaunch: LaunchSummary = JSON.parse(storedLaunch);
      const storedLaunchName = slugifyLaunchName(parsedLaunch.name);

      if (storedLaunchName !== launchName) {
        setLaunch(null);
        setLaunchResolved(true);
        return;
      }

      setLaunch(parsedLaunch);
    } catch {
      setLaunch(null);
    } finally {
      setLaunchResolved(true);
    }
  }, [launchName, router.isReady]);

  return (
    <Box sx={{ width: '100%' }}>
      <Container maxWidth="xl" sx={{ py: 2 }}>
        <Stack spacing={1}>
          <Button
            onClick={() => router.back()}
            startIcon={<ArrowBackIcon />}
            sx={{ width: 'fit-content', margin: 0, padding: 0 }}
          >
            Voltar para lançamentos
          </Button>

          {!router.isReady ||
            (!launchResolved && (
              <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
                <CircularProgress />
              </Box>
            ))}

          {!launchName ||
            (!launch && (
              <Alert severity="info">
                {!launchName
                  ? 'Lançamento não encontrado.'
                  : 'Lançamento não encontrado nesta sessão. Volte para a lista e abra o detalhe novamente.'}
              </Alert>
            ))}

          {isLoadingRecords && (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
              <CircularProgress />
            </Box>
          )}

          {recordsError && <Alert severity="error">{recordsError}</Alert>}

          {records.length === 0 && <Alert severity="info">Lançamento não encontrado.</Alert>}

          {launch && records.length > 0 && (
            <React.Fragment>
              <Card elevation={4} sx={{ borderRadius: 3 }}>
                <CardContent>
                  <Stack spacing={3}>
                    <Box>
                      <Typography variant="h4" component="h1" sx={{ fontWeight: 800 }}>
                        {formatLaunchName(launch.name)}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {formatLaunchDatetime(launch.launch_datetime)}
                      </Typography>
                    </Box>

                    <LaunchAndLandingCities startLabel={launch.launch_city} endLabel={launch.landing_city} />

                    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }} useFlexGap>
                      {/* <Chip label="Altitude máxima" color="primary" variant="outlined" /> */}
                      <Chip
                        label={`Altitude máxima: ${formatAltitude(launch.max_altitude)} (${formatAltitudeInKm(
                          launch.max_altitude
                        )})`}
                        variant="outlined"
                        color="primary"
                      />
                      <Chip
                        label={`Duração aprox.: ${formatMissionDuration(
                          records[0].datetime,
                          records[records.length - 1].datetime
                        )}`}
                        variant="outlined"
                      />
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>

              <Box
                sx={{
                  width: '100%',
                  maxWidth: '100%',
                  mx: 'auto',
                  overflow: 'hidden'
                }}
              >
                <Box>
                  <Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
                    Trajetória do lançamento
                  </Typography>
                </Box>

                <MapTrajectory
                  position={[records[0]?.lat, records[0]?.lon]}
                  zoom={20}
                  trajectory={records.map((r) => [r.lat, r.lon])}
                  trajectoryRecords={records}
                  landingCity={launch.landing_city}
                  lineColor="#f44336"
                  lineWeight={4}
                  mapHeight="100vh"
                />
              </Box>
            </React.Fragment>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
