export type LaunchSummary = {
  name: string;
  download_url: string;
  launch_city: string;
  landing_city: string;
  max_altitude: number;
  launch_datetime: string;
};

export type LaunchRecord = {
  alt: number;
  batt: number;
  datetime: string;
  frame: number;
  frequency: number;
  heading: number;
  lat: number;
  lon: number;
  manufacturer: string;
  position: string;
  sats: number;
  serial: string;
  software_name: string;
  software_version: string;
  subtype: string;
  time_received: string;
  type: string;
  upload_time_delta: number;
  uploader_alt: number;
  uploader_antenna: string;
  uploader_callsign: string;
  uploader_position: string;
  'user-agent': string;
  vel_h: number;
  vel_v: number;
};
