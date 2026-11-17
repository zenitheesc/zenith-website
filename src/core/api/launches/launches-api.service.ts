import { environment } from '@/src/environments/environment';
import { LaunchRecord, LaunchSummary } from '@/src/shared/types/api/launches-api.types';

type GetAllLaunchesApiOptions = {
  signal?: AbortSignal;
  bypassCache?: boolean;
};

export const getAllLaunches = async ({ signal, bypassCache = false }: GetAllLaunchesApiOptions = {}): Promise<
  LaunchSummary[]
> => {
  const url = new URL(environment.launchesEndpoints.launches.all);
  if (bypassCache) {
    // O GitHub Pages responde com max-age=600: sem isso o navegador/CDN devolvem a resposta em cache.
    url.searchParams.set('t', String(Date.now()));
  }

  const response = await fetch(url, { signal, cache: bypassCache ? 'no-store' : 'default' });
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
