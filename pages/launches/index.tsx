import { useAllLaunches } from '@/src/core/services/launches/useGetAllLaunches.service';
import { formatLaunchDatetime, formatLaunchName } from '@/src/shared/utils/formatters.utils';
import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  Container,
  Stack,
  Typography
} from '@mui/material';
import { useEffect } from 'react';

// TODO mover textos para arquivo de tradução
export default function LaunchesPage() {
  const { launches, isLoadingAllLaunches, error } = useAllLaunches();

  useEffect(() => {}, [isLoadingAllLaunches, launches]);

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
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
              <CardContent sx={{ pt: 1 }}>
                <Stack spacing={2}>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      {launch.launch_city} → {launch.landing_city}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="overline" color="text.secondary">
                      Altitude máxima
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {launch.max_altitude.toLocaleString('pt-BR')} m
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
              <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button size="small">Ver detalhes</Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      )}
    </Container>
  );
}
