import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  padding: 2rem 5%;
  background-color: var(--color-primary);
  color: var(--color-white);
  text-align: center;

  font-size: 1.6rem;
  letter-spacing: 0.2rem;

  > span:nth-child(1) {
    width: 100%;
    height: 1.5rem;
    font-size: 2.4rem;

    > svg {
      width: 3rem;
      height: 3rem;
    }

    @media (min-width: 738px) {
      text-align: right;
      display: flex;
      justify-content: flex-end;
    }
  } 
`;

export const Main = styled.main`
  margin: 3rem 0;

  > section:nth-child(1) {
    > img {
      max-width: 22rem;
      margin: 3.3rem 0;
      opacity: 0.8;
    }

    form {
      margin-top: 1rem;

      > span {
        font-size: 1.3rem;
        margin-top: 0.8rem;
      }

      > div {
        width: 100%;
        height: 3rem;
        display: flex;
        justify-content: center;
        position: relative;

        > label {
          display: none;
        }
        
        > input {
          max-width: 30rem;
        }

        > button {
          width: 3.1rem;
          height: 2.6rem;
          position: absolute;
          top: 0.2rem;
          right: 4.4rem;
          outline: none;
          border: none;

          background: transparent;
          color: var(--color-blue);

          font-size: 1.5rem;
          line-height: 2.6rem;
          
          padding: 0.3rem 0.2rem;
          opacity: 0.7;
          &:hover {
            opacity: 1;
          }

          @media (min-width: 1026px) {
            right: 13%;
          }
          @media (min-width: 1040px) {
            right: 19%;
          }
        }
      }
    }
  }

  > section:nth-child(2) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 0.8rem;

    > a {
      width: fit-content;
      text-decoration: none;
      color: var(--color-white);
      cursor: pointer;

      &:hover {
        color: var(--color-adjust);
      }
    }
  }

  > section:nth-child(3) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-bottom: 0.8rem;

    > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      > a {
        width: fit-content;
        text-decoration: none;
        color: var(--color-white);
        cursor: pointer;

        &:hover {
          color: var(--color-adjust);
        }
      }
    }

    > div:nth-child(2) {
      margin-top: 0.8rem;

      > a {
        cursor: pointer;
        
        > svg {
          width: 2.8rem;
          height: 2.8rem;
          margin-left: 1.8rem;
          opacity: 0.9;
          
          &:hover path {
            fill: var(--color-adjust);
          }
        }
      }
    }
  }
  
  @media (min-width: 738px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > section:nth-child(1) {
      width: 40%;
    }
    > section:nth-child(2) {
      width: 30%;
    }
    > section:nth-child(3) {
      width: 30%;
    }
  }
`;
