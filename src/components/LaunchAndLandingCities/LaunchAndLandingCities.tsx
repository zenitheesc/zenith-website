import { Box } from '@mui/material';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  timelineItemClasses
} from '@mui/lab';
import type {} from '@mui/lab/themeAugmentation';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import PinDropIcon from '@mui/icons-material/PinDrop';
import { LaunchAndLandingCitiesProps } from '@/src/shared/props/components/launch-and-landing.props';

export default function LaunchAndLandingCities({
  startLabel,
  endLabel,
  startIcon = <ShareLocationIcon color="primary" />,
  endIcon = <PinDropIcon color="primary" />
}: LaunchAndLandingCitiesProps) {
  return (
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
            <TimelineDot sx={{ boxShadow: 'none', backgroundColor: 'transparent', py: 0, my: 1 }}>{startIcon}</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{startLabel}</TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{ mb: 0, pb: 0 }}>
          <TimelineSeparator>
            <TimelineDot sx={{ boxShadow: 'none', backgroundColor: 'transparent', py: 0, my: 1 }}>{endIcon}</TimelineDot>
          </TimelineSeparator>
          <TimelineContent>{endLabel}</TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}
