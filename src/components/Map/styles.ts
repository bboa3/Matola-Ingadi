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

  > div {
    margin-top: 2rem;
  }

  > h3 {
    color: var(--color-white);
    letter-spacing: 0.3rem;
    font-size: 2.1rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 738px) {
    width: 86%;
    height: 70rem;
    top: 46vw;
    padding: 8rem 6rem;

    > h3 {
      font-size: 2.7rem;
    }

    > div {
      margin-top: 2rem;
    }
  }

  @media (min-width: 992px) {
    height: 56rem;
    top: 52vw;

    > h3 {
      width: 40rem;
      font-size: 2.9rem;
    }

    > p {
      width: 33rem;
    }
  }
`;