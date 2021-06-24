import React, { ButtonHTMLAttributes, memo } from 'react';
import Link from 'next/link';
import { Container } from './styles';
import { jumper } from '../../utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string
  backgroundColor: string
  text: string
  url: string
  isToOutsideOfWebsite: boolean
  useJump: boolean
}

const Button: React.FC<ButtonProps> = memo(({
  color, 
  backgroundColor, 
  text, 
  url, 
  isToOutsideOfWebsite,
  useJump
}) => (
  <Container>
    <span style={{backgroundColor}}></span>   
    {
      isToOutsideOfWebsite && (
        <a 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor,
            color,
          }}
          type="submit"
        >
          {text}
        </a>
      )
    }
    {
      (!isToOutsideOfWebsite && useJump) && (
        // use id to jump
        <Link 
          href='/'
        >
          <a
            style={{
              backgroundColor,
              color,
            }}
            onClick={(_e) => {jumper(url)}}
            type="submit"
          >
            {text}
          </a>
        </Link>
      )
    }
    {

      (!isToOutsideOfWebsite && !useJump) && (
        <Link 
          href={url}
        >
          <a
            style={{
              backgroundColor,
              color,
            }}
            type="submit"
          >
            {text}
          </a>
        </Link>
      )
    }
    <div style={{backgroundColor}}></div>
  </Container>
))

export default Button;