import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > h1 {
    font-size: 5rem;
  }
`;

export const SectionFirst = styled.div`
  width: 100%;
  height: 24rem;
  display: flex;
  justify-content: center;
  align-content: center;

  @media (min-width: 738px) {
    height: 40rem;
  }
`;

export const Scroll = styled.div`
  width: 4rem;
  height: 100%;
  display: none;

  @media (min-width: 738px) {
    display: flex;
    align-items: flex-end;
  }

  > div {
    width: 4rem;
    height: 4rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: var(--gray);
    opacity: .5;

    > span {
      font-size: 1.2rem;
      color: #fff;
    }

    > i {
      color: var(--primary);
      font-size: 1.8rem;
      padding: 0.2rem;

      cursor: pointer;
    }
  }
`;

export const ScrolledContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  overflow: hidden;

  > img {
    width: 160%;
  }
`;

export const Bottom = styled.button`
  height: 3rem; 
  width: 10rem;
  background: transparent;
  outline: 0;
  border: 1px solid var(--white);
  border-radius: .3rem;

  &:hover {
    color: var(--primary);
    border: 1px solid var(--primary);
  }
`;


export const SectionSecond = styled.div`
  height: 47rem;

  display: flex;

  > div {
    @media (min-width: 738px) {
      width: 50%;
      height: 42rem;
      display: flex;
      align-items: center;
    }
  }
`;

export const LeftContent = styled.div`
  display: none;
  justify-content: flex-end;
  
  margin-right: 13rem;
`;

export const Border = styled.div`
  position: relative;
  width: 20rem;
  height: 30rem;

  border: 3px solid var(--primary);
`;

export const Image = styled.img`
  position: absolute;
  width: 35rem;
  height: 25rem;
  top: 2rem;
  right: -7.6rem;

  background: var(--white);
`;

export const Description = styled.div`
  > div {
    margin: 2rem;

    @media (min-width: 1000px) {
      margin: 0;
      width: 65%;
    }

    > h1 {
      line-height: 1.4;
      font-size: 2.8rem;
      
      margin-bottom: 1.5rem;
    }

    > p {
      color: var(--light-gray);
    }
  }
`;

