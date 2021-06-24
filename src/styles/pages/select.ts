import styled from 'styled-components';

export const SelectContainer = styled.div`
  margin-bottom: 1rem;

  > span {
    font-size: 0.9em;
    margin-left: 1rem;
    text-align: center;
    color: var(--color-error);
  }

  > select {
    width: 100%;
    height: 3.3rem;
    
    border: 1px solid var(--color-adjust);
    border-radius: 0.6rem;
    
    font-size: 1.7rem;
    letter-spacing: 0.3rem;
    color: var(--color-adjust);
    outline: 0;
    
    padding: 0 0.9rem;
    background: transparent;

    opacity: 0.8;
  }

  > label {
    display: none;
  }
`;