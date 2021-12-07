import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import {
  Back as BackButton, 
  Forward as ForwardButton
} from '../../assets/icons';

import { Container, SlideButtons } from './styles';

interface Props {
  title?: string
  images: StaticImageData[]
  animationDelay: number
}

const PhotosCarousel: React.FC<Props> = React.memo(({
  title, 
  images, 
  animationDelay
}) => {
  const [ activeSlide, setActiveSlide ] = useState(0);

  const backFunction = () => {
    prevSlide();
  }

  const forwardFunction = () => {
    nextSlide();
  }

  const prevSlide = () => {
    if(activeSlide === 0)
    return setActiveSlide(images.length-1);
    setActiveSlide(activeSlide-1)
  }

  function nextSlide(): void {
    if (activeSlide === images.length - 1)
      return setActiveSlide(0);
    setActiveSlide(activeSlide + 1);
  }

  useEffect(() => {
    images.forEach((_, index) => {
      const id = `slide${index}`;
      console.log(id);
      
      document.getElementById('slide').style.cssText = null;
    })

    const timer = setTimeout(nextSlide, animationDelay);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSlide])

  return (
    <Container>
      {
        title && (
          <h2 className="small">{title}</h2>
        )
      }

      <div className="slider">
        {
          images.map((image, index) => {
            if(index === activeSlide) {
              return (
                <Image
                  layout="fill"
                  alt="Matola Ingadi"
                  key={index}
                  id={`slide active`}
                  src={image}
                />
              )
            } else {
              return (
                <Image
                  layout="fill"
                  alt="Matola Ingadi"
                  key={index}
                  id={`slide`}
                  src={image}
                  hidden
                />
              )
            }
          })
        }
        <SlideButtons>
          <BackButton
            backFunction={backFunction}
            className="back"
          />
          <ForwardButton
            forwardFunction={forwardFunction}
            className="forward"
          />
        </SlideButtons>
      </div>

      {
        title && (
          <h2 className="large">{title}</h2>
        )
      }
    </Container>
  )
})

export default PhotosCarousel;