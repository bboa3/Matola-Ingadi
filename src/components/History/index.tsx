import React, { Fragment } from 'react';
import Image from 'next/image';
import Media from 'react-media';
import Button from '../NavButton';
import { 
  Container,
  Wedding,
  Place,
  ImageContainer
} from './styles';

interface Props {
  image1: string
  image1Alt: string
  image2: string
  image2Alt: string
  title: string
  description: string
  popUpTitle: string
}

const History: React.FC<Props> = ({
  image1,
  image1Alt,
  image2,
  image2Alt,
  title,
  description,
  popUpTitle,
}) => (
  <Container>
    <Wedding>
      <div>
        <Image
          width={3095}
          height={4643}
          layout="responsive"
          src={image1} 
          alt={image1Alt}
        />
      </div>
      <span>
        <h3>{title}</h3>
      </span>
    </Wedding>

    <Place>
      <div>     
        <h4>{popUpTitle}</h4>
        <Button
          url='/nossas-lembranças/images'
          color='var(--color-white)'
          backgroundColor='var(--color-primary)'
          text='Fotos'
          isToOutsideOfWebsite={false}
          useJump={false}
        />
      </div>
      <Media queries={{
        small: "(max-width: 738px)"
      }}>
        {matches => (
          <Fragment>
            {matches.small && (
              <p>{description}</p>
            )}
          </Fragment>
        )}
      </Media>
    </Place>
    <ImageContainer>
      <Image 
        width={6016}
        height={4016}
        layout="responsive"
        src={image2} 
        alt={image2Alt}
      />
    </ImageContainer>
    <Media queries={{
        large: "(min-width: 738px)"
      }}>
        {matches => (
        <Fragment>
          {matches.large && (
            <p>{description}</p>
          )}
        </Fragment>
      )}
    </Media>
  </Container>
)

export default History;