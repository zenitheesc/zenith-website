import { environment } from '@/src/environments/environment';
import { LaunchRecord } from '@/src/types/api/launches-api.types';
import { useState } from 'react';

export const useGetAllLaunches = () => {
  const [content, setContent] = useState<LaunchRecord[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAllLaunches = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(environment.launchesEndpoints.launches.all);
      if (!response.ok) {
        throw new Error('Failed to fetch all launches');
      }
      const data = await response.json();
      setContent(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { content, isLoading, error, fetchAllLaunches };
};
