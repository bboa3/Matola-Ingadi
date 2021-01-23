import styled from 'styled-components';
import { Back, Forward } from '../../assets/icons';

export const Container = styled.main`
`;

export const Video = styled.div`
  position: relative;
  width: 100%;
  height: 40vh;

  > img {
    width: 100%;
    height: 100%;
  }

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
    
    > button {
      width: 3.6rem;
      height: 3.6rem;

      outline: none;
      border: none;
      padding: 1.1rem;
      border: 2px solid var(--color-yellow);
      border-radius: 50%;

      background-color: transparent;

      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;
      transition: background-color 0.5s;

      > svg path {
        fill: var(--color-yellow);
      }

      &:hover {
        background-color: rgba(178, 120, 36, 0.1);
      }
    }
  }

  @media (min-width: 738px) {
    &, span {
      height: 40vh;
    }
  }

  @media (min-width: 992px) {
    &, span {
      height: calc(100vh - 5rem);
    }
  }
`;

export const IngadiKing = styled.div`
  padding: 0 5%;
  margin: 6rem 0;

  > h1 {
    font-size: 2.8rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 738px) {
    padding: 0 26%;
    margin: 10rem 0 16rem;

    > h1 {
      margin-bottom: 2.3rem;
    }
  }
`;

export const Carousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  > div:nth-child(1) {
    width: 100%;
    height: 69vw;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3%;

    button {
      width: 3.3rem;
      height: 3.3rem;

      outline: none;
      border: none;
      padding: 1.3rem;
      border: 1px solid var(--color-yellow-dark);
      border-radius: 50%;

      background-color: transparent;

      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;
      transition: background-color 0.5s;

      &:hover {
        background-color: rgba(178, 120, 36, 0.1);
      }
    }

    @media (min-width: 738px) {
      height: 59vw;
    }
  }
`;

export const BackButton = styled(Back)``;
export const ForwardButton = styled(Forward)``;