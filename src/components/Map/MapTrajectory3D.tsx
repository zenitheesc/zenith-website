import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import ReplayIcon from '@mui/icons-material/Replay';
import { Box, CircularProgress, IconButton, Slider, ToggleButton, ToggleButtonGroup, Tooltip } from '@mui/material';
import { LaunchRecord } from '@/src/shared/types/api/launches-api.types';
import { formatAltitudeInKm } from '@/src/shared/utils/formatters.utils';
import TrajectoryScene, { buildSceneLabels, END_COLOR, getInitialCamera, START_COLOR } from './trajectory3d/TrajectoryScene';
import { buildTrajectoryModel, findIndexAtTime } from './trajectory3d/trajectory.utils';
import { useSatelliteGround } from './trajectory3d/useSatelliteGround';

export type MapTrajectory3DProps = {
  records: LaunchRecord[];
  lineColor?: string;
  descentColor?: string;
  lineWeight?: number;
  mapHeight?: string;
  /** Multiplica a escala vertical (trajetória e relevo). 1 = escala real. */
  altitudeExaggeration?: number;
};

const PLAYBACK_SPEEDS = [60, 120, 300, 600];
const DEFAULT_PLAYBACK_SPEED = 120;

const formatElapsed = (ms: number) => {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const pad = (value: number) => String(value).padStart(2, '0');
  return `T+${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

export default function MapTrajectory3D({
  records,
  lineColor = '#f44336',
  descentColor = '#29b6f6',
  lineWeight = 4,
  mapHeight = '600px',
  altitudeExaggeration = 1
}: MapTrajectory3DProps) {
  const model = useMemo(() => (records.length > 1 ? buildTrajectoryModel(records) : null), [records]);
  const { status: groundStatus, ground } = useSatelliteGround(model);
  const labels = useMemo(() => (model ? buildSceneLabels(model) : []), [model]);
  const labelElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [resetViewKey, setResetViewKey] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(DEFAULT_PLAYBACK_SPEED);
  const [playbackTime, setPlaybackTime] = useState(0);
  const playbackTimeRef = useRef(0);

  useEffect(() => {
    playbackTimeRef.current = 0;
    setPlaybackTime(0);
    setIsPlaying(false);
  }, [model]);

  useEffect(() => {
    if (!isFullscreen) return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsFullscreen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullscreen]);

  const handlePlaybackEnd = useCallback(() => setIsPlaying(false), []);

  const handleTogglePlay = () => {
    if (!model) return;
    if (!isPlaying && playbackTimeRef.current >= model.durationMs) {
      playbackTimeRef.current = 0;
      setPlaybackTime(0);
    }
    setIsPlaying((current) => !current);
  };

  const handleSeek = (_event: Event, value: number | number[]) => {
    const time = Array.isArray(value) ? value[0] : value;
    playbackTimeRef.current = time;
    setPlaybackTime(time);
  };

  if (!model) return null;

  const initialCamera = getInitialCamera(model, altitudeExaggeration);
  const currentRecord = records[findIndexAtTime(model.timesMs, playbackTime)];
  const isAscending = findIndexAtTime(model.timesMs, playbackTime) <= model.burstIndex;
  const hasEnded = playbackTime >= model.durationMs;

  return (
    <Box
      sx={{
        ...containerSx,
        height: isFullscreen ? '100vh' : mapHeight,
        position: isFullscreen ? 'fixed' : 'relative',
        inset: isFullscreen ? 0 : 'auto',
        zIndex: isFullscreen ? 1300 : 'auto'
      }}
    >
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        camera={{ fov: 45, near: 0.05, far: model.spanKm * 30, position: initialCamera.position.toArray() }}
      >
        <TrajectoryScene
          model={model}
          ground={ground}
          ascentColor={lineColor}
          descentColor={descentColor}
          lineWeight={lineWeight}
          verticalScale={altitudeExaggeration}
          playbackTimeRef={playbackTimeRef}
          isPlaying={isPlaying}
          playbackSpeed={playbackSpeed}
          onPlaybackTick={setPlaybackTime}
          onPlaybackEnd={handlePlaybackEnd}
          resetViewKey={resetViewKey}
          labels={labels}
          labelElementsRef={labelElementsRef}
        />
      </Canvas>

      {labels.map((label, index) => (
        <Box
          key={label.key}
          ref={(element: HTMLDivElement | null) => {
            labelElementsRef.current[index] = element;
          }}
          sx={sceneLabelSx}
        >
          {label.text}
        </Box>
      ))}

      {groundStatus === 'loading' && (
        <Box sx={loadingOverlaySx}>
          <CircularProgress size={20} color="inherit" />
          Carregando imagem de satélite e relevo…
        </Box>
      )}

      <Box sx={topLeftToolbarSx}>
        <Tooltip title={isFullscreen ? 'Sair da tela cheia' : 'Expandir mapa'}>
          <IconButton onClick={() => setIsFullscreen((current) => !current)} sx={toolbarButtonSx}>
            {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
          </IconButton>
        </Tooltip>
        <Tooltip title="Recentralizar visão">
          <IconButton onClick={() => setResetViewKey((current) => current + 1)} sx={toolbarButtonSx}>
            <CenterFocusStrongIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Box sx={legendSx}>
        <LegendItem color={lineColor} label="Subida" />
        <LegendItem color={descentColor} label="Descida" />
        <LegendItem color={START_COLOR} label="Lançamento" round />
        <LegendItem color={END_COLOR} label="Fim da trajetória" round />
      </Box>

      <Box sx={hintSx}>Arraste para girar · botão direito para mover · role para zoom</Box>

      <Box sx={bottomPanelSx}>
        <Box sx={telemetrySx}>
          <span>{formatElapsed(playbackTime)}</span>
          <span>Altitude: {formatAltitudeInKm(currentRecord.alt)}</span>
          <span>Vel. vertical: {currentRecord.vel_v.toFixed(1)} m/s</span>
          <span>Vel. horizontal: {currentRecord.vel_h.toFixed(1)} m/s</span>
          <span>{isAscending ? 'Subindo' : 'Descendo'}</span>
        </Box>

        <Box sx={playbackRowSx}>
          <Tooltip title={isPlaying ? 'Pausar' : hasEnded ? 'Repetir' : 'Reproduzir voo'}>
            <IconButton onClick={handleTogglePlay} sx={{ color: '#fff' }}>
              {isPlaying ? <PauseIcon /> : hasEnded ? <ReplayIcon /> : <PlayArrowIcon />}
            </IconButton>
          </Tooltip>
          <Slider
            size="small"
            min={0}
            max={model.durationMs}
            value={playbackTime}
            onChange={handleSeek}
            aria-label="Tempo de voo"
            sx={{ color: '#fff', mx: 1 }}
          />
          <ToggleButtonGroup
            exclusive
            size="small"
            value={playbackSpeed}
            onChange={(_event, value: number | null) => value && setPlaybackSpeed(value)}
            aria-label="Velocidade da reprodução"
            sx={speedToggleSx}
          >
            {PLAYBACK_SPEEDS.map((speed) => (
              <ToggleButton key={speed} value={speed}>
                {speed}x
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>
      </Box>

      <Box sx={attributionSx}>Imagens © Esri, Maxar, Earthstar Geographics · Relevo: Mapzen Terrain Tiles (AWS)</Box>
    </Box>
  );
}

function LegendItem({ color, label, round = false }: { color: string; label: string; round?: boolean }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Box
        sx={{
          width: round ? 10 : 18,
          height: round ? 10 : 4,
          borderRadius: round ? '50%' : 2,
          backgroundColor: color
        }}
      />
      {label}
    </Box>
  );
}

const overlayBaseSx = {
  position: 'absolute',
  color: '#fff',
  backgroundColor: 'rgba(15, 23, 42, 0.72)',
  borderRadius: 1,
  fontSize: 12,
  zIndex: 30
} as const;

const containerSx = {
  width: '100%',
  overflow: 'hidden',
  background: 'linear-gradient(180deg, #0b1d3a 0%, #3d6ea3 55%, #a9c8e8 100%)'
} as const;

const sceneLabelSx = {
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'none',
  px: 1,
  py: 0.25,
  borderRadius: 1,
  backgroundColor: 'rgba(15, 23, 42, 0.78)',
  color: '#fff',
  fontSize: 12,
  fontWeight: 600,
  whiteSpace: 'nowrap',
  userSelect: 'none',
  pointerEvents: 'none',
  zIndex: 20
} as const;

const loadingOverlaySx = {
  ...overlayBaseSx,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  alignItems: 'center',
  gap: 1.5,
  px: 2,
  py: 1.5,
  fontSize: 14
} as const;

const topLeftToolbarSx = {
  position: 'absolute',
  top: 8,
  left: 8,
  display: 'flex',
  flexDirection: 'column',
  gap: 1,
  zIndex: 30
} as const;

const toolbarButtonSx = {
  width: 40,
  height: 40,
  backgroundColor: 'background.paper',
  boxShadow: 1,
  '&:hover': { backgroundColor: 'background.paper' }
} as const;

const legendSx = {
  ...overlayBaseSx,
  top: 8,
  right: 8,
  display: 'grid',
  gap: 0.5,
  px: 1.5,
  py: 1
} as const;

const hintSx = {
  ...overlayBaseSx,
  top: 8,
  left: '50%',
  transform: 'translateX(-50%)',
  px: 1.5,
  py: 0.5,
  display: { xs: 'none', md: 'block' }
} as const;

const bottomPanelSx = {
  ...overlayBaseSx,
  left: 8,
  right: 8,
  bottom: 24,
  px: 1.5,
  py: 1
} as const;

const telemetrySx = {
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: 2,
  rowGap: 0.5,
  fontVariantNumeric: 'tabular-nums',
  fontWeight: 600
} as const;

const playbackRowSx = { display: 'flex', alignItems: 'center' } as const;

const speedToggleSx = {
  '& .MuiToggleButton-root': {
    color: 'rgba(255,255,255,0.7)',
    borderColor: 'rgba(255,255,255,0.3)',
    px: 1,
    py: 0.25,
    fontSize: 11
  },
  '& .MuiToggleButton-root.Mui-selected': { color: '#fff', backgroundColor: 'rgba(255,255,255,0.2)' }
} as const;

const attributionSx = {
  position: 'absolute',
  right: 8,
  bottom: 4,
  color: 'rgba(255,255,255,0.85)',
  fontSize: 10,
  textShadow: '0 0 2px rgba(0,0,0,0.8)',
  zIndex: 30
} as const;
