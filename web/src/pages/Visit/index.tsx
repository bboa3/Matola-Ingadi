import React from 'react';
import Header from '../../components/Header';
import { Container } from './styles';
import Map from '../../components/Map';

const mapCenter = {
  lat: -25.9348077,
  long: 32.4388839
}

const Visit: React.FC = () => (
  <>
    <Header
      homePage={false}
    />
    <Container>
      <span>
        <h1>
          Estamos abertos para visitas de segunda à sexta das 08:00h até 16:30h. 
        </h1>
      </span>

      <div>
        <Map
          title="Contactos"
          descriptions={[
            '8444444444',
            'matola-ingadi@gmail.com'
          ]}
          buttonText="Google Map"
          buttonUrl={`https://www.google.com/maps/dir/?api=1&destination=${mapCenter.lat},${mapCenter.long}`}
          isButtonToOutsideOfWebsite={true}
        />
      </div>
    </Container>
  </>
)


export default Visit;