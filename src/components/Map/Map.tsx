import { useEffect } from 'react';
import L from 'leaflet';
import { MapContainer, Marker, Polyline, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { MapProps } from '@/src/shared/types/map.types';

const parachutIconUrl = '/images/markersSondehub/parachute.svg';
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

export default function MyMap(props: MapProps) {
  const { position = [0, 0], zoom = 2, trajectory = [], lineColor = '#d32f2f', lineWeight = 2, mapHeight = '100vh' } = props;
  const hasTrajectory = trajectory.length > 1;
  const startPosition = hasTrajectory ? trajectory[0] : position;
  const endPosition = hasTrajectory ? trajectory[trajectory.length - 1] : position;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: mapHeight }}>
      <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        <FitBoundsToTrajectory trajectory={trajectory} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {hasTrajectory && <Polyline positions={trajectory} pathOptions={{ color: lineColor, weight: lineWeight }} />}

        {hasTrajectory ? (
          <>
            <Marker position={startPosition} icon={startMarkerIcon}>
              <Popup>Inicio da trajetoria</Popup>
            </Marker>
            <Marker position={endPosition} icon={endMarkerIcon}>
              <Popup>Fim da trajetoria</Popup>
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
