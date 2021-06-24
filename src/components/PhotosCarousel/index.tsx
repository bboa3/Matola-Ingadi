import React, { Fragment, useEffect, useState } from 'react';
import Media from 'react-media';

import {
  Back as BackButton, 
  Forward as ForwardButton
} from '../../assets/icons';

import { Container, SlideButtons } from './styles';

interface Props {
  title?: string
  images: string[]
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

  const nextSlide = () => {
    if(activeSlide === images.length - 1)
    return setActiveSlide(0);
    setActiveSlide(activeSlide + 1)
  }

  useEffect(() => {
    const timer = setTimeout(nextSlide, animationDelay);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSlide])

  return (
    <Container>
      {
        title && (
          <Media queries={{
            small: "(max-width: 992px)"
          }}>
            {matches => (
            <Fragment>
              {matches.small && (
                <h2>{title}</h2>
              )}
            </Fragment>
          )}
          </Media>
        )
      }

      <div className="slider">
        {
          images.map((image, index) => {
            if(index === activeSlide) {
              return (
                <div
                  key={index}
                  className='slide active'
                  style={{
                    backgroundImage: `url(${image})`
                  }}
                ></div>
              )
            } else {
              return (
                <div
                  key={index}
                  className='slide'
                  style={{
                    backgroundImage: `url(${image})`
                  }}
                ></div>
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
          <Media queries={{
            large: "(min-width: 993px)"
          }}>
            {matches => (
            <Fragment>
              {matches.large && (
                <h2>{title}</h2>
              )}
            </Fragment>
          )}
          </Media>
        )
      }
    </Container>
  )
})

export default PhotosCarousel;