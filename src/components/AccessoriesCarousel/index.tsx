import React, { useEffect, memo } from 'react';
import Glider from '../../assets/glider/glider';
import '../../assets/glider/styles.css';
import  { Container } from './styles';

import {
  Back as BackButton, 
  Forward as ForwardButton
} from '../../assets/icons';

interface Props {
  images: string[]
}

const AccessoriesCarousel: React.FC<Props> = memo(({images}) => {
  useEffect(() => {
    new Glider(document.querySelector('.glider'), {
      slidesToShow: 1.5,
      slidesToScroll: 1,
      draggable: true,
      duration: 3,
      dots: '#dots',
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      },
       responsive: [
        {
          // screens greater than >= 738px
          breakpoint: 738,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 1,
            itemWidth: 150,
            duration: 3
          }
        },{
          // screens greater than >= 1400px
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            itemWidth: 150,
            duration: 3
          }
        }
      ]
    });
  }, [])

  return (
    <Container
      className="glider-contain multiple"
    >
      <div className="glider">
        {
          images.map((image, index) => (
            <img 
              key={index} 
              src={image} 
              alt="Acessórios dos eventos"
            />
          ))
        }
      </div>
      <BackButton className="glider-prev" />
      <ForwardButton className="glider-next" />
      <div id="dots"></div>
    </Container>
  )
})

export default AccessoriesCarousel;