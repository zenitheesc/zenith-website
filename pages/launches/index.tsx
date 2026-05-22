import dynamic from 'next/dynamic';
import { useMemo } from 'react';

export default function LaunchesPage() {
  const Map = useMemo(() => dynamic(() => import('../../src/components/Map'), { ssr: false }), []);
  return (
    <div>
      teste
      <Map />
    </div>
  );
}
