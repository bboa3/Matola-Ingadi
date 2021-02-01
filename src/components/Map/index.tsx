import React, { Fragment } from 'react';
import Media from 'react-media';
import { MapContainer} from './styles';

import Button from '../Button';

import images from '../../assets/images';

interface Props {
  title: string
  descriptions: string[]
  buttonText: string
  isButtonToOutsideOfWebsite: boolean
  buttonUrl: string
}


const MapContent: React.FC<Props> = ({
  title,
  descriptions,
  buttonText,
  isButtonToOutsideOfWebsite,
  buttonUrl
}) => (
  <>
    <h3>
      {title}
    </h3>
    {
      descriptions.map(description => <p>{description}</p>)
    }

    <Button 
      url={buttonUrl}
      color='var(--color-primary)'
      backgroundColor='var(--color-yellow-dark)'
      text={buttonText}
      isToOutsideOfWebsite={isButtonToOutsideOfWebsite}
    />
  </>
)

const Map: React.FC<Props> = ({
  title,
  descriptions,
  buttonText,
  isButtonToOutsideOfWebsite,
  buttonUrl
}) => (
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
          <MapContent
            title={title}
            descriptions={descriptions}
            buttonText={buttonText}
            isButtonToOutsideOfWebsite={isButtonToOutsideOfWebsite}
            buttonUrl={buttonUrl}
          />
        </MapContainer>
      )}
      {matches.medium && (
        <MapContainer
          style={{
            backgroundImage: `url(${images.mapTablet})`
          }}
        >
         <MapContent
            title={title}
            descriptions={descriptions}
            buttonText={buttonText}
            isButtonToOutsideOfWebsite={isButtonToOutsideOfWebsite}
            buttonUrl={buttonUrl}
         />
        </MapContainer>
      )}
      {matches.large && (
        <MapContainer
          style={{
            backgroundImage: `url(${images.map})`
          }}
        >
          <MapContent
            title={title}
            descriptions={descriptions}
            buttonText={buttonText}
            isButtonToOutsideOfWebsite={isButtonToOutsideOfWebsite}
            buttonUrl={buttonUrl}
          />
        </MapContainer>
      )}
    </Fragment>
  )}
  </Media>
)

export default Map;