import styled from 'styled-components';

export const Main = styled.main`
  margin-bottom: 5rem;
`;

export const Video = styled.div`
  position: relative;
  width: 100%;
  height: 40vh;

  > span {
    width: 100%;
    height: 40vh;
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 1;

    > div {
      width: 4.4rem;
      height: 4.4rem;
      
      padding: 1rem;
      border: 2px solid var(--color-yellow);
      border-radius: 50%;
      
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
        background-color: rgba(178, 120, 36, 0.2);
      }
    }
  }

  @media (min-width: 738px) {
    &, span {
      height: 40vh;
    }
  }

  @media (min-width: 1030px) {
    &, span {
      height: 100vh;
    }
  }
`;

export const IngadiKing = styled.div`
  padding: 0 5%;
  margin: 6rem 0;

  > h1 {
    font-size: 2.9rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 738px) {
    padding: 0 26%;
    margin: 10rem 0 16rem;

    > h1 {
      max-width: 45rem;
      font-size: 3.2rem;
      margin-bottom: 2.3rem;
      float: center;
    }
  }

  @media (min-width: 992px) {
    margin: 10rem 0 9rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;

export const CarouselAndMapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  padding-bottom: 39rem;
  @media (min-width: 738px) {
    padding-bottom: 56rem;
  }
  @media (min-width: 992px) {
    padding-bottom: 36rem;
  }
`;

export const Benefits = styled.div`
  margin-top: 43vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 5%;

  > h2 {
    max-width: 79rem;
    font-size: 2.9rem;
    margin-bottom: 2rem;
  }

  > p {
    max-width: 79rem;
  }

  @media (min-width: 738px) {
    > h1 {
      max-width: 45rem;
      font-size: 3.2rem;
      margin-bottom: 2.3rem;
      float: center;
    }
  }
  @media (min-width: 992px) {
    margin-top: 40rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 40vh;
`; 