import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAllLaunches } from '@/src/core/services/launches/useGetAllLaunches.service';
import { slugifyLaunchName } from '@/src/shared/utils/formatters.utils';
import { Alert, Box, CircularProgress, Container, Stack, Typography } from '@mui/material';
import type {} from '@mui/lab/themeAugmentation';
import useTranslation from 'next-translate/useTranslation';
import LaunchSummaryCard from '@/src/components/LaunchCard/LaunchSummaryCard';

const SELECTED_LAUNCH_STORAGE_KEY = 'zenith-selected-launch';

// TODO mover textos para arquivo de tradução
export default function LaunchesPage() {
  const { launches, isLoadingAllLaunches, error } = useAllLaunches();
  const router = useRouter();

  const { t } = useTranslation();
  const launchesTitle = t('allLaunches:allLaunchesPage.header.title');
  const launchesDescription = t('allLaunches:allLaunchesPage.header.description');

  useEffect(() => {}, [isLoadingAllLaunches, launches]);

  const handleLaunchDetails = (launch: (typeof launches)[number]) => {
    sessionStorage.setItem(SELECTED_LAUNCH_STORAGE_KEY, JSON.stringify(launch));
    router.push(`/launches/${slugifyLaunchName(launch.name)}`);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Stack spacing={1} sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 800 }}>
          {launchesTitle}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {launchesDescription}
        </Typography>
      </Stack>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {isLoadingAllLaunches && (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
          <CircularProgress />
        </Box>
      )}

      {!isLoadingAllLaunches && launches.length === 0 && <Alert severity="info">Nenhum lançamento encontrado.</Alert>}

      {!isLoadingAllLaunches && launches.length > 0 && (
        <Box
          sx={{
            display: 'grid',
            gap: 3,
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, minmax(0, 1fr))',
              md: 'repeat(2, minmax(0, 1fr))'
            }
          }}>
          {launches.map((launch) => (
            <LaunchSummaryCard
              key={`${launch.name}-${launch.launch_datetime}`}
              launch={launch}
              onDetailsClick={handleLaunchDetails}
            />
          ))}
        </Box>
      )}
    </Container>
  );
}
