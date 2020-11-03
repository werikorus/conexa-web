import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import './styles.css';
import MapCard from '../../components/MapCard/MapCard';
import api_cep from "../../services/apiViaCEP";
import axios from 'axios';

// -7.179673999999999/-48.20665899999999

function SimpleMap() {
  const { nome, cnpj, latitude, longitude } = useParams();
  function showvalues() {
    console.log(latitude, longitude)
  };
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