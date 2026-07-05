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
import { getAllLaunches } from '@/src/core/services/launches.service';
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
  const [launchNotFound, setLaunchNotFound] = useState(false);

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

    const controller = new AbortController();

    const resolveFromStorage = (): LaunchSummary | null => {
      const storedLaunch = sessionStorage.getItem(SELECTED_LAUNCH_STORAGE_KEY);
      if (!storedLaunch) {
        return null;
      }

      try {
        const parsedLaunch: LaunchSummary = JSON.parse(storedLaunch);
        return slugifyLaunchName(parsedLaunch.name) === launchName ? parsedLaunch : null;
      } catch {
        return null;
      }
    };

    const resolveLaunch = async () => {
      setLaunchResolved(false);
      setLaunchNotFound(false);

      const storedMatch = resolveFromStorage();
      if (storedMatch) {
        setLaunch(storedMatch);
        setLaunchResolved(true);
        return;
      }

      try {
        const allLaunches = await getAllLaunches();
        if (controller.signal.aborted) {
          return;
        }

        const matchedLaunch = allLaunches.find((item) => slugifyLaunchName(item.name) === launchName) ?? null;

        if (matchedLaunch) {
          sessionStorage.setItem(SELECTED_LAUNCH_STORAGE_KEY, JSON.stringify(matchedLaunch));
          setLaunch(matchedLaunch);
        } else {
          setLaunch(null);
          setLaunchNotFound(true);
        }
      } catch {
        if (!controller.signal.aborted) {
          setLaunch(null);
          setLaunchNotFound(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLaunchResolved(true);
        }
      }
    };

    resolveLaunch();

    return () => {
      controller.abort();
    };
  }, [launchName, router.isReady]);

  return (
    <Box sx={{ width: '100%' }}>
      <Container maxWidth="xl" sx={{ py: 2 }}>
        <Stack spacing={1}>
          <Button
            onClick={() => router.push('/launches')}
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

          {launchResolved && (!launchName || (!launch && launchNotFound)) && (
            <Alert severity="info">Lançamento não encontrado.</Alert>
          )}

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
