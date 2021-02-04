import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 3% 0;
  overflow: hidden;
`;

export const Form = styled.form`
  padding: 0 5%;

  > legend {
    font-size: 2.4rem;
    margin-bottom: 3rem;
    letter-spacing: 0.2rem;
    line-height: 1.3;
  }

  > button {
    float: right;
  }

  @media (min-width: 738px) {
    > legend {
      font-size: 2.9rem;
    }

    > button {
      margin-top: 1.3rem;
    }
  }

  @media (min-width: 992px) {
    > button {
      margin-top: 1.5rem;
    }

    max-width: 70rem;
  }
`;

export const AccessoriesContainer = styled.div`
  
`;