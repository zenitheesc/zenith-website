import { LaunchSummary } from '../../types/api/launches-api.types';

export type LaunchSummaryCardProps = {
  launch: LaunchSummary;
  index: number;
  onDetailsClick: (launch: LaunchSummary) => void;
};
