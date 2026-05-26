import { useEffect } from 'react';
import L from 'leaflet';
import { LayersControl, MapContainer, Marker, Polyline, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { MapProps } from '@/src/shared/types/map.types';
import { convertAltitudeToKm, formatLaunchDatetime } from '@/src/shared/utils/formatters.utils';

const parachutIconUrl = '/images/markersSondehub/parachute.svg';
const payloadNotRecoveredIconUrl = '/images/markersSondehub/payload-not-recovered.png';
const startMarkerIconUrl = '/images/markersSondehub/target.svg';

const startMarkerIcon = L.icon({
  iconUrl: startMarkerIconUrl,
  iconSize: [12, 12],
  iconAnchor: [6, 6],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const endMarkerIcon = L.icon({
  iconUrl: parachutIconUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const unknownEndMarkerIcon = L.icon({
  iconUrl: payloadNotRecoveredIconUrl,
  iconSize: [28, 28],
  iconAnchor: [14, 14],
  popupAnchor: [1, -16],
  shadowSize: [41, 41]
});

function FitBoundsToTrajectory({ trajectory }: { trajectory: MapProps['trajectory'] }) {
  const map = useMap();

  useEffect(() => {
    if (!trajectory || trajectory.length < 2) {
      return;
    }

    map.fitBounds(trajectory, { padding: [24, 24] });
  }, [map, trajectory]);

  return null;
}

function LaunchPointPopup({
  title,
  record,
  fallbackLabel
}: {
  title: string;
  record?: MapProps['trajectoryRecords'][number];
  fallbackLabel: string;
}) {
  // TODO: move formatters to utils
  const formatNumber = (value: number, digits = 2) => value.toFixed(digits);
  const formatVelocity = (velocity: number) => `${formatNumber(velocity)} m/s`;
  const formatBattery = (battery: number) => `${formatNumber(battery)} V`;

  return (
    <div style={{ minWidth: 240 }}>
      <div style={{ fontWeight: 700, marginBottom: 8 }}>{title}</div>
      {record ? (
        <div style={{ display: 'grid', gap: 4 }}>
          <div>{formatLaunchDatetime(record.datetime)}</div>
          <div>Callsign: {record.uploader_callsign}</div>
          <div>Serial: {record.serial}</div>
          <div>Fabricante: {record.manufacturer}</div>
          <div>
            Tipo/Subtipo: {record.type} / {record.subtype}
          </div>
          <div>Bateria: {formatBattery(record.batt)}</div>

          <div>Altitude: {convertAltitudeToKm(record.alt)}</div>
          <div>Vel. horizontal: {formatVelocity(record.vel_h)}</div>
          <div>Vel. vertical: {formatVelocity(record.vel_v)}</div>
          <div>
            Lat/Lon: {record.lat.toFixed(5)}, {record.lon.toFixed(5)}
          </div>
        </div>
      ) : (
        <div>{fallbackLabel}</div>
      )}
    </div>
  );
}

export default function MapTrajectory(props: MapProps) {
  const {
    position = [0, 0],
    zoom = 2,
    trajectory = [],
    trajectoryRecords = [],
    landingCity = '',
    lineColor = '#d32f2f',
    lineWeight = 2,
    mapHeight = '100vh'
  } = props;
  const hasTrajectory = trajectory.length > 1;
  const startPosition = hasTrajectory ? trajectory[0] : position;
  const endPosition = hasTrajectory ? trajectory[trajectory.length - 1] : position;
  const startRecord = trajectoryRecords[0];
  const endRecord = trajectoryRecords[trajectoryRecords.length - 1];
  const { BaseLayer } = LayersControl;
  const isUnknownEndPoint = Boolean(
    landingCity && (landingCity.toLowerCase().includes('desconhecido') || landingCity.toLowerCase().includes('unknown'))
  );
  const finalMarkerIcon = isUnknownEndPoint ? unknownEndMarkerIcon : endMarkerIcon;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: mapHeight }}>
      <MapContainer center={position} zoom={zoom} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
        <FitBoundsToTrajectory trajectory={trajectory} />
        <LayersControl position="topright">
          <BaseLayer checked name="Mapa">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </BaseLayer>
          <BaseLayer name="Satélite">
            <TileLayer
              attribution="Tiles &copy; Esri"
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
          </BaseLayer>
        </LayersControl>
        {hasTrajectory && <Polyline positions={trajectory} pathOptions={{ color: lineColor, weight: lineWeight }} />}

        {hasTrajectory ? (
          <>
            <Marker position={startPosition} icon={startMarkerIcon}>
              <Popup>
                <LaunchPointPopup title="Início da trajetória" record={startRecord} fallbackLabel="Inicio da trajetoria" />
              </Popup>
            </Marker>
            <Marker position={endPosition} icon={finalMarkerIcon}>
              <Popup>
                <LaunchPointPopup title="Fim da trajetória" record={endRecord} fallbackLabel="Fim da trajetoria" />
              </Popup>
            </Marker>
          </>
        ) : (
          <Marker position={position}>
            <Popup>Ponto do lancamento</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}
