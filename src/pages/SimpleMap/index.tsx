import React from 'react';
import { useParams } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import './styles.css';
import MapCard from '../../components/MapCard/MapCard';

function SimpleMap() {
  const { nome, cnpj, latitude, longitude }: {
    nome: string,
    cnpj: string,
    latitude: string,
    longitude: string
  } = useParams();

  return (
    <div className="map-page">
      <div className="map-content">
        <MapCard
          companyname={nome.replace('*', '/')}
          cnpj={cnpj.replace('*', '/')}
          latitude={latitude}
          longitude={longitude}
        />
      </div>
    </div >
  );
};

export default SimpleMap;
