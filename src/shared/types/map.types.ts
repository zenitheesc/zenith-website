import { LaunchRecord } from '@/src/shared/types/api/launches-api.types';

export type MapProps = {
  position?: Position;
  zoom?: number;
  trajectory?: LaunchTrajectory;
  trajectoryRecords?: LaunchRecord[];
  landingCity?: string;
  lineColor?: string;
  lineWeight?: number;
  mapHeight?: string;
};

export type Position = [Latitude, Longitude];
export type Latitude = number;
export type Longitude = number;

export type LaunchTrajectory = Position[];
