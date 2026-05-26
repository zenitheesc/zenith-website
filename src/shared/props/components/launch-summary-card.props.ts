import { LaunchSummary } from '../../types/api/launches-api.types';

export type LaunchSummaryCardProps = {
  launch: LaunchSummary;
  onDetailsClick: (launch: LaunchSummary) => void;
};
