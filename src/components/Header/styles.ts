import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
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
      height: calc(50% - 5rem);
      position: absolute;
      top: 5rem;
      left: 0;
      right: 0;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: var(--color-primary);

      z-index: 10;

      @media (min-width: 738px) {
        width: fit-content;
        height: 100%;
        position: unset;

        z-index: 0;
      }
    }
  }
`;

export const Logo = styled.div`
  > a {
    display: flex;
    flex: 1;
    align-items: center;
  }
  > a img {
    width: 9rem;
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
    font-family: 'Trajan Pro Regular', serif;

    &:hover {
      color: var(--color-adjust);
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

export const ContainerKing = styled.li`
  width: 13rem;
  height: 13rem;
  border-radius: 50%;

  position: absolute;
  top: 17vh;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    width: 6rem;
  }
  background-color: var(--color-primary);
  

  @media (min-width: 738px) {
    display: none;
  }
`;