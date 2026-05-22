import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { MapProps } from '@/src/types/map.types';
import { useEffect } from 'react';
import { useAllLaunches } from '@/src/core/services/launches/useGetAllLaunches.service';

export default function MyMap(props: MapProps) {
  const { position = [0, 0], zoom = 2 } = props;
  const { launches, isLoadingAllLaunches } = useAllLaunches();

  useEffect(() => {
    if (!isLoadingAllLaunches) {
      console.log('Lançamentos carregados:', launches);
    }
  }, [isLoadingAllLaunches, launches]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
