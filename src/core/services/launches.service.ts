import {
  getAllLaunches as getAllLaunchesApi,
  getLaunchContent as getLaunchContentApi
} from '@/src/core/api/launches/launches-api.service';
import { LaunchRecord, LaunchSummary } from '@/src/shared/types/api/launches-api.types';
import { readCachedLaunches, saveCachedLaunches } from './launches/launchesCache';

type GetAllLaunchesOptions = {
  forceRefresh?: boolean;
};

export const getAllLaunches = async ({ forceRefresh = false }: GetAllLaunchesOptions = {}): Promise<LaunchSummary[]> => {
  if (!forceRefresh) {
    const cached = readCachedLaunches();
    if (cached) return cached;
  }

  const data = await getAllLaunchesApi({ bypassCache: forceRefresh });
  saveCachedLaunches(data);
  return data;
};

export const getLaunchContent = async (downloadUrl: string): Promise<LaunchRecord[]> => {
  return getLaunchContentApi(downloadUrl);
};
