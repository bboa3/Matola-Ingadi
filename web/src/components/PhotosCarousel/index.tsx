import React, { Fragment, useEffect } from 'react';
import Media from 'react-media';

import {
  Back as BackButton, 
  Forward as ForwardButton
} from '../../assets/icons';
import '../../assets/glider/styles.css';
import Glider from '../../assets/glider/glider';

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

  useEffect(() => {
    new Glider(document.querySelector('.glider'), {
      slidesToShow: 1,
      draggable: true,
      arrows: {
        prev: '.prev',
        next: '.next'
      }
    });
  })
  
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

      <div data-name="Single Item" className="glider-contain">
        <div
          id="glider-single"
          className="glider"
        >
          {
            images.map((image, index) => (
              <div
                key={index}
                className="slide"
                style={{
                  backgroundImage: `url(${image})`
                }}
              >
                hlkdgbijkasf
                flkldshafnçsjka dfsafsdafm sa
                agdslj fasnçklfamsdfladskfhdsi fm jdsuifgujanijdfd Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos vel odit alias, nulla distinctio nihil ipsa deserunt, voluptatem dolore perferendis eveniet eligendi fugit ipsam ad ut iure voluptatibus eum blanditiis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, debitis exercitationem recusandae, porro praesentium perspiciatis itaque earum sint labore in id explicabo! Porro quasi rem delectus natus optio iste quae.
              </div>
            ))
          }
        </div>
        <SlideButtons>
          <BackButton
            aria-label="Previous"
            className="prev"
          />
          <ForwardButton
            aria-label="Next"
            className="next"
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