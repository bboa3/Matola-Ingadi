import styled from 'styled-components';

export const Container = styled.header`
  width: 100vw;
  height: 5rem;

  background-color: var(--color-primary);

  > div {
    width: 80%;
    height: 100%;
    margin: 0 10%;

    display: flex;
    align-items: center; 
    justify-content: space-between; 

    > nav {
      width: 100%;
      height: 50%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: var(--color-primary);

      z-index: -1;

      @media (min-width: 738px) {
        width: fit-content;
        height: 100%;
        position: unset;

        z-index: 0;
      }

      > span {
        width: 20rem;
        height: 20rem;
        border-radius: 50%;
        background-color: red;
      }
    }
  }
`;

export const Logo = styled.div`
  > a img {
    width: 10rem;
  }
`;

export const MenuToggleBar= styled.button`
  outline: none;
  border: none;

  font-size: 1.6rem;
  text-transform: uppercase;
  text-align: center;
  line-height: 3.3rem;

  color: var(--color-white);
  background: transparent;

  cursor: pointer;

  @media (min-width: 738px) {
    display: none;
  }
`;

export const Options = styled.ul`
  position: relative;

  @media (min-width: 738px) {
    display: flex;
  }
`;

export const Option = styled.li`
  list-style: none;
  line-height: 1.5;

  > a {
    text-decoration: none;
    color: var(--color-white);
    letter-spacing: 0.3rem;

    &:hover {
      color: #603B5A;
    }
  }
  @media (min-width: 738px) {
    margin-left: 2rem;
    font-size: 1.4rem;
    text-transform: lowercase;
    letter-spacing: 0.1rem;
;
  }
`;

export const KingIcon = styled.li`
  width: 13rem;
  height: 13rem;
  border-radius: 50%;

  position: absolute;
  top: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 6rem;
  }
  background-color: var(--color-primary);
  

  @media (min-width: 738px) {
    display: none;
  }
`;