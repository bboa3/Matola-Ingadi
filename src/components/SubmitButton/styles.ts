import styled from 'styled-components';


const Button = styled.button`
  width: 16rem;
  height: 3rem;
  letter-spacing: 0.2rem;

  border: none;
  border-radius: 5rem;
  outline: none;
  margin-top: 1rem;
  background-color: var(--color-adjust);
  color: var(--color-white);

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export default Button;