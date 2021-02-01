import styled from 'styled-components';

export const SlideButtonContainer = styled.div`
  width: 3.3rem;
  height: 3.3rem;
  
  padding: 1.3rem;
  border: 1px solid var(--color-yellow-dark);
  border-radius: 50%;
  
  background-color: transparent;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  cursor: pointer;
  transition: background-color 0.5s;
  
  > svg {
    width: 100%;
    height: 100%;
  }
  
  &:hover {
    background-color: rgba(178, 120, 36, 0.1);
  }
`