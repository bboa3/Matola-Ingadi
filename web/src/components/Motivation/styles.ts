import styled from 'styled-components';

export const Container = styled.div`
  margin: auto 2rem;

  > h2 {
    font-size: 3rem;
    text-align: center;
  }

  > h3 {
    font-size: 3.3rem;
    font-family: Hijrnotes;
    text-align: center;
    color: var(--yellow);
  }

  > ul {
    font-size: 2rem;
    list-style: none;
  }

  @media (min-width: 738px) {
    margin: auto 8rem;

    > h2 {
      font-size: 3.4rem;
    }

    > h3 {
      font-size: 3.8rem;
    }

    > ul {
      font-size: 2.4rem;
    }
  }
`;