import styled from 'styled-components';

export const Container = styled.div`
  margin: 5rem 5%;

  > div {
    margin-bottom: 3rem;

    > h2 {
      font-size: 2.9rem;
      text-transform: none;
      font-family: 'Crimson Semibold';
    }
  }

  @media (min-width: 738px) {
    display: flex;
    margin: 6rem 5%;

    > div {
      margin: 1rem 3rem;
    }
  }

  @media (min-width: 992px) {
    margin: 7rem 5%;
  }
`;

export const Form = styled.form`
  > input {
    margin-bottom: 1.3rem;
  }

  > label {
    opacity: 0.6;
    display: none;
  }
`