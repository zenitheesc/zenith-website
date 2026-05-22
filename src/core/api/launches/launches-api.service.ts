import { environment } from '@/src/environments/environment';
import { LaunchRecord, LaunchSummary } from '@/src/types/api/launches-api.types';

export const getAllLaunches = async (): Promise<LaunchSummary[]> => {
  const response = await fetch(environment.launchesEndpoints.launches.all);
  if (!response.ok) {
    throw new Error('Failed to fetch launches data');
  }
  const data: LaunchSummary[] = await response.json();
  return data;
};

export const getLaunchContent = async (downloadUrl: string): Promise<LaunchRecord[]> => {
  const response = await fetch(downloadUrl);
  if (!response.ok) {
    throw new Error('Failed to fetch launch content');
  }
  const content = await response.json();
  return content;
};
