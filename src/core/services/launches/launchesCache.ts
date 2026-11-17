import { LaunchSummary } from '@/src/shared/types/api/launches-api.types';

export const LAUNCHES_STORAGE_KEY = 'zenith-launches';
export const LAUNCHES_CACHE_TTL_MS = 24 * 60 * 60 * 1000;

type CachedLaunches = {
  savedAt: number;
  data: LaunchSummary[];
};

const isStorageAvailable = () => typeof window !== 'undefined' && Boolean(window.localStorage);

export const readCachedLaunches = (): LaunchSummary[] | null => {
  if (!isStorageAvailable()) return null;

  try {
    const raw = localStorage.getItem(LAUNCHES_STORAGE_KEY);
    if (!raw) return null;

    const parsed: CachedLaunches = JSON.parse(raw);
    const isValid = Array.isArray(parsed?.data) && typeof parsed?.savedAt === 'number';
    const isExpired = Date.now() - parsed.savedAt > LAUNCHES_CACHE_TTL_MS;

    if (!isValid || isExpired) {
      localStorage.removeItem(LAUNCHES_STORAGE_KEY);
      return null;
    }

    return parsed.data;
  } catch {
    localStorage.removeItem(LAUNCHES_STORAGE_KEY);
    return null;
  }
};

export const saveCachedLaunches = (data: LaunchSummary[]) => {
  if (!isStorageAvailable()) return;

  try {
    const payload: CachedLaunches = { savedAt: Date.now(), data };
    localStorage.setItem(LAUNCHES_STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // Storage cheio ou indisponível (ex.: modo privado): segue sem cache.
  }
};
