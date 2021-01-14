import styled from 'styled-components';


export const Container = styled.div`
  position: relative;
  width: calc(100vw - 4rem);
  
  margin: 2rem;

  > div:nth-child(1) {
    position: relative;
    width: 100%;
    height: 21rem;
    overflow: hidden;

    > div {
      position: absolute;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }

  > div:nth-child(2) {
    padding: 2rem;
    border: 1px solid var(--light-gray);

    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    z-index: 1;
  }

  .next,
  .prev {
    top: calc(50% - 2rem);
    position: absolute;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 3rem;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.8rem;
    z-index: 2;

    &:hover {
      background: rgba(255, 255, 255, 0.7);
    }
  }

  .next {
    right: 1rem;
  }

  .prev {
    left: 1rem;
    transform: scale(-1);
  }

  @media (min-width: 738px) {
    height: 60rem;
    padding: 0 4rem;

    > div:nth-child(1) {
      width: calc(50vw - 4rem);
      height: 100%;

      > div {
        width: 100%;
        height: 100%;
      }
    }

    > div:nth-child(2) {
      width: 50vw;
      padding: 4rem;
      border: 1px solid var(--light-gray);
      border-radius: 0.8rem;

      background: var(--white);

      position: absolute;
      bottom: 0;

      > h2 {
        text-align: center;
        font-size: 2.4rem;
      }
    }

    .next,
    .prev {
      width: 3.5rem;
      height: 3.5rem;
    }
  }

  @media (min-width: 1000px) {
    width: calc(100vw - 8rem);
    margin: 4rem;

    > div:nth-child(2) {
      width: 45vw;
    }
  }
`;