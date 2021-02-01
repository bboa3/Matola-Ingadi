import React from 'react';
import Header from '../../components/Header';
import Map from '../../components/Map';
import PhotosCarousel from '../../components/PhotosCarousel';
import History from '../../components/History';
import { 
  Container,
  Video,
  IngadiKing,
  CarouselAndMapContainer
} from './styles';

import { Play as PlayButton } from '../../assets/icons';

import images from '../../assets/images';

const Ingadi: React.FC = () => {
  return (
    <>
      <Header
        homePage={true}
      />
      <Container>
        <Video>
          <img src={images.ingadiWedding} alt="Casamento Ingadi"/>
          <span>
            <PlayButton />
          </span>
        </Video>
        <section>
          <IngadiKing>
            <h1>VocÊ é O Rei Dos Nossos Eventos</h1>
            <p>
              O nosso objetivo é tornar o seu evento único e autentico. Abrimos as portas da nossa casa para que venha ser rei . O momento especial também deve ser cheio de Glamour, por isso nunca poupamos esforço no nosso oficio de serventia e preparação para as suas celebrações.
            </p>
          </IngadiKing>

          <CarouselAndMapContainer>
            <PhotosCarousel 
              images={[images.weddingLightNight, images.weddingPiscina]}
              animationDelay={10000}
            />
            <Map
              title="venha viver a experiência"
              descriptions={[
                'Estamos logo depois do Externato Cantinho do Céu e Salesianos vindo pela Shoprite da Matola'
              ]}
              buttonText="Visite Matola Ingadi"
              isButtonToOutsideOfWebsite={false}
              buttonUrl="/visitar-matola-ingadi"
            />
          </CarouselAndMapContainer>

          <History
            title="Celebramos O Amor Em Todas As Suas Formas e Cores"
            popUpTitle="Desde 2015"
            description="
              Alimentamos cumplicidade, autenticidade, espontaneidade. 
              Organizamos casamentos que surpreendem, provocam reações, surpreendem e
              perturbam.
            "
            image1={images.weddings}
            image2={images.AiVemONoivo}
            image1Alt='Salão de casamentos'
            image2Alt="Ai vem o noivo"
          />
        </section>

        <div style={{height: 1100}}>

        </div>
      </Container>
    </>
  )
}

export default Ingadi;