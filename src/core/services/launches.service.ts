import {
  getAllLaunches as getAllLaunchesApi,
  getLaunchContent as getLaunchContentApi
} from '@/src/core/api/launches/launches-api.service';
import { LaunchRecord, LaunchSummary } from '@/src/shared/types/api/launches-api.types';

export const getAllLaunches = async (): Promise<LaunchSummary[]> => {
  return getAllLaunchesApi();
};

export const getLaunchContent = async (downloadUrl: string): Promise<LaunchRecord[]> => {
  return getLaunchContentApi(downloadUrl);
};
