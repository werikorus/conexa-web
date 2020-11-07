import React, { Component } from 'react';
import mapMarkerImg from '../../assets/images/map-marker.svg';
import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

import './styles.css';
import 'leaflet/dist/leaflet.css';
import { Link } from 'react-router-dom';
import { Marker, Popup } from 'leaflet';
import { FiArrowRight } from 'react-icons/fi';

// {parâmetros que serao passados para localizaçao da empresa no mapa}
interface MapCardProps {
  companyname: string;
  cnpj: String;
  latitude?: number;
  longitude?: number;
}

const GoogleMapsCard: React.FC<MapCardProps> = (props) => {
  var defaultProps = {
    center: {
      // lat: props.latitude,
      // lng: props.longitude,
      lat: -7.179673999999999,
      lng: -48.20665899999999,
    },
    zoom: 15
  };

  return (
    <div className="card text-center" id="page-map">
      <div id="overflow">
        <div style={{ height: '50%', width: '100%' }}>
        <div style={{ height: '500px', width: '100%' }}>
        <GoogleMapReact
          // bootstrapURLKeys={{ key:'AIzaSyC0qnQyANXBJhyPHYCKKcOqwvOv0CJz10Q' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
        </GoogleMapReact>
      </div>

        </div>
      </div>
      <div className="card-body text-dark" id="card-body-text-dark">
        <h2>{`${props.companyname}`}</h2>
        <p className="card-text textsecondary">
          {`CNPJ: ${props.cnpj}`}
        </p>
        <Link to="/" className="btn btn-outline-succces">Voltar</Link>
        <br />
      </div>
    </div >
  );
};

export default GoogleMapsCard;
