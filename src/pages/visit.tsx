import React from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Map from '../components/Map';
import { 
  Main,
  MinHeader,
  MapContainer
} from '../styles/pages/visit';

const mapCenter = {
  lat: -25.925290,
  long: 32.437092
}

const  Home: React.FC = () => {
  return (
    <div>
      <Head>
        <meta name="robots" content="index" />
        <meta name="title" content="Visite-nos Salão de eventos Matola Ingadi"/>
        <meta
          name="description"
          content="Melhor lugar para festas e grandes eventos em Moçambique"
        />
        <meta 
          name="keywords" 
          content="
            eventos, matola, maputo, salão, ingadi, festas, festa, casamentos, casamentos, batismos, batismo, aniversários, aniversário, comemoração, bons, momentos
          "
        />
        <title>visite Matola Ingadi</title>
      </Head>

      <div>
        <Header />
      </div>
      <Main>
        <MinHeader>
          <h1>
            Estamos abertos para visitas de segunda à sexta, das 08:00h até 16:30h. 
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
      </Main>
      <Footer
        homePage={false}
      />
    </div>
  )
}

export default Home;