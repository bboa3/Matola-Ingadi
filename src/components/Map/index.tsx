import React, { Fragment } from 'react';
import Media from 'react-media';
import { MapContainer} from './styles';

import images from '../../assets/images';

const Map: React.FC = () => (
  <Media queries={{
    small: "(max-width: 738px)",
    medium: "(min-width: 738px) and (max-width: 992px)",
    large: "(min-width: 993px)"
  }}>
    {matches => (
    <Fragment>
      {matches.small && (
        <MapContainer
            style={{
              backgroundImage: `url(${images.mapMobile})`
            }}
          >
          <h3>
            venha viver a experiência
          </h3>
          <p>
            Estamos logo depois do Externato Cantinho do Céu e Salesianos vindo pela Shoprite da Matola
          </p>
          <button>
            Visite Matola Ingadi
          </button>
        </MapContainer>
      )}
      {matches.medium && (
        <MapContainer
          style={{
            backgroundImage: `url(${images.mapTablet})`
          }}
        >
          <h3>
            venha viver a experiência
          </h3>
          <p>
            Estamos logo depois do Externato Cantinho do Céu e Salesianos vindo pela Shoprite da Matola
          </p>
          <button>
            Visite Matola Ingadi
          </button>
        </MapContainer>
      )}
      {matches.large && (
        <MapContainer
          style={{
            backgroundImage: `url(${images.map})`
          }}
        >
          <h3>venha viver a experiência</h3>
          <p>
            Estamos logo depois do Externato Cantinho do Céu e Salesianos vindo pela Shoprite da Matola
          </p>
          <button>
            Visite Matola Ingadi
          </button>
        </MapContainer>
      )}
    </Fragment>
  )}
  </Media>
)

export default Map;