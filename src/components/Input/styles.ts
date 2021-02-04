import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 3.3rem;
  
  border: 1px solid var(--color-adjust);
  border-radius: 0.6rem;
  outline: 0;
  
  font-size: 1.8rem;
  letter-spacing: 0.3rem;
  color: var(--color-adjust);
  
  padding: 0 0.9rem;
  background: transparent;

  &::placeholder {
    font-size: 1.8rem;
    font-family: 'Crimson Roman', 'Gentium Plus', sans-serif;
    opacity: 0.7;
  }
`;

export default Input;