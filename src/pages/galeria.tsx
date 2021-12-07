import React from 'react';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import PhotosCarousel from '../components/PhotosCarousel';
import { Main } from '../styles/pages/gallery';

import WeddingPoolImg from '../assets/images/casamento-piscina.jpg';
import WeddingNightImg from '../assets/images/casamento-luz-da-noite.jpg';

const  Gallery: React.FC = () => {

  return (
    <div>
      <Head>
        <meta name="robots" content="none" />
        <meta name="title" content="Salão de eventos Matola Ingadi"/>
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
        <title>Galéria Matola Ingadi</title>
      </Head>

      <Header />
      <Main>
        {/* {
          (eventsHistories.casamentos.length > 1) && (
            <PhotosCarousel
              images={eventsHistories.casamentos}
              animationDelay={5000}
              title={`Nossos Casamentos`}
            />
          )
        }
        {
          (eventsHistories.bodas.length > 1) && (
            <PhotosCarousel
              images={eventsHistories.bodas}
              animationDelay={6000}
              title={`Nossas de Bodas`}
            />
          )
        }
        {
          (eventsHistories.aniversário.length > 1) && (
            <PhotosCarousel
              images={eventsHistories.aniversário}
              animationDelay={7000}
              title={`Nossos Aniversários`}
            />
          )
        }
        {
          (eventsHistories.eventosEmpresariais.length > 1) && (
            <PhotosCarousel
              images={eventsHistories.eventosEmpresariais}
              animationDelay={8000}
              title={`Nossos Eventos Empresariais`}
            />
          )
        }
        {
          (eventsHistories.eventosCorporativos.length > 1) && (
            <PhotosCarousel
              images={eventsHistories.eventosCorporativos}
              animationDelay={5000}
              title={`Nossos Eventos Corporativos`}
            />
          )
        }
        {
          (eventsHistories.graduação.length > 1) && (
            <PhotosCarousel
              images={eventsHistories.graduação}
              animationDelay={6000}
              title={`Nossas Graduações`}
            />
          )
        }
        {
          (eventsHistories.festásReligiosas.length > 1) && (
            <PhotosCarousel
              images={eventsHistories.festásReligiosas}
              animationDelay={7000}
              title={`Nossas Festás Religiosas`}
            />
          )
        }
        {
          (eventsHistories.eventosCulturais.length > 1) && (
            <PhotosCarousel
              images={eventsHistories.eventosCulturais}
              animationDelay={5000}
              title={`Nossos Eventos Culturais`}
            />
          )
        } */}

        <PhotosCarousel
          images={[
            WeddingNightImg, 
            WeddingPoolImg
          ]}
          animationDelay={5000}
          title={`Nossos Casamentos`}
        />
        <PhotosCarousel
          images={[
            WeddingNightImg, 
            WeddingPoolImg
          ]}
          animationDelay={6000}
          title={`Nossos Aniversários`}
        />
        <PhotosCarousel
          images={[
            WeddingNightImg, 
            WeddingPoolImg
          ]}
          animationDelay={7000}
          title={`Nossos Eventos Empresariais`}
        />
      </Main>
      <Footer
        homePage={false}
      />
    </div>
  )
}

export default Gallery;