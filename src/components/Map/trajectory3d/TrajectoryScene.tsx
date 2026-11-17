import { MutableRefObject, useEffect, useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Line, OrbitControls } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { BufferAttribute, BufferGeometry, Color, DoubleSide, Mesh, Vector3 } from 'three';
import { formatAltitudeInKm } from '@/src/shared/utils/formatters.utils';
import { SatelliteGround } from './useSatelliteGround';
import { downsampleIndices, interpolatePosition, TrajectoryModel } from './trajectory.utils';

const MAX_LINE_POINTS = 4000;
const MAX_CURTAIN_POINTS = 800;
const TICK_INTERVAL_MS = 100;

export const START_COLOR = '#43a047';
export const BURST_COLOR = '#ffffff';
export const END_COLOR = '#ffb300';

type TrajectorySceneProps = {
  model: TrajectoryModel;
  ground: SatelliteGround | null;
  ascentColor: string;
  descentColor: string;
  lineWeight: number;
  verticalScale: number;
  playbackTimeRef: MutableRefObject<number>;
  isPlaying: boolean;
  playbackSpeed: number;
  onPlaybackTick: (timeMs: number) => void;
  onPlaybackEnd: () => void;
  resetViewKey: number;
  labels: SceneLabelData[];
  labelElementsRef: MutableRefObject<(HTMLDivElement | null)[]>;
};

export type SceneLabelData = { key: string; text: string; position: Vector3 };

const getAltitudeAxis = (model: TrajectoryModel) => {
  const step = model.maxAltitudeKm > 40 ? 10 : 5;
  const topKm = Math.max(step, Math.ceil(model.maxAltitudeKm / step) * step);
  return {
    origin: model.points[0],
    topKm,
    tickSize: model.spanKm * 0.012,
    ticks: Array.from({ length: topKm / step }, (_, i) => (i + 1) * step)
  };
};

const getMarkerRadius = (model: TrajectoryModel) => model.spanKm * 0.006;

/**
 * Rótulos da cena (eixo de altitude e marcadores), em coordenadas locais.
 * São renderizados como divs comuns fora do Canvas e posicionados a cada frame pelo LabelProjector.
 */
export const buildSceneLabels = (model: TrajectoryModel): SceneLabelData[] => {
  const { origin, tickSize, ticks } = getAltitudeAxis(model);
  const labelOffset = getMarkerRadius(model) * 4;
  const burst = model.points[model.burstIndex];
  const end = model.points[model.points.length - 1];

  return [
    ...ticks.map((km) => ({
      key: `tick-${km}`,
      text: `${km} km`,
      position: new Vector3(origin.x - tickSize * 4, km, origin.z)
    })),
    { key: 'start', text: 'Lançamento', position: new Vector3(origin.x, origin.y + labelOffset, origin.z) },
    {
      key: 'burst',
      text: `Altitude máx. · ${formatAltitudeInKm(model.records[model.burstIndex].alt)}`,
      position: new Vector3(burst.x, burst.y + labelOffset, burst.z)
    },
    { key: 'end', text: 'Fim da trajetória', position: new Vector3(end.x, end.y + labelOffset, end.z) }
  ];
};

export const getInitialCamera = (model: TrajectoryModel, verticalScale: number) => {
  const target = new Vector3(model.center.x, model.center.y * verticalScale, model.center.z);
  const distance = model.spanKm * 1.6;
  const position = target.clone().add(new Vector3(distance * 0.55, distance * 0.55, distance * 0.75));
  return { target, position };
};

function CameraRig({
  model,
  verticalScale,
  resetViewKey
}: {
  model: TrajectoryModel;
  verticalScale: number;
  resetViewKey: number;
}) {
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const camera = useThree((state) => state.camera);
  const initial = useMemo(() => getInitialCamera(model, verticalScale), [model, verticalScale]);

  useEffect(() => {
    camera.position.copy(initial.position);
    controlsRef.current?.target.copy(initial.target);
    controlsRef.current?.update();
  }, [camera, initial, resetViewKey]);

  return (
    <OrbitControls
      ref={controlsRef}
      makeDefault
      target={initial.target}
      enableDamping
      dampingFactor={0.08}
      rotateSpeed={0.6}
      screenSpacePanning={false}
      maxPolarAngle={Math.PI / 2 - 0.06}
      minDistance={model.spanKm * 0.03}
      maxDistance={model.spanKm * 5}
    />
  );
}

/** Projeta os rótulos 3D na tela e move as divs correspondentes, sem re-renderizar o React. */
function LabelProjector({
  labels,
  labelElementsRef,
  verticalScale
}: Pick<TrajectorySceneProps, 'labels' | 'labelElementsRef' | 'verticalScale'>) {
  const projected = useMemo(() => new Vector3(), []);

  useFrame(({ camera, size }) => {
    labels.forEach((label, index) => {
      const element = labelElementsRef.current[index];
      if (!element) return;

      projected.set(label.position.x, label.position.y * verticalScale, label.position.z).project(camera);
      const isVisible = projected.z < 1 && Math.abs(projected.x) <= 1.1 && Math.abs(projected.y) <= 1.1;

      element.style.display = isVisible ? 'block' : 'none';
      if (isVisible) {
        const x = ((projected.x + 1) / 2) * size.width;
        const y = ((1 - projected.y) / 2) * size.height;
        element.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
      }
    });
  });

  return null;
}

function Ground({ ground }: { ground: SatelliteGround }) {
  return (
    <mesh geometry={ground.geometry} receiveShadow>
      {ground.texture ? (
        <meshStandardMaterial map={ground.texture} roughness={1} metalness={0} />
      ) : (
        <meshStandardMaterial color="#4a6b45" roughness={1} metalness={0} />
      )}
    </mesh>
  );
}

function TrajectoryLine({
  model,
  ascentColor,
  descentColor,
  lineWeight
}: {
  model: TrajectoryModel;
  ascentColor: string;
  descentColor: string;
  lineWeight: number;
}) {
  const { points, colors } = useMemo(() => {
    const ascent = new Color(ascentColor);
    const descent = new Color(descentColor);
    const indices = downsampleIndices(model.points.length, MAX_LINE_POINTS, [model.burstIndex]);
    return {
      points: indices.map((index) => model.points[index]),
      colors: indices.map((index) => (index <= model.burstIndex ? ascent : descent))
    };
  }, [model, ascentColor, descentColor]);

  return <Line points={points} vertexColors={colors} lineWidth={lineWeight} />;
}

/** Faixa semitransparente ligando a trajetória ao chão, para facilitar a leitura da altura. */
function TrajectoryCurtain({
  model,
  ground,
  ascentColor,
  descentColor
}: {
  model: TrajectoryModel;
  ground: SatelliteGround | null;
  ascentColor: string;
  descentColor: string;
}) {
  const geometry = useMemo(() => {
    const ascent = new Color(ascentColor);
    const descent = new Color(descentColor);
    const indices = downsampleIndices(model.points.length, MAX_CURTAIN_POINTS, [model.burstIndex]);
    const positions = new Float32Array(indices.length * 6);
    const colors = new Float32Array(indices.length * 6);
    const triangles: number[] = [];

    indices.forEach((pointIndex, i) => {
      const point = model.points[pointIndex];
      const groundY = ground ? ground.groundHeightAt(point.x, point.z) : 0;
      const color = pointIndex <= model.burstIndex ? ascent : descent;

      positions.set([point.x, point.y, point.z, point.x, Math.min(groundY, point.y), point.z], i * 6);
      colors.set([color.r, color.g, color.b, color.r, color.g, color.b], i * 6);

      if (i > 0) {
        const top = i * 2;
        const previousTop = top - 2;
        triangles.push(previousTop, previousTop + 1, top, top, previousTop + 1, top + 1);
      }
    });

    const built = new BufferGeometry();
    built.setAttribute('position', new BufferAttribute(positions, 3));
    built.setAttribute('color', new BufferAttribute(colors, 3));
    built.setIndex(triangles);
    return built;
  }, [model, ground, ascentColor, descentColor]);

  useEffect(() => () => geometry.dispose(), [geometry]);

  return (
    <mesh geometry={geometry} renderOrder={1}>
      <meshBasicMaterial vertexColors transparent opacity={0.22} side={DoubleSide} depthWrite={false} />
    </mesh>
  );
}

/** Eixo vertical no ponto de lançamento com marcações em km. */
function AltitudeAxis({ model, ground }: { model: TrajectoryModel; ground: SatelliteGround | null }) {
  const { origin, topKm, tickSize, ticks } = getAltitudeAxis(model);
  const baseY = ground ? ground.groundHeightAt(origin.x, origin.z) : 0;

  return (
    <group>
      <Line
        points={[
          [origin.x, baseY, origin.z],
          [origin.x, topKm, origin.z]
        ]}
        color="#ffffff"
        transparent
        opacity={0.7}
        lineWidth={1.5}
      />
      {ticks.map((km) => (
        <Line
          key={km}
          points={[
            [origin.x - tickSize, km, origin.z],
            [origin.x + tickSize, km, origin.z]
          ]}
          color="#ffffff"
          transparent
          opacity={0.7}
          lineWidth={1.5}
        />
      ))}
    </group>
  );
}

function Markers({ model, ground }: { model: TrajectoryModel; ground: SatelliteGround | null }) {
  const radius = getMarkerRadius(model);
  const burst = model.points[model.burstIndex];

  const markers = [
    { key: 'start', point: model.points[0], color: START_COLOR },
    { key: 'burst', point: burst, color: BURST_COLOR },
    { key: 'end', point: model.points[model.points.length - 1], color: END_COLOR }
  ];

  return (
    <group>
      {markers.map(({ key, point, color }) => (
        <mesh key={key} position={point}>
          <sphereGeometry args={[radius, 24, 24]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} />
        </mesh>
      ))}
      {ground && (
        <mesh position={[burst.x, ground.groundHeightAt(burst.x, burst.z), burst.z]} rotation-x={-Math.PI / 2}>
          <ringGeometry args={[radius * 0.8, radius * 1.4, 32]} />
          <meshBasicMaterial color={BURST_COLOR} transparent opacity={0.8} />
        </mesh>
      )}
    </group>
  );
}

/** Sonda animada percorrendo a trajetória, com uma linha vertical até o chão. */
function Payload({
  model,
  ground,
  playbackTimeRef,
  isPlaying,
  playbackSpeed,
  onPlaybackTick,
  onPlaybackEnd
}: Pick<
  TrajectorySceneProps,
  'model' | 'ground' | 'playbackTimeRef' | 'isPlaying' | 'playbackSpeed' | 'onPlaybackTick' | 'onPlaybackEnd'
>) {
  const payloadRef = useRef<Mesh>(null);
  const dropLineRef = useRef<Mesh>(null);
  const lastTickRef = useRef(0);
  const position = useMemo(() => new Vector3(), []);
  const radius = model.spanKm * 0.009;

  useFrame((state, delta) => {
    if (isPlaying) {
      const nextTime = playbackTimeRef.current + delta * 1000 * playbackSpeed;
      playbackTimeRef.current = Math.min(nextTime, model.durationMs);

      if (state.clock.elapsedTime * 1000 - lastTickRef.current > TICK_INTERVAL_MS) {
        lastTickRef.current = state.clock.elapsedTime * 1000;
        onPlaybackTick(playbackTimeRef.current);
      }

      if (nextTime >= model.durationMs) {
        onPlaybackTick(model.durationMs);
        onPlaybackEnd();
      }
    }

    interpolatePosition(model, playbackTimeRef.current, position);
    payloadRef.current?.position.copy(position);

    if (dropLineRef.current) {
      const groundY = ground ? ground.groundHeightAt(position.x, position.z) : 0;
      const height = Math.max(position.y - groundY, 0.001);
      dropLineRef.current.position.set(position.x, groundY + height / 2, position.z);
      dropLineRef.current.scale.set(1, height, 1);
    }
  });

  return (
    <group>
      <mesh ref={payloadRef}>
        <sphereGeometry args={[radius, 24, 24]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.8} />
      </mesh>
      <mesh ref={dropLineRef}>
        <cylinderGeometry args={[radius * 0.12, radius * 0.12, 1, 8]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

export default function TrajectoryScene(props: TrajectorySceneProps) {
  const { model, ground, ascentColor, descentColor, lineWeight, verticalScale, resetViewKey, labels, labelElementsRef } = props;
  const { spanKm } = model;

  return (
    <>
      <fog attach="fog" args={['#a9c8e8', spanKm * 3, spanKm * 9]} />
      <ambientLight intensity={1.1} />
      <directionalLight position={[spanKm, spanKm * 2, spanKm * 0.6]} intensity={1.6} />
      <hemisphereLight args={['#dceaf7', '#3d4a2f', 0.4]} />

      <CameraRig model={model} verticalScale={verticalScale} resetViewKey={resetViewKey} />
      <LabelProjector labels={labels} labelElementsRef={labelElementsRef} verticalScale={verticalScale} />

      <group scale={[1, verticalScale, 1]}>
        {ground && <Ground ground={ground} />}
        <TrajectoryCurtain model={model} ground={ground} ascentColor={ascentColor} descentColor={descentColor} />
        <TrajectoryLine model={model} ascentColor={ascentColor} descentColor={descentColor} lineWeight={lineWeight} />
        <AltitudeAxis model={model} ground={ground} />
        <Markers model={model} ground={ground} />
        <Payload {...props} />
      </group>
    </>
  );
}
