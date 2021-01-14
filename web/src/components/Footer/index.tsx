import React from 'react';
import { TileLayer, Marker, Popup, MapContainer } from 'react-leaflet';
import mapIcon from '../../utils/mapIcon';
import Contacts from '../Contacts';
import {
  Container
} from './styles';

const mapCenter = {
  lat: -25.925290,
  long: 32.437092
}

const Footer: React.FC = () => {
  return (
    <Container>
      <Contacts />

      <MapContainer
          style={{paddingBottom: '30rem'}}
          className='map-container-le'
          center={[mapCenter.lat,mapCenter.long]}
          zoom={14}
        >
          {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
          <TileLayer 
            url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}`} 
          />
          <Marker 
            icon={mapIcon}
            position={[mapCenter.lat,mapCenter.long]}
            >
            <Popup closeButton={false} minWidth={140} maxWidth={140} className="map-popup">
              <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${mapCenter.lat},${mapCenter.long}`}>
                Ver rota no Google Maps
              </a>
            </Popup>
          </Marker>
        </MapContainer>
    </Container>
  )
}

export default Footer;