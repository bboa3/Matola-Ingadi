import React from 'react'
import Header from '../../components/Header';
import PhotosCarousel from '../../components/PhotosCarousel';
import { Container } from './styles';

import images from '../../assets/images';
import Footer from '../../components/Footer';

const Photos: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <PhotosCarousel 
          images={[images.weddingLightNight, images.ingadiWedding]}
          animationDelay={5000}
          title="Fotos de Casamentos"
        />
        <PhotosCarousel 
          images={[images.weddingLightNight, images.ingadiWedding]}
          animationDelay={6000}
          title="Fotos de Aniversários"
        />
        <PhotosCarousel 
          images={[images.weddingLightNight, images.ingadiWedding]}
          animationDelay={7000}
          title="Fotos de Graduações"
        />
      </Container>
      <Footer
        homePage={false}
      />
    </>
  )
}

export default Photos;