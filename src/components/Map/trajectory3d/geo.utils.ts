import { LaunchRecord } from '@/src/shared/types/api/launches-api.types';

/**
 * Utilitários geográficos da cena 3D.
 *
 * Tudo é projetado em Web Mercator (a mesma projeção dos tiles), e depois convertido para
 * quilômetros locais a partir do ponto de lançamento. 1 unidade da cena = 1 km.
 */

const EARTH_RADIUS_M = 6378137;
const WORLD_SIZE_M = 2 * Math.PI * EARTH_RADIUS_M;
const TILE_SIZE_PX = 256;

export const SATELLITE_TILE_URL = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
export const TERRAIN_TILE_URL = 'https://elevation-tiles-prod.s3.amazonaws.com/terrarium/{z}/{x}/{y}.png';

// Limite por lado: 16 tiles x 256 px = textura de 4096 px, suportada inclusive em celulares.
const MAX_SATELLITE_TILES_PER_SIDE = 16;
const MAX_TERRAIN_TILES_PER_SIDE = 8;
const MAX_SATELLITE_ZOOM = 17;
const MAX_TERRAIN_ZOOM = 14;

export type MercatorPoint = { x: number; y: number };
export type MercatorBounds = { minX: number; minY: number; maxX: number; maxY: number };

export const toMercator = (lat: number, lon: number): MercatorPoint => {
  const latRad = (Math.max(Math.min(lat, 85.0511), -85.0511) * Math.PI) / 180;
  return {
    x: (EARTH_RADIUS_M * lon * Math.PI) / 180,
    y: EARTH_RADIUS_M * Math.log(Math.tan(Math.PI / 4 + latRad / 2))
  };
};

/** Converte coordenadas Mercator para km locais (x = leste, z = sul), corrigindo a escala pela latitude. */
export const createLocalProjection = (originLat: number, originLon: number) => {
  const origin = toMercator(originLat, originLon);
  const scale = Math.cos((originLat * Math.PI) / 180) / 1000;

  return {
    mercatorToLocal: (point: MercatorPoint) => ({
      x: (point.x - origin.x) * scale,
      z: -(point.y - origin.y) * scale
    }),
    localToMercator: (x: number, z: number): MercatorPoint => ({
      x: x / scale + origin.x,
      y: -z / scale + origin.y
    }),
    project: (lat: number, lon: number) => {
      const point = toMercator(lat, lon);
      return { x: (point.x - origin.x) * scale, z: -(point.y - origin.y) * scale };
    }
  };
};

/** Área em volta da trajetória, com folga para o voo não ficar colado na borda do chão. */
export const getPaddedBounds = (records: LaunchRecord[]): MercatorBounds => {
  const points = records.map((record) => toMercator(record.lat, record.lon));
  let minX = Math.min(...points.map((p) => p.x));
  let maxX = Math.max(...points.map((p) => p.x));
  let minY = Math.min(...points.map((p) => p.y));
  let maxY = Math.max(...points.map((p) => p.y));

  const minSpan = 40000;
  const span = Math.max(maxX - minX, maxY - minY, minSpan);
  const padding = span * 0.35;
  const centerX = (minX + maxX) / 2;
  const centerY = (minY + maxY) / 2;
  const halfSize = span / 2 + padding;

  minX = centerX - halfSize;
  maxX = centerX + halfSize;
  minY = centerY - halfSize;
  maxY = centerY + halfSize;

  return { minX, minY, maxX, maxY };
};

type TileRange = { zoom: number; minTileX: number; maxTileX: number; minTileY: number; maxTileY: number };

const mercatorToTile = (value: number, zoom: number, axis: 'x' | 'y') => {
  const tiles = 2 ** zoom;
  const normalized = axis === 'x' ? (value + WORLD_SIZE_M / 2) / WORLD_SIZE_M : (WORLD_SIZE_M / 2 - value) / WORLD_SIZE_M;
  return Math.floor(normalized * tiles);
};

const getTileRange = (bounds: MercatorBounds, zoom: number): TileRange => ({
  zoom,
  minTileX: mercatorToTile(bounds.minX, zoom, 'x'),
  maxTileX: mercatorToTile(bounds.maxX, zoom, 'x'),
  minTileY: mercatorToTile(bounds.maxY, zoom, 'y'),
  maxTileY: mercatorToTile(bounds.minY, zoom, 'y')
});

/** Maior zoom em que a área cabe no limite de tiles por lado. */
const pickTileRange = (bounds: MercatorBounds, maxTilesPerSide: number, maxZoom: number): TileRange => {
  for (let zoom = maxZoom; zoom > 0; zoom -= 1) {
    const range = getTileRange(bounds, zoom);
    const columns = range.maxTileX - range.minTileX + 1;
    const rows = range.maxTileY - range.minTileY + 1;
    if (Math.max(columns, rows) <= maxTilesPerSide) return range;
  }
  return getTileRange(bounds, 1);
};

const getTileRangeBounds = (range: TileRange): MercatorBounds => {
  const tileSize = WORLD_SIZE_M / 2 ** range.zoom;
  return {
    minX: range.minTileX * tileSize - WORLD_SIZE_M / 2,
    maxX: (range.maxTileX + 1) * tileSize - WORLD_SIZE_M / 2,
    maxY: WORLD_SIZE_M / 2 - range.minTileY * tileSize,
    minY: WORLD_SIZE_M / 2 - (range.maxTileY + 1) * tileSize
  };
};

const loadImage = (url: string, signal: AbortSignal) =>
  new Promise<HTMLImageElement | null>((resolve) => {
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    signal.addEventListener('abort', () => {
      image.src = '';
      resolve(null);
    });
    image.src = url;
  });

export type StitchedTiles = {
  canvas: HTMLCanvasElement;
  bounds: MercatorBounds;
  loadedTiles: number;
};

/** Baixa todos os tiles da área e junta numa única imagem. */
const loadStitchedTiles = async (urlTemplate: string, range: TileRange, signal: AbortSignal): Promise<StitchedTiles> => {
  const columns = range.maxTileX - range.minTileX + 1;
  const rows = range.maxTileY - range.minTileY + 1;
  const canvas = document.createElement('canvas');
  canvas.width = columns * TILE_SIZE_PX;
  canvas.height = rows * TILE_SIZE_PX;
  const context = canvas.getContext('2d', { willReadFrequently: true });

  const jobs: Promise<boolean>[] = [];
  for (let tileX = range.minTileX; tileX <= range.maxTileX; tileX += 1) {
    for (let tileY = range.minTileY; tileY <= range.maxTileY; tileY += 1) {
      const url = urlTemplate.replace('{z}', String(range.zoom)).replace('{x}', String(tileX)).replace('{y}', String(tileY));

      jobs.push(
        loadImage(url, signal).then((image) => {
          if (!image || !context) return false;
          context.drawImage(
            image,
            (tileX - range.minTileX) * TILE_SIZE_PX,
            (tileY - range.minTileY) * TILE_SIZE_PX,
            TILE_SIZE_PX,
            TILE_SIZE_PX
          );
          return true;
        })
      );
    }
  }

  const results = await Promise.all(jobs);
  return { canvas, bounds: getTileRangeBounds(range), loadedTiles: results.filter(Boolean).length };
};

export const loadSatelliteImagery = (bounds: MercatorBounds, signal: AbortSignal) =>
  loadStitchedTiles(SATELLITE_TILE_URL, pickTileRange(bounds, MAX_SATELLITE_TILES_PER_SIDE, MAX_SATELLITE_ZOOM), signal);

export type ElevationSampler = (point: MercatorPoint) => number | null;

/** Baixa os tiles de elevação (formato Terrarium) e devolve uma função que lê a altitude em metros. */
export const loadElevationSampler = async (bounds: MercatorBounds, signal: AbortSignal): Promise<ElevationSampler | null> => {
  const stitched = await loadStitchedTiles(
    TERRAIN_TILE_URL,
    pickTileRange(bounds, MAX_TERRAIN_TILES_PER_SIDE, MAX_TERRAIN_ZOOM),
    signal
  );
  if (stitched.loadedTiles === 0) return null;

  const { canvas } = stitched;
  const context = canvas.getContext('2d', { willReadFrequently: true });
  if (!context) return null;

  let pixels: Uint8ClampedArray;
  try {
    pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
  } catch {
    return null;
  }

  const { width, height } = canvas;
  const readElevation = (px: number, py: number) => {
    const index = (py * width + px) * 4;
    if (pixels[index + 3] === 0) return null;
    return pixels[index] * 256 + pixels[index + 1] + pixels[index + 2] / 256 - 32768;
  };

  return ({ x, y }) => {
    const { minX, maxX, minY, maxY } = stitched.bounds;
    const u = ((x - minX) / (maxX - minX)) * (width - 1);
    const v = ((maxY - y) / (maxY - minY)) * (height - 1);
    if (u < 0 || v < 0 || u > width - 1 || v > height - 1) return null;

    const x0 = Math.floor(u);
    const y0 = Math.floor(v);
    const x1 = Math.min(x0 + 1, width - 1);
    const y1 = Math.min(y0 + 1, height - 1);
    const fx = u - x0;
    const fy = v - y0;

    const e00 = readElevation(x0, y0);
    const e10 = readElevation(x1, y0);
    const e01 = readElevation(x0, y1);
    const e11 = readElevation(x1, y1);
    if (e00 === null || e10 === null || e01 === null || e11 === null) return e00 ?? e10 ?? e01 ?? e11;

    return (e00 * (1 - fx) + e10 * fx) * (1 - fy) + (e01 * (1 - fx) + e11 * fx) * fy;
  };
};
