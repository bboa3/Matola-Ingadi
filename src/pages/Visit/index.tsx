import React from 'react';
import Map from '../../components/Map';
import Header from '../../components/Header';
import { 
  Container,
  MinHeader,
  MapContainer
} from './styles';
import Footer from '../../components/Footer';

const mapCenter = {
  lat: -25.9348077,
  long: 32.4388839
}

const Visit: React.FC = () => {
  return (
    <>
    <div>
      <Header />
    </div>
    <Container>
      <MinHeader>
        <h1>
          Estamos abertos para visitas de segunda à sexta das 08:00h até 16:30h. 
        </h1>
      </MinHeader>

      <MapContainer>
        <Map
          title="Contactos"
          descriptions={[
            '+258 873970401',
            'matola.ingadi@gmail.com'
          ]}
          buttonText="Google Map"
          buttonUrl={`https://www.google.com/maps/dir/?api=1&destination=${mapCenter.lat},${mapCenter.long}`}
          isButtonToOutsideOfWebsite={true}
        />
      </MapContainer>
    </Container>
    <Footer
      homePage={false}
    />
  </>
  )
}

export default Visit;