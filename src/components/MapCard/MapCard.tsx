import React from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { FiArrowRight } from 'react-icons/fi';
import Leaflet from 'leaflet';
import mapMarkerImg from '../../assets/images/map-marker.svg';

import './styles.css';
import 'leaflet/dist/leaflet.css';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

// {parâmetros que serao passados para localizaçao da empresa no mapa}
interface MapCardProps {
  companyname: string;
  cnpj: String;
  latitude?: number;
  longitude?: number;
}
const MapCard: React.FC<MapCardProps> = (props) => {
  return (
    <div className="card text-center" id="page-map">
      <div id="overflow">
        <div style={{ height: '50%', width: '100%' }}>
          <Map
            center={[props.latitude, props.longitude]}
            zoom={13}
            style={{ height: '450px', width: "100%" }}
          >
            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker
              icon={mapIcon}
              position={[props.latitude, props.longitude]}>
              <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                {`${props.companyname}`}
                <Link to="/">
                  <FiArrowRight size={20} color="#FFFF" />
                </Link>
              </Popup>
            </Marker>
          </Map>
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
}

export default MapCard;