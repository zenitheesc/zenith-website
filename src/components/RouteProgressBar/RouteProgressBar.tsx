import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import { colors } from '@/src/shared/styles/colors';

export default function RouteProgressBar() {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsNavigating(true);
    const handleDone = () => setIsNavigating(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleDone);
    router.events.on('routeChangeError', handleDone);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleDone);
      router.events.off('routeChangeError', handleDone);
    };
  }, [router]);

  if (!isNavigating) return null;

  return <Box sx={barSx} />;
}

const barSx = {
  position: 'fixed',
  top: 0,
  left: 0,
  height: 3,
  width: '100%',
  zIndex: 2000,
  backgroundColor: colors.secondary[500],
  transformOrigin: 'left',
  animation: 'route-progress-bar 1.2s ease-in-out infinite',
  '@keyframes route-progress-bar': {
    '0%': { transform: 'scaleX(0)', opacity: 1 },
    '70%': { transform: 'scaleX(0.85)', opacity: 1 },
    '100%': { transform: 'scaleX(0.95)', opacity: 0.6 }
  }
};
