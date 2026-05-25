import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Alert, Box, Button, Card, CardContent, Chip, CircularProgress, Container, Stack, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { formatLaunchDatetime, formatLaunchName, slugifyLaunchName } from '@/src/shared/utils/formatters.utils';
import { useGetLaunchContent } from '@/src/core/services/launches/useGetLaunchContent.service';
import { LaunchSummary } from '@/src/shared/types/api/launches-api.types';
import dynamic from 'next/dynamic';

const SELECTED_LAUNCH_STORAGE_KEY = 'zenith-selected-launch';

export default function LaunchDetailsPage() {
  const router = useRouter();
  const launchName = typeof router.query.launchName === 'string' ? router.query.launchName : '';
  const [launch, setLaunch] = useState<LaunchSummary | null>(null);

  const { records, isLoadingRecords, recordsError } = useGetLaunchContent(launch?.download_url ?? '', Boolean(launch));

  const Map = useMemo(
    () =>
      dynamic(() => import('@/src/components/Map/Map'), {
        loading: () => <p>A map is loading</p>,
        ssr: false
      }),
    []
  );

  useEffect(() => {
    const storedLaunch = sessionStorage.getItem(SELECTED_LAUNCH_STORAGE_KEY);

    if (!storedLaunch) {
      setLaunch(null);
      return;
    }

    try {
      const parsedLaunch: LaunchSummary = JSON.parse(storedLaunch);
      const storedLaunchName = slugifyLaunchName(parsedLaunch.name);

      if (storedLaunchName !== launchName) {
        setLaunch(null);
        return;
      }

      setLaunch(parsedLaunch);
    } catch {
      setLaunch(null);
    }
  }, [launchName]);

  if (!launchName) {
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

  if (!launch) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Stack spacing={3}>
          <Button component={Link} href="/launches" startIcon={<ArrowBackIcon />} sx={{ width: 'fit-content' }}>
            Voltar para lançamentos
          </Button>
          <Alert severity="info">Lançamento não encontrado nesta sessão. Volte para a lista e abra o detalhe novamente.</Alert>
        </Stack>
      </Container>
    );
  }

  if (isLoadingRecords) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (recordsError) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Alert severity="error">{recordsError}</Alert>
      </Container>
    );
  }

  if (records.length === 0) {
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
    <Box sx={{ width: '100%' }}>
      <Container maxWidth="lg" sx={{ py: 6 }}>
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
          </Box>
        </Stack>
      </Container>

      <Box
        sx={{
          width: '95%',
          maxWidth: '95%',
          mx: 'auto',
          overflow: 'hidden'
        }}>
        <Map
          position={[records[0]?.lat, records[0]?.lon]}
          zoom={20}
          trajectory={records.map((r) => [r.lat, r.lon])}
          trajectoryRecords={records}
          lineColor="#f44336"
          lineWeight={4}
          mapHeight="100vh"
        />
      </Box>
    </Box>
  );
}
