import styled from 'styled-components';

export const Container = styled.div`
  margin: auto 2rem;
`;


export const TopSection = styled.div`
  text-align: center;

  > span {
    font-size: 1.6rem;
  }
`;

export const BottomSection = styled.div`
  
  margin-top: 4rem;

  > ul {
    list-style: none;

    font-size: 2rem;
    margin-bottom: 2rem;

    > li a svg {
      width: 3.2rem;
      height: 3.2rem;
      cursor: pointer;

      margin-right: 1rem;
      transition: transform .2s ease-out;

      &:hover {
        transform: rotate(30deg) translateZ(0);
      }
    }

    > li a:nth-child(1) svg {
      > path {
        color: #405DE6;
      }
    }

    > li a:nth-child(2) svg {
      > path {
        color: #075E54;
      }
    }

    > li a:nth-child(3) svg {
      > path {
        color: 	#833AB4;
      }
    }
  }

  @media (min-width: 738px) {
    display: flex;
    align-items: center;

    > ul {
      width: 30%;
      padding: 0 2rem;
    }
  }

  @media (min-width: 1000px) {
    display: flex;
    align-items: center;

    > ul {
      width: 30%;
      padding: 0 4rem;
    }
  }
`;

export const Form = styled.form`
  > button {
    width: 17rem;
    height: 2.8rem;

    outline: 0;
    border: 1px solid var(--primary);

    font-size: 1.7rem;
    font-weight: bold;
    color: var(--primary);
    background: transparent;

    line-height: 1.8rem;
    text-align: center;
    text-transform: uppercase;
    border-radius: 0.8rem;

    margin: 0.8rem ;
    transition: background-color .2s ease-out;

    &:hover {
      background-color: var(--primary);
      color: var(--white);
    }
  }

  @media (min-width: 738px) {
    width: 50%;
    margin-left: 20%;
  }
`;
