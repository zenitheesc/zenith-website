import { useEffect, useState } from 'react';
import { getLaunchContent } from '../launches.service';
import { LaunchRecord } from '@/src/shared/types/api/launches-api.types';

export const useGetLaunchContent = (downloadUrl: string, enabled = true) => {
  const [records, setRecords] = useState<LaunchRecord[]>([]);
  const [isLoadingRecords, setIsLoadingRecords] = useState(false);
  const [recordsError, setRecordsError] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled || !downloadUrl) return;

    const controller = new AbortController();

    const fetchLaunchContent = async () => {
      setIsLoadingRecords(true);
      setRecordsError(null);

      try {
        const data = await getLaunchContent(downloadUrl);
        if (!controller.signal.aborted) {
          setRecords(data);
        }
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') {
          return;
        }

        setRecordsError(err instanceof Error ? err.message : 'Ocorreu um erro inesperado');
      } finally {
        if (!controller.signal.aborted) {
          setIsLoadingRecords(false);
        }
      }
    };

    fetchLaunchContent();

    return () => {
      controller.abort();
    };
  }, [downloadUrl, enabled]);

  return { records, isLoadingRecords, recordsError };
};
