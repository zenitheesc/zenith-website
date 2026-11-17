import { Vector3 } from 'three';
import { LaunchRecord } from '@/src/shared/types/api/launches-api.types';
import { createLocalProjection, getPaddedBounds, MercatorBounds } from './geo.utils';

export type LocalProjection = ReturnType<typeof createLocalProjection>;

export type TrajectoryModel = {
  records: LaunchRecord[];
  /** Pontos em km: x = leste, y = altitude acima do nível do mar, z = sul. */
  points: Vector3[];
  /** Tempo de cada ponto em ms a partir do primeiro registro. */
  timesMs: number[];
  durationMs: number;
  burstIndex: number;
  maxAltitudeKm: number;
  /** Maior dimensão horizontal da cena, em km. */
  spanKm: number;
  center: Vector3;
  groundBounds: MercatorBounds;
  projection: LocalProjection;
};

export const buildTrajectoryModel = (records: LaunchRecord[]): TrajectoryModel => {
  const projection = createLocalProjection(records[0].lat, records[0].lon);
  const startTime = new Date(records[0].datetime).getTime();

  const points = records.map((record) => {
    const { x, z } = projection.project(record.lat, record.lon);
    return new Vector3(x, record.alt / 1000, z);
  });

  const timesMs = records.map((record) => Math.max(0, new Date(record.datetime).getTime() - startTime));

  const burstIndex = records.reduce((best, record, index) => (record.alt > records[best].alt ? index : best), 0);

  const xs = points.map((p) => p.x);
  const zs = points.map((p) => p.z);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minZ = Math.min(...zs);
  const maxZ = Math.max(...zs);
  const maxAltitudeKm = records[burstIndex].alt / 1000;
  const spanKm = Math.max(maxX - minX, maxZ - minZ, maxAltitudeKm, 10);

  return {
    records,
    points,
    timesMs,
    durationMs: timesMs[timesMs.length - 1] ?? 0,
    burstIndex,
    maxAltitudeKm,
    spanKm,
    center: new Vector3((minX + maxX) / 2, maxAltitudeKm / 3, (minZ + maxZ) / 2),
    groundBounds: getPaddedBounds(records),
    projection
  };
};

/** Reduz a quantidade de pontos mantendo o primeiro, o último e o ponto de estouro. */
export const downsampleIndices = (length: number, maxPoints: number, keep: number[] = []) => {
  if (length <= maxPoints) return Array.from({ length }, (_, index) => index);

  const step = (length - 1) / (maxPoints - 1);
  const indices = new Set<number>(keep);
  for (let i = 0; i < maxPoints; i += 1) {
    indices.add(Math.round(i * step));
  }
  return Array.from(indices).sort((a, b) => a - b);
};

/** Índice do último ponto com tempo <= timeMs (busca binária). */
export const findIndexAtTime = (timesMs: number[], timeMs: number) => {
  let low = 0;
  let high = timesMs.length - 1;
  while (low < high) {
    const mid = Math.ceil((low + high) / 2);
    if (timesMs[mid] <= timeMs) low = mid;
    else high = mid - 1;
  }
  return low;
};

export const interpolatePosition = (model: TrajectoryModel, timeMs: number, target: Vector3) => {
  const index = findIndexAtTime(model.timesMs, timeMs);
  const next = Math.min(index + 1, model.points.length - 1);
  const segment = model.timesMs[next] - model.timesMs[index];
  const fraction = segment > 0 ? Math.min(Math.max((timeMs - model.timesMs[index]) / segment, 0), 1) : 0;
  return target.copy(model.points[index]).lerp(model.points[next], fraction);
};
