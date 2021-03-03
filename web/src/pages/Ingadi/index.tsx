import React, { memo } from 'react';
import Header from '../../components/Header';
import Map from '../../components/Map';
import PhotosCarousel from '../../components/PhotosCarousel';
import History from '../../components/History';
import images from '../../assets/images';
import Footer from '../../components/Footer';
import { Play as PlayButton } from '../../assets/icons';
import NavButton from '../../components/NavButton';
import { 
  Container,
  Video,
  IngadiKing,
  ButtonContainer,
  CarouselAndMapContainer,
  Benefits
} from './styles';

import EventScheduleForm from '../../components/EventScheduleForm';

const Ingadi: React.FC = memo(() => {
  
  return (
    <>
      <Header />
      <Container id="matola-ingadi-main">
        <Video>
          <img src={images.ingadiWedding} alt="Casamento Ingadi"/>
          <span>
            <PlayButton />
          </span>
        </Video>
        <section>
          <IngadiKing>
            <h1>Você e seus convidados são as estrelas dos nossos eventos</h1>
            <p>
              Salão de eventos Matola Ingadi, a nossa felicidade está em garantir eventos únicos e cinco estrelas, 
              disponibilizar uma experiência que vá de acordo com os sonhos dos nossos clientes.
              Matola Ingadi é mais do que um salão de eventos, é um jardim onde sonhos são realizados,
              onde o nossos clientes na companhia daqueles que mais amam realizam os seus eventos.
            </p>

            <ButtonContainer>
              <NavButton
                color="var(--color-white)"
                backgroundColor="var(--color-primary)"
                text="Agendar evento"
                url="#agendar-evento"
                isToOutsideOfWebsite={false}
                useJump={true}
              />
            </ButtonContainer>
          </IngadiKing>

          <CarouselAndMapContainer>
            <PhotosCarousel 
              images={[images.weddingPiscina, images.weddingLightNight]}
              animationDelay={5000}
            />
            <Map
              title="venha viver a experiência"
              descriptions={[
                'Estamos logo depois do Externato Cantinho do Céu e Condomínio Niketche vindo pela Shoprite da Matola'
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
              Alimentamos tranquilidade, autenticidade, espontaneidade.
              Organizamos eventos que caminham de mãos dadas com o amor, felicidade, amizade, carinho e companheirismo.
            "
            image1={images.AiVemONoivo}
            image2={images.weddings}
            image1Alt='Salão de casamentos'
            image2Alt="Ai vem o noivo"
          />

          <Benefits>
            <h2>Escolha Matola Ingadi</h2>
            <p>
              Fazemos  Decoração Personalizada para cada tipo de evento.  Total de 14 000 m² de Área.  
              Salão para 350 Convidados. Estacionamento para mais de 200 carros. Espaço para cerimonia civil.
              Cozinha pronta para o uso nos seus eventos. Suíte para os Noivos. Iluminação Decorativa nas suas 
              festas. Gerador disponível em todo o evento. Banheiros Feminino, Masculino e para Pessoas com 
              Necessidades Especiais.
            </p>
          </Benefits>

          <EventScheduleForm />
          
        </section>
      </Container>
      <Footer
        homePage={false}
      />
    </>
  )
})

export default Ingadi;