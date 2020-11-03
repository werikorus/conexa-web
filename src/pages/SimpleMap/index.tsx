import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import './styles.css';
import MapCard from '../../components/MapCard/MapCard';

//  para testes -7.179673999999999/-48.20665899999999

function SimpleMap() {
  // const { nome, cnpj, latitude, longitude } = useParams();

  const { nome, cnpj, latitude, longitude }: {
    nome: string,
    cnpj: string,
    latitude: string
    longitude: string
  } = useParams();

  function showvalues() {
    console.log(latitude, longitude)
  };
  return (
    <div className="map-page">
      <div className="map-content">
        <MapCard
          companyname={nome.replace('*', '/')}
          cnpj={cnpj.replace('*', '/')}
          latitude={-7.179673999999999}
          longitude={-48.20665899999999}
        />
      </div>
    </div >
  );

};
export default SimpleMap;