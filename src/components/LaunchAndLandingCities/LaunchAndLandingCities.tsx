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
import { colors } from '@/src/shared/styles/colors';

export default function LaunchAndLandingCities({
  startLabel,
  endLabel,
  startIcon = <ShareLocationIcon sx={{ color: colors.accent[500] }} />,
  endIcon = <PinDropIcon sx={{ color: colors.accent[500] }} />
}: LaunchAndLandingCitiesProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
      <Timeline
        sx={{
          flex: 1,
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0
          }
        }}
      >
        <TimelineItem sx={{ minHeight: 0, mb: 0 }}>
          <TimelineSeparator>
            <TimelineDot sx={{ boxShadow: 'none', backgroundColor: '#000' }}>{startIcon}</TimelineDot>
          </TimelineSeparator>
          <TimelineContent sx={timelineContentSx}>{startLabel}</TimelineContent>
        </TimelineItem>

        <TimelineItem sx={connectorItemSx}>
          <TimelineSeparator sx={connectorSeparatorSx}>
            <TimelineConnector sx={timelineConnectorSx} />
          </TimelineSeparator>
          <TimelineContent sx={timelineContentSx} />
        </TimelineItem>

        <TimelineItem sx={{ minHeight: 0, mb: 0 }}>
          <TimelineSeparator>
            <TimelineDot sx={{ boxShadow: 'none', backgroundColor: '#000' }}>{endIcon}</TimelineDot>
          </TimelineSeparator>
          <TimelineContent sx={timelineContentSx}>{endLabel}</TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}

const timelineContentSx = { display: 'flex', alignItems: 'center', py: 0, my: 0 };
const timelineConnectorSx = { minHeight: 32 };
const connectorItemSx = { minHeight: 0, mb: 0, py: 0 };
const connectorSeparatorSx = { alignItems: 'center', width: 24, pl: 2 };
