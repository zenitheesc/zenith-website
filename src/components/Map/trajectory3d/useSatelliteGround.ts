import { useEffect, useState } from 'react';
import { BufferGeometry, CanvasTexture, PlaneGeometry, SRGBColorSpace } from 'three';
import { ElevationSampler, loadElevationSampler, loadSatelliteImagery } from './geo.utils';
import { TrajectoryModel } from './trajectory.utils';

const GROUND_SEGMENTS = 192;

export type SatelliteGround = {
  geometry: BufferGeometry;
  texture: CanvasTexture | null;
  /** Altitude do chão em km num ponto local da cena. */
  groundHeightAt: (x: number, z: number) => number;
};

type GroundState = { status: 'loading' | 'ready'; ground: SatelliteGround | null };

export const useSatelliteGround = (model: TrajectoryModel | null): GroundState => {
  const [state, setState] = useState<GroundState>({ status: 'loading', ground: null });

  useEffect(() => {
    if (!model) return undefined;

    const controller = new AbortController();
    let builtGround: SatelliteGround | null = null;
    setState({ status: 'loading', ground: null });

    const build = async () => {
      const [imagery, sampler] = await Promise.all([
        loadSatelliteImagery(model.groundBounds, controller.signal),
        loadElevationSampler(model.groundBounds, controller.signal).catch((): ElevationSampler | null => null)
      ]);
      if (controller.signal.aborted) return;

      const { records, projection } = model;
      const fallbackHeightKm = Math.min(records[0].alt, records[records.length - 1].alt) / 1000;

      const groundHeightAt = (x: number, z: number) => {
        const elevation = sampler?.(projection.localToMercator(x, z));
        return elevation === null || elevation === undefined ? fallbackHeightKm : elevation / 1000;
      };

      // O plano usa exatamente a área dos tiles de satélite, para a imagem não ficar distorcida.
      const topLeft = projection.mercatorToLocal({ x: imagery.bounds.minX, y: imagery.bounds.maxY });
      const bottomRight = projection.mercatorToLocal({ x: imagery.bounds.maxX, y: imagery.bounds.minY });
      const width = bottomRight.x - topLeft.x;
      const depth = bottomRight.z - topLeft.z;

      const geometry = new PlaneGeometry(width, depth, GROUND_SEGMENTS, GROUND_SEGMENTS);
      geometry.rotateX(-Math.PI / 2);
      geometry.translate(topLeft.x + width / 2, 0, topLeft.z + depth / 2);

      const positions = geometry.attributes.position;
      for (let i = 0; i < positions.count; i += 1) {
        positions.setY(i, groundHeightAt(positions.getX(i), positions.getZ(i)));
      }
      positions.needsUpdate = true;
      geometry.computeVertexNormals();

      let texture: CanvasTexture | null = null;
      if (imagery.loadedTiles > 0) {
        texture = new CanvasTexture(imagery.canvas);
        texture.colorSpace = SRGBColorSpace;
        texture.anisotropy = 8;
      }

      builtGround = { geometry, texture, groundHeightAt };
      setState({ status: 'ready', ground: builtGround });
    };

    build();

    return () => {
      controller.abort();
      builtGround?.geometry.dispose();
      builtGround?.texture?.dispose();
    };
  }, [model]);

  return state;
};
