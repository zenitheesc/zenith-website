import { useState, useEffect } from 'react';
import { LaunchSummary } from '@/src/shared/types/api/launches-api.types';
import { getAllLaunches } from '../launches.service';

export const useAllLaunches = () => {
  const [launches, setLaunches] = useState<LaunchSummary[]>([]);
  const [isLoadingAllLaunches, setIsLoadingAllLaunches] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchLaunches = async () => {
      setIsLoadingAllLaunches(true);
      setError(null);

      try {
        const rawData = await getAllLaunches();
        if (!controller.signal.aborted) {
          setLaunches(rawData);
        }
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') {
          return;
        }

        setError(err instanceof Error ? err.message : 'Ocorreu um erro inesperado');
      } finally {
        if (!controller.signal.aborted) {
          setIsLoadingAllLaunches(false);
        }
      }
    };

    fetchLaunches();

    return () => {
      controller.abort();
    };
  }, []);

  return { launches, isLoadingAllLaunches, error };
};
