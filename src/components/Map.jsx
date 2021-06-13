import React from 'react';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from 'react-leaflet';
import '../styles/map.scss';
import PropTypes from 'prop-types';

const Map = ({ position }) => (
  <MapContainer
    className="map-container"
    center={position}
    zoom={13}
    scrollWheelZoom={false}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup.
        {' '}
        <br />
        {' '}
        Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
);

Map.propTypes = {
  position: PropTypes.arrayOf(
    PropTypes.number.isRequired,
  ).isRequired,
};

export default Map;
