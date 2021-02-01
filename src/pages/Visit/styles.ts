import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 4rem 0;

  > span {
    width: 90%;
    margin-bottom: 3rem;

    > h1 {
      font-size: 2.1rem;
      text-transform: none;
      font-weight: normal;
    }
  }
 
  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
    top: -43vw;
  }

  @media (min-width: 738px) {
    > span {
      width: 86%;

      >  h1 {
        max-width: 50rem;
      }
    }

    > div {
      top: -46vw;
    }
  }

  @media (min-width: 992px) {
    padding: 5rem 0;
    
    > span {
      margin-bottom: 6rem;
    }

    > div {
      top: -52vw;
    }
  }
`;