import { useState, useEffect, useCallback, useRef } from 'react';
import { LaunchSummary } from '@/src/shared/types/api/launches-api.types';
import { getAllLaunches } from '../launches.service';

export const useAllLaunches = () => {
  const [launches, setLaunches] = useState<LaunchSummary[]>([]);
  const [isLoadingAllLaunches, setIsLoadingAllLaunches] = useState(true);
  const [isRefreshingLaunches, setIsRefreshingLaunches] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isMountedRef = useRef(true);

  const fetchLaunches = useCallback(async (forceRefresh: boolean): Promise<boolean> => {
    setError(null);

    try {
      const rawData = await getAllLaunches({ forceRefresh });
      if (isMountedRef.current) {
        setLaunches(rawData);
      }
      return true;
    } catch (err) {
      if (isMountedRef.current) {
        setError(err instanceof Error ? err.message : 'Ocorreu um erro inesperado');
      }
      return false;
    }
  }, []);

  useEffect(() => {
    isMountedRef.current = true;

    fetchLaunches(false).finally(() => {
      if (isMountedRef.current) {
        setIsLoadingAllLaunches(false);
      }
    });

    return () => {
      isMountedRef.current = false;
    };
  }, [fetchLaunches]);

  const refreshLaunches = useCallback(async (): Promise<boolean> => {
    setIsRefreshingLaunches(true);
    const succeeded = await fetchLaunches(true);
    if (isMountedRef.current) {
      setIsRefreshingLaunches(false);
    }
    return succeeded;
  }, [fetchLaunches]);

  return { launches, isLoadingAllLaunches, isRefreshingLaunches, refreshLaunches, error };
};
