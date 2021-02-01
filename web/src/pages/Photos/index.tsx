import React from 'react'
import Header from '../../components/Header';
import PhotosCarousel from '../../components/PhotosCarousel';
import { Container } from './styles';

import images from '../../assets/images';

const Photos: React.FC = () => {
  return (
    <>
      <Header
        homePage={false}
      />
      <Container>
        <PhotosCarousel 
          images={[images.weddingLightNight, images.ingadiWedding]}
          animationDelay={10000}
          title="Fotos de Casamentos"
        />
        <PhotosCarousel 
          images={[images.weddingLightNight, images.ingadiWedding]}
          animationDelay={10000}
          title="Fotos de Aniversários"
        />
        <PhotosCarousel 
          images={[images.weddingLightNight, images.ingadiWedding]}
          animationDelay={10000}
          title="Fotos de Graduações"
        />
      </Container>
    </>
  )
}

export default Photos;