import React, { Fragment, useState, useCallback, useRef } from 'react';
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
    resetTimer()
  }

  const forwardFunction = () => {
    nextSlide();
    resetTimer(); 
  }

  const prevSlide = () => {
    if(activeSlide === 0){
      setActiveSlide(images.length-1)
    }
    else{
      setActiveSlide(activeSlide-1)
    }
  }

  const nextSlide = () => {
    if(activeSlide === images.length - 1){
      setActiveSlide(0);
    }
    else{
      setActiveSlide(activeSlide + 1)
    }
  }

  const timer = useRef(setInterval(nextSlide, animationDelay));

  const resetTimer = useCallback(() => {
    clearInterval(timer.current);
    timer.current = setInterval(nextSlide, animationDelay);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animationDelay])

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
          />
          <ForwardButton
            forwardFunction={forwardFunction}
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