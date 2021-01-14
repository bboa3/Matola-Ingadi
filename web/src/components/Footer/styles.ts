import styled from 'styled-components';

export const Container = styled.div`
  margin: 4rem 2rem;
  
  border: 1px solid var(--light-gray);
  border-top-left-radius: 0.8ren;
  border-top-right-radius: 0.8rem;

  > .map-container-le {
    width: 100%;
    height: 30rem;
    margin-top: 2rem;
  }

  > .map-container-le .map-popup a{
    text-decoration: none;
    font-size: 1.6rem;
  }

  @media (min-width: 738px) {
    margin: 4rem 8rem;

    > .map-container-le {
      width: 100%;
      height: 40rem;
    }
  }
`;