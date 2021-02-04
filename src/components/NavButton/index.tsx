import React, { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string
  backgroundColor: string
  text: string
  url: string
  isToOutsideOfWebsite: boolean
}

const Button: React.FC<ButtonProps> = ({color, backgroundColor, text, url, isToOutsideOfWebsite}) => (
  <Container>
    <span style={{backgroundColor}}></span>   
    {
      isToOutsideOfWebsite && (
        <a 
          href={url}
          target="_blank"
          rel="noreferrer"
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
      (!isToOutsideOfWebsite) && (
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
)

export default Button;