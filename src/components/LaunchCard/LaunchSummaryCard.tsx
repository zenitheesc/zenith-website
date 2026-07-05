import { Card, CardActions, CardContent, CardHeader, Button, Chip, Stack, Typography, Box } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HeightIcon from '@mui/icons-material/Height';
import LaunchAndLandingCities from '@/src/components/LaunchAndLandingCities/LaunchAndLandingCities';
import { formatAltitudeInKm, formatLaunchDatetime, formatLaunchName } from '@/src/shared/utils/formatters.utils';
import { LaunchSummaryCardProps } from '@/src/shared/props/components/launch-summary-card.props';
import MapIcon from '@mui/icons-material/Map';

export default function LaunchSummaryCard({ launch, onDetailsClick }: LaunchSummaryCardProps) {
  return (
    <Card key={`${launch.name}-${launch.launch_datetime}`} elevation={1} sx={{ height: '100%', borderRadius: 3 }}>
      <CardHeader
        sx={{ pb: 0 }}
        title={
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
            <Typography variant="h6" component="h2" sx={{ fontWeight: 700 }}>
              {formatLaunchName(launch.name)}
            </Typography>
            <Chip icon={<HeightIcon />} label={formatAltitudeInKm(launch.max_altitude)} color="primary" variant="filled" />
          </Box>
        }
        subheader={formatLaunchDatetime(launch.launch_datetime)}
      />
      <CardContent sx={{ py: 0, mb: 0 }}>
        <Stack spacing={2}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <LaunchAndLandingCities startLabel={launch.launch_city} endLabel={launch.landing_city} />
          </Box>
        </Stack>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end', pt: 0 }}>
        <Button size="small" startIcon={<MapIcon />} endIcon={<ChevronRightIcon />} onClick={() => onDetailsClick(launch)}>
          Ver trajetória
        </Button>
      </CardActions>
    </Card>
  );
}
