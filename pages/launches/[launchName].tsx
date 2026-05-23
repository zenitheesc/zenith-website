import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Alert, Box, Button, Card, CardContent, Chip, CircularProgress, Container, Grid, Stack, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAllLaunches } from '@/src/core/services/launches/useGetAllLaunches.service';
import { getLaunchContent } from '@/src/core/services/launches.service';
import { formatLaunchDatetime, formatLaunchName, slugifyLaunchName } from '@/src/shared/utils/formatters.utils';
import { LaunchRecord } from '@/src/shared/types/api/launches-api.types';

const renderTelemetryValue = (value: string | number): string => {
  return typeof value === 'number' ? value.toLocaleString('pt-BR') : String(value);
};

export default function LaunchDetailsPage() {
  const router = useRouter();
  const launchName = typeof router.query.launchName === 'string' ? router.query.launchName : '';
  const { launches, isLoadingAllLaunches, error } = useAllLaunches();
  const [records, setRecords] = useState<LaunchRecord[]>([]);
  const [isLoadingRecords, setIsLoadingRecords] = useState(false);
  const [recordsError, setRecordsError] = useState<string | null>(null);

  const launch = useMemo(() => {
    return launches.find((launchItem) => slugifyLaunchName(launchItem.name) === launchName);
  }, [launches, launchName]);

  useEffect(() => {
    if (!launch) return;

    const controller = new AbortController();

    const fetchLaunchRecords = async () => {
      setIsLoadingRecords(true);
      setRecordsError(null);
      try {
        const data = await getLaunchContent(launch.download_url);
        if (!controller.signal.aborted) setRecords(data);
      } catch (fetchError) {
        if (fetchError instanceof Error && fetchError.name === 'AbortError') return;
        setRecordsError(
          fetchError instanceof Error ? fetchError.message : 'Não foi possível carregar os detalhes do lançamento.'
        );
      } finally {
        if (!controller.signal.aborted) setIsLoadingRecords(false);
      }
    };

    fetchLaunchRecords();
    return () => controller.abort();
  }, [launch]);

  if (isLoadingAllLaunches) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  if (!launch) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Stack spacing={3}>
          <Button component={Link} href="/launches" startIcon={<ArrowBackIcon />} sx={{ width: 'fit-content' }}>
            Voltar para lançamentos
          </Button>
          <Alert severity="info">Lançamento não encontrado.</Alert>
        </Stack>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Stack spacing={3}>
        <Button component={Link} href="/launches" startIcon={<ArrowBackIcon />} sx={{ width: 'fit-content' }}>
          Voltar para lançamentos
        </Button>

        <Card elevation={4} sx={{ borderRadius: 3 }}>
          <CardContent>
            <Stack spacing={2}>
              <Box>
                <Typography variant="h4" component="h1" sx={{ fontWeight: 800 }}>
                  {formatLaunchName(launch.name)}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {formatLaunchDatetime(launch.launch_datetime)}
                </Typography>
              </Box>

              <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }} useFlexGap>
                <Chip label={launch.launch_city} color="primary" variant="outlined" />
                <Chip label={launch.landing_city} color="primary" variant="outlined" />
                <Chip label={`${launch.max_altitude.toLocaleString('pt-BR')} m`} variant="outlined" />
              </Stack>
            </Stack>
          </CardContent>
        </Card>

        <Box>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
            Leituras do lançamento
          </Typography>

          {isLoadingRecords ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
              <CircularProgress />
            </Box>
          ) : recordsError ? (
            <Alert severity="error">{recordsError}</Alert>
          ) : records.length === 0 ? (
            <Alert severity="info">Nenhuma leitura encontrada para esse lançamento.</Alert>
          ) : (
            <Grid container spacing={2}>
              {records.slice(0, 6).map((record, index) => (
                <Grid item xs={12} sm={6} md={4} key={`${record.datetime}-${index}`}>
                  <Card variant="outlined" sx={{ borderRadius: 3, height: '100%' }}>
                    <CardContent>
                      <Stack spacing={1.5}>
                        <Typography variant="subtitle2" color="text.secondary">
                          {new Date(record.datetime).toLocaleString('pt-BR')}
                        </Typography>
                        <Typography variant="body2">Altitude: {renderTelemetryValue(record.alt)}</Typography>
                        <Typography variant="body2">Velocidade vertical: {renderTelemetryValue(record.vel_v)}</Typography>
                        <Typography variant="body2">Velocidade horizontal: {renderTelemetryValue(record.vel_h)}</Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Stack>
    </Container>
  );
}
