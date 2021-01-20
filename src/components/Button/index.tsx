import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outline: boolean
  text: string
}

const Button: React.FC<ButtonProps> = ({outline, text, ...rest}) => (
  <Container
    style={outline ? {
      width: '16rem',
      height: '3.3rem',
      backgroundColor: "transparent",
      color: "var(--color-dark)",
      border: '0.1px solid var(--color-link-shadow)',
      fontSize: '1.6rem'
    } : {
      backgroundColor: "var(--color-link-shadow)",
      color: "var(--color-white)"
    }}

    {...rest}
  >
    <span>{text}</span>
    <svg width="385" height="265" viewBox="0 0 385 265" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M384.97 132.441C384.97 129.229 383.647 126.161 381.445 123.851L262.357 3.5595C257.653 -1.1925 250.038 -1.1805 245.346 3.5595C240.642 8.2995 240.642 15.9985 245.346 20.7385L343.91 120.289H12.03C5.39 120.29 0 125.728 0 132.441C0 139.154 5.39 144.592 12.03 144.592H343.898L245.346 244.143C240.642 248.883 240.654 256.582 245.346 261.322C250.05 266.062 257.665 266.062 262.357 261.322L381.445 141.031C383.694 138.757 384.934 135.629 384.97 132.441Z" 
        fill={outline ? 'var(--color-dark)' : 'var(--color-white)'}
      />
    </svg>
  </Container>
)

export default Button;