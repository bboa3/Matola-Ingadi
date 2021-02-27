import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const MinHeader = styled.div`
  width: 100%;
  height: 30rem;
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;

  background-color: var(--color-primary);

  > h1 {
    font-size: 3.3rem;
    color: var(--color-white);
  }
`;

export const Main = styled.main`
  max-width: 120rem;
  height: 49rem;
  margin: 4.3rem 5%;
`;

export const Title = styled.div`
  margin-bottom: 2rem;
`;

export const Text = styled.div`
  @media (min-width: 738px) {
    display: flex;
    justify-content: space-between;

    > p {
      width: 49%;
    }
  }
`;
