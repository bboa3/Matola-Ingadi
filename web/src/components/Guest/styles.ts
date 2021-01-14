import styled from 'styled-components';

export const Container = styled.div`
  > div:nth-child(1) {
    position: relative;
    right: 0;
    top: 0rem;
  }

  > div:nth-child(2) {
    width: 35%;
    height: 100%;
    
    padding-left: 2rem;
    position: absolute;
    top: 0;
    z-index: 2;
    display: none;
    
    > p {
      line-height: 1.5;
    }

    @media (min-width: 635px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      
      > p {
        font-family: 'MADE Mirage Thin';
        font-size: 2.8rem;
        text-align: start;
        color: #fff;
        font-weight: bold;
      }
      
      > h1 {
        font-family: Hijrnotes;
        font-size: 2.4rem;
        color: var(--yellow);
        margin-bottom: 22rem;
      }
    }
    
    @media (min-width: 683px) {
      > h1 {
        margin-bottom: 14rem;
      }
    }
    
    @media (min-width: 873px) {
      width: 35%;
      height: 100%;
      color: #fff;
      
      > p, h1 {
        font-size: 3.8rem;
        margin: 0;
      }
    }
  }
`;

export const IngadiDescription = styled.div`
  margin: 2rem;

  > h3 {
    font-size: 2.8rem;
    font-weight: bold;
    text-transform: uppercase;

    text-align: center;
    margin-bottom: 2rem;
  }

  @media (min-width: 738px) {
    margin: 5rem 23%;

    > h3 {
      font-size: 3.4rem;
      margin-bottom: 5rem;
    }
  }
`;