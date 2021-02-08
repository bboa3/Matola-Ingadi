import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 1rem;

  > select {
    width: 100%;
    height: 3.3rem;
    
    border: 1px solid var(--color-adjust);
    border-radius: 0.6rem;
    outline: 0;
    
    font-size: 1.7rem;
    letter-spacing: 0.3rem;
    color: var(--color-adjust);
    outline: none;
    
    padding: 0 0.9rem;
    background: transparent;

    opacity: 0.8;
  }

  > label {
    display: none;
  }
`;