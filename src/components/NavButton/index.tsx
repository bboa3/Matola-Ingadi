import React, { ButtonHTMLAttributes, memo } from 'react';
import { Link } from 'react-router-dom';
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
          to='/'
          style={{
            backgroundColor,
            color,
          }}
          onClick={(_e) => {jumper(url)}}
          type="submit"
        >{text}</Link>
      )
    }
    {

      (!isToOutsideOfWebsite && !useJump) && (
        <Link 
          to={url}
          style={{
            backgroundColor,
            color,
          }}
          type="submit"
        >{text}</Link>
      )
    }
    <div style={{backgroundColor}}></div>
  </Container>
))

export default Button;