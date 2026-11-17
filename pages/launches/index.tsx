import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAllLaunches } from '@/src/core/services/launches/useGetAllLaunches.service';
import { slugifyLaunchName } from '@/src/shared/utils/formatters.utils';
import { Alert, Box, Button, CircularProgress, Container, Snackbar } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import type {} from '@mui/lab/themeAugmentation';
import useTranslation from 'next-translate/useTranslation';
import LaunchSummaryCard from '@/src/components/LaunchCard/LaunchSummaryCard';
import HeadTags from '@/components/general/HeadTags';
import NavBar from '@/src/components/Navbar/NavBar';
import HeroSection from '@/components/projects-components/HeroSection';
import { LOCALE } from '@/src/shared/consts/locales.const';
import { BACKGROUND_COLOR } from '@/src/shared/styles/colors';

const SELECTED_LAUNCH_STORAGE_KEY = 'zenith-selected-launch';
const SCROLL_POSITION_KEY = 'zenith-launches-scroll';

// TODO mover textos para arquivo de tradução
export default function LaunchesPage() {
  const { launches, isLoadingAllLaunches, isRefreshingLaunches, refreshLaunches, error } = useAllLaunches();
  const router = useRouter();
  const { t } = useTranslation();
  const [isRefreshSnackbarOpen, setIsRefreshSnackbarOpen] = useState(false);

  const handleRefreshLaunches = async () => {
    const succeeded = await refreshLaunches();
    if (succeeded) {
      setIsRefreshSnackbarOpen(true);
    }
  };

  const handleCloseRefreshSnackbar = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    setIsRefreshSnackbarOpen(false);
  };

  useEffect(() => {
    if (isLoadingAllLaunches || launches.length === 0) return;

    const savedScroll = sessionStorage.getItem(SCROLL_POSITION_KEY);
    if (savedScroll) {
      window.scrollTo({ top: parseInt(savedScroll), behavior: 'instant' });
      sessionStorage.removeItem(SCROLL_POSITION_KEY);
    }
  }, [isLoadingAllLaunches, launches]);

  useEffect(() => {
    if (isLoadingAllLaunches || launches.length === 0) return;

    router.prefetch('/launches/[launchName]', `/launches/${slugifyLaunchName(launches[0].name)}`);
  }, [isLoadingAllLaunches, launches, router]);

  const handleLaunchDetails = (launch: (typeof launches)[number]) => {
    sessionStorage.setItem(SELECTED_LAUNCH_STORAGE_KEY, JSON.stringify(launch));
    sessionStorage.setItem(SCROLL_POSITION_KEY, String(window.scrollY));
    router.push(`/launches/${slugifyLaunchName(launch.name)}`);
  };

  const pageName = t(LOCALE.LAUNCHES.META_TAGS.PAGE_NAME);
  const headTagsTitle = t(LOCALE.LAUNCHES.META_TAGS.TITLE);
  const pageTitle = t(LOCALE.LAUNCHES.META_TAGS.PAGE_TITLE);
  const pageDescription = t(LOCALE.LAUNCHES.META_TAGS.DESCRIPTION);
  const lang = t(LOCALE.LAUNCHES.META_TAGS.LANG);

  return (
    <>
      <HeadTags pageName={pageName} title={headTagsTitle} description={pageDescription} pageTitle={pageTitle} lang={lang} />
      <NavBar />
      <HeroSection
        backgroundImage="url(../images/Projetos/SondasAeroespaciais/Garatéa-II/photo4.webp)"
        title={t(LOCALE.LAUNCHES.META_TAGS.TITLE)}
        subtitle={t(LOCALE.LAUNCHES.META_TAGS.SUBTITLE)}
        page="launches"
      />
      <Box sx={pageBackgroundSx}>
        <Container maxWidth="lg" sx={containerSx}>
          {!isLoadingAllLaunches && (
            <Box sx={toolbarSx}>
              <Button
                variant="outlined"
                onClick={handleRefreshLaunches}
                disabled={isRefreshingLaunches}
                startIcon={isRefreshingLaunches ? <CircularProgress size={18} color="inherit" /> : <RefreshIcon />}
              >
                {t(LOCALE.LAUNCHES.ACTIONS.REFRESH)}
              </Button>
            </Box>
          )}

          {error && (
            <Alert severity="error" sx={errorAlertSx}>
              {error}
            </Alert>
          )}

          {isLoadingAllLaunches && (
            <Box sx={loadingBoxSx}>
              <CircularProgress />
            </Box>
          )}

          {!isLoadingAllLaunches && launches.length === 0 && <Alert severity="info">Nenhum lançamento encontrado.</Alert>}

          {!isLoadingAllLaunches && launches.length > 0 && (
            <Box sx={launchesGridSx}>
              {launches.map((launch, index) => (
                <LaunchSummaryCard
                  key={`${launch.name}-${launch.launch_datetime}`}
                  launch={launch}
                  index={index}
                  onDetailsClick={handleLaunchDetails}
                />
              ))}
            </Box>
          )}
        </Container>
      </Box>

      <Snackbar
        open={isRefreshSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseRefreshSnackbar}
        anchorOrigin={snackbarAnchorOrigin}
      >
        <Alert onClose={handleCloseRefreshSnackbar} severity="success" variant="filled" sx={snackbarAlertSx}>
          {t(LOCALE.LAUNCHES.ACTIONS.REFRESH_SUCCESS)}
        </Alert>
      </Snackbar>
    </>
  );
}

const pageBackgroundSx = { backgroundColor: BACKGROUND_COLOR };
const containerSx = { py: 6 };
const toolbarSx = { display: 'flex', justifyContent: 'flex-end', mb: 3 };
const errorAlertSx = { mb: 3 };
const snackbarAnchorOrigin = { vertical: 'bottom', horizontal: 'center' } as const;
const snackbarAlertSx = { width: '100%' };
const loadingBoxSx = { display: 'flex', justifyContent: 'center', py: 10 };
const launchesGridSx = {
  display: 'grid',
  gap: 3,
  gridTemplateColumns: {
    xs: '1fr',
    sm: 'repeat(2, minmax(0, 1fr))',
    md: 'repeat(2, minmax(0, 1fr))'
  }
};
