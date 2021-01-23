import styled from 'styled-components';

export const MapContainer = styled.div`
  width: 90%;
  height: 48rem;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  padding: 4rem 3rem;
  color: var(--color-white);
  
  position: absolute;
  top: 43vw;

  > h3 {
    color: var(--color-white);
    letter-spacing: 0.3rem;
    font-size: 2.1rem;
    margin-bottom: 2rem;
  }

  > p {
    margin-bottom: 2rem;
  }

  > button {
    width: 20rem;
    height: 3rem;
    
    outline: none;
    border: none;
    
    background-color: var(--color-yellow-dark);
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    cursor: pointer;
    transition: background-color 0.5s;
    
    &:hover {
      background-color: var(--color-yellow);
    }
  }

  @media (min-width: 738px) {
    width: 86%;
    height: 70rem;
    top: 46vw;
    padding: 8rem 6rem;

    > h3 {
      font-size: 2.6rem;
    }

    > p {
      margin-bottom: 3rem;
    }
  }

  @media (min-width: 992px) {
    height: 56rem;
    top: 52vw;

    > h3 {
      width: 40rem;
      font-size: 2.6rem;
    }

    > p {
      width: 33rem;
    }
  }
`;