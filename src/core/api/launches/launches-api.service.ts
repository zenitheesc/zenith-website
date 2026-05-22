import { environment } from '@/src/environments/environment';
import { LaunchRecord, LaunchSummary } from '@/src/types/api/launches-api.types';

export const getAllLaunches = async (signal?: AbortSignal) => {
  const allLaunches = await fetch(environment.launchesEndpoints.launches.all, { signal });
  return allLaunches;
};

export const getLaunchContent = async (downloadUrl: string): Promise<LaunchRecord[]> => {
  const response = await fetch(downloadUrl);
  if (!response.ok) {
    throw new Error('Failed to fetch launch content');
  }
  const content = await response.json();
  return content;
};
