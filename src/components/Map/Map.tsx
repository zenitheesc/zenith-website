import { useEffect } from 'react';
import L from 'leaflet';
import { MapContainer, Marker, Polyline, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { MapProps } from '@/src/shared/types/map.types';

const startMarkerIcon = L.divIcon({
  className: 'trajectory-start-marker',
  html: '<div style="background:#2e7d32;color:#fff;width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.35);">I</div>',
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, -12]
});

const endMarkerIcon = L.divIcon({
  className: 'trajectory-end-marker',
  html: '<div style="background:#c62828;color:#fff;width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.35);">F</div>',
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, -12]
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
  const { position = [0, 0], zoom = 2, trajectory = [], lineColor = '#d32f2f', lineWeight = 4, mapHeight = '100vh' } = props;
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
