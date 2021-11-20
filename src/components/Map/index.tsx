import React from 'react';
import { Container, MapContainer} from './styles';

import Button from '../NavButton';

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
      descriptions.map((description, index) => <p key={index}>{description}</p>)
    }

    <Button 
      url={buttonUrl}
      color='var(--color-primary)'
      backgroundColor='var(--color-yellow-dark)'
      text={buttonText}
      isToOutsideOfWebsite={isButtonToOutsideOfWebsite}
      useJump={false}
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
  <Container>
    <MapContainer
      className="small"
      style={{
        backgroundImage: `url(./images/map-mobile.svg)`
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
    
    <MapContainer
      className="medium"
      style={{
        backgroundImage: `url(./images/map-tablet.svg)`
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
    
    <MapContainer
      className="large"
      style={{
        backgroundImage: `url(./images/map.svg)`
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
  </Container>
)

export default Map;