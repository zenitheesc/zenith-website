import { ReactNode } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { colors } from '@/src/shared/styles/colors';

type StatCardProps = {
  label: string;
  value: ReactNode;
  icon: ReactNode;
};

export default function StatCard({ label, value, icon }: StatCardProps) {
  return (
    <Paper elevation={0} sx={cardSx}>
      <Box sx={headerSx}>
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>
        <Box sx={iconCircleSx}>{icon}</Box>
      </Box>
      {typeof value === 'string' ? (
        <Typography variant="h4" component="p" sx={valueSx}>
          {value}
        </Typography>
      ) : (
        value
      )}
    </Paper>
  );
}

const cardSx = {
  flex: '1 1 200px',
  minWidth: 200,
  borderRadius: 3,
  border: '1px solid',
  borderColor: 'divider',
  p: 2.5
};
const headerSx = { display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 };
const iconCircleSx = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 36,
  height: 36,
  borderRadius: '50%',
  backgroundColor: colors.primary[50],
  color: colors.primary[600]
};
const valueSx = { fontWeight: 700 };
