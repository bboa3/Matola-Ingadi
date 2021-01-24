import React, { Fragment } from 'react';
import Header from '../../components/Header';
import Map from '../../components/Map';
import { 
  Container,
  Video,
  BackButton,
  ForwardButton,
  IngadiKing,
  Carousel
} from './styles';

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
            <div>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" className="svg-inline--fa fa-play fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
              </svg>
            </div>
          </span>
        </Video>
        <section>
          <IngadiKing>
            <h1>VocÊ é O Rei Dos Nossos Eventos</h1>
            <p>
              O nosso objetivo é tornar o seu evento único e autentico. Abrimos as portas da nossa casa para que venha ser rei . O momento especial também deve ser cheio de Glamour, por isso nunca poupamos esforço no nosso oficio de serventia e preparação para as suas celebrações.
            </p>
          </IngadiKing>
          <Carousel>
            <div 
              style={{
                backgroundImage: `url(${images.weddingLightNight})`
              }}
            >
              <BackButton />
              <ForwardButton />
            </div>

            <Map />

          </Carousel>
        </section>

        <div style={{height: 1100}}>

          </div>
      </Container>
    </>
  )
}

export default Ingadi;