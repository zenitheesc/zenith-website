import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAllLaunches } from '@/src/core/services/launches/useGetAllLaunches.service';
import { slugifyLaunchName } from '@/src/shared/utils/formatters.utils';
import { Alert, Box, CircularProgress, Container, Stack, Typography } from '@mui/material';
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
  const { launches, isLoadingAllLaunches, error } = useAllLaunches();
  const router = useRouter();

  const { t } = useTranslation();

  useEffect(() => {
    if (isLoadingAllLaunches || launches.length === 0) return;

    const savedScroll = sessionStorage.getItem(SCROLL_POSITION_KEY);
    if (savedScroll) {
      window.scrollTo({ top: parseInt(savedScroll), behavior: 'instant' });
      sessionStorage.removeItem(SCROLL_POSITION_KEY);
    }
  }, [isLoadingAllLaunches, launches]);

  const handleLaunchDetails = (launch: (typeof launches)[number]) => {
    sessionStorage.setItem(SELECTED_LAUNCH_STORAGE_KEY, JSON.stringify(launch));
    sessionStorage.setItem(SCROLL_POSITION_KEY, String(window.scrollY));
    router.push(`/launches/${slugifyLaunchName(launch.name)}`);
  };

  return (
    <>
      <HeadTags
        pageName={t(LOCALE.LAUNCHES.META_TAGS.PAGE_NAME)}
        title={t(LOCALE.LAUNCHES.META_TAGS.TITLE)}
        description={t(LOCALE.LAUNCHES.META_TAGS.DESCRIPTION)}
        pageTitle={t(LOCALE.LAUNCHES.META_TAGS.PAGE_TITLE)}
        lang={t(LOCALE.LAUNCHES.META_TAGS.LANG)}
      />
      <NavBar />
      <HeroSection
        backgroundImage="url(../images/Projetos/SondasAeroespaciais/Garatéa-II/photo4.webp)"
        title={t(LOCALE.LAUNCHES.META_TAGS.TITLE)}
        subtitle={t(LOCALE.LAUNCHES.META_TAGS.SUBTITLE)}
        page="launches"
      />
      <Container maxWidth="lg" sx={containerSx}>
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
    </>
  );
}

const containerSx = { py: 6, backgroundColor: BACKGROUND_COLOR };
const errorAlertSx = { mb: 3 };
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
