import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3rem;

  @media (min-width: 738px) {
    margin-top: 13rem;
  }
`;

export const Wedding = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  > div {
    width: 50%;
    > img {
      width: 100%;
    }
  }

  > span {
    width: 50%;
  }

  > span h3 {
    max-width: 39rem;
    padding: 0 2rem;
    text-transform: unset;
    font-weight: normal;
    font-size: 2.1rem;
    letter-spacing: 0.5px;
    color: var(--color-primary);
  }

  @media (min-width: 738px) {
    > div {
      max-width: 26rem;
    }

    > span h3 {
      font-size: 2.6rem;
    }
  }

  @media (min-width: 992px) {
    > span {
      margin-left: 6vw;
      display: flex;
      justify-content: center;
    }

    > div {
      margin-left: 10vw;
    }
  }
`;

export const Place = styled.div`
  > div {
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 5rem 0;

    > h4 {
      font-size: 6.6rem;
      letter-spacing: 0.6rem;
      margin-bottom: 1rem;
    }

    @media (min-width: 992px) {
      > h4 {
        font-size: 7.3rem;
      }
    }
  }

  > p {
    max-width: 40rem;
    margin-left: 2rem;

    @media (min-width: 738px) {
      margin-left: 10vw;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 80%;
  margin-top: 5rem;
  float: right;
  > img {
    width: 100%;
  }

  @media (min-width: 738px) {
    max-width: 36rem;
  }
  @media (min-width: 992px) {
    margin-top: 0;
    margin-right: 10vw;
  }
`;