import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--white);
  font-family: Didot;
  font-weight: bold;
  font-style: italic;
  font-size: 2.1rem;
  padding: 0.5rem 1.5rem 0;
  position: sticky;
  top: 0;
  z-index: 50;
`;

export const Nav = styled.div`
  @media (max-width: 738px) {
    > #closeMenu {
      display: none;
    }
    
    > #openMenu {
      display: flex;
      height: 100vh;
      margin-top: 1rem;
      align-items: center;
      flex-direction: column;
      line-height: 400%;
      transition: all 2s ease-out;
    }
  }
  
  @media (min-width: 738px) {
    margin: auto 4rem;
    
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 1000px) {
    margin: auto 6rem;

    display: flex;
    justify-content: space-between;
  }
`;

export const Logo = styled.div`
  width: 8.6rem;

  > img {
    width: 100%;
  }
`;

export const Options = styled.ul`
  position: relative;

  > span {
    position: absolute;
    bottom: -1.3rem;
    left: 6.8rem;
    
    > img {
      width: 2rem;
    }
  }
`;

export const Option = styled.li`
  display: inline-block;
  list-style: none;

  > a {
    text-decoration: none;
    padding: 0 10px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      color: var(--primary);
    }
  }
`;

export const MenuToggleBar = styled.div`
  position: absolute;
  right: 6%;
  top: 1.8rem;
  width: 3.3rem;
  height: 3.3rem;
  cursor: pointer;

  > .MuiSvgIcon-root {
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: all 2s ease-out;

    > path:hover {
      color: var(--primary);
    }
  }

  @media (min-width: 738px) {
    display: none;
  }
`;