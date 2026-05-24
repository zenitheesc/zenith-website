import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAllLaunches } from '@/src/core/services/launches/useGetAllLaunches.service';
import {
  convertAltitudeToKm,
  formatLaunchDatetime,
  formatLaunchName,
  slugifyLaunchName
} from '@/src/shared/utils/formatters.utils';
import { Alert, Box, Button, Card, CardActions, CardContent, CardHeader } from '@mui/material';
import { Chip, CircularProgress, Container, Stack, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector } from '@mui/lab';
import { TimelineContent, TimelineDot, timelineItemClasses } from '@mui/lab';
import type {} from '@mui/lab/themeAugmentation';
import PinDropIcon from '@mui/icons-material/PinDrop';
import HeightIcon from '@mui/icons-material/Height';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';

const SELECTED_LAUNCH_STORAGE_KEY = 'zenith-selected-launch';

// TODO mover textos para arquivo de tradução
export default function LaunchesPage() {
  const { launches, isLoadingAllLaunches, error } = useAllLaunches();
  const router = useRouter();

  useEffect(() => {}, [isLoadingAllLaunches, launches]);

  const handleLaunchDetails = (launch: (typeof launches)[number]) => {
    sessionStorage.setItem(SELECTED_LAUNCH_STORAGE_KEY, JSON.stringify(launch));
    router.push(`/launches/${slugifyLaunchName(launch.name)}`);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Stack spacing={1} sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 800 }}>
          Lançamentos
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Acompanhe os lançamentos e os dados de cada missão.
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
            <Card key={`${launch.name}-${launch.launch_datetime}`} elevation={4} sx={{ height: '100%', borderRadius: 3 }}>
              <CardHeader
                sx={{ pb: 0 }}
                title={
                  <Typography variant="h6" component="h2" sx={{ fontWeight: 700 }}>
                    {formatLaunchName(launch.name)}
                  </Typography>
                }
                subheader={formatLaunchDatetime(launch.launch_datetime)}
              />
              <CardContent sx={{ py: 0, mb: 0 }}>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Timeline
                      sx={{
                        flex: 1,
                        p: 0,
                        mb: 0,
                        [`& .${timelineItemClasses.root}:before`]: {
                          flex: 0,
                          padding: 0
                        }
                      }}>
                      <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot sx={{ boxShadow: 'none', backgroundColor: 'transparent', py: 0, my: 1 }}>
                            <ShareLocationIcon color="primary" />
                          </TimelineDot>
                          <TimelineConnector />
                          {/* <RouteIcon sx={{ color: '#bdbdbd' }} /> */}
                          {/* <TimelineConnector /> */}
                        </TimelineSeparator>
                        <TimelineContent>{launch.launch_city}</TimelineContent>
                      </TimelineItem>

                      <TimelineItem sx={{ mb: 0, pb: 0 }}>
                        <TimelineSeparator>
                          <TimelineDot sx={{ boxShadow: 'none', backgroundColor: 'transparent', py: 0, my: 1 }}>
                            <PinDropIcon color="primary" />
                          </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent>{launch.landing_city}</TimelineContent>
                      </TimelineItem>
                    </Timeline>

                    <Chip
                      icon={<HeightIcon />}
                      label={convertAltitudeToKm(launch.max_altitude)}
                      color="primary"
                      variant="filled"
                      sx={{ alignSelf: 'flex-start', mt: 3 }}
                    />
                  </Box>
                </Stack>
              </CardContent>
              <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button size="small" endIcon={<ChevronRightIcon />} onClick={() => handleLaunchDetails(launch)}>
                  Ver detalhes
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      )}
    </Container>
  );
}
