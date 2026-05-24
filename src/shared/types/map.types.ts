export type MapProps = {
  position?: Position;
  zoom?: number;
  trajectory?: LaunchTrajectory;
  lineColor?: string;
  lineWeight?: number;
  mapHeight?: string;
};

export type Position = [Latitude, Longitude];
export type Latitude = number;
export type Longitude = number;

export type LaunchTrajectory = Position[];
