import styled from 'styled-components';

export const Container = styled.div`
  width: 17.6rem;
  height: 3.6rem;
  margin-left: 1rem;

  position: relative;
  display: flex;
  align-items: center;

  > span{
    height: 3rem;
    width: 0.1rem;
    position: absolute;
    right: -1rem;
    transition: right 0.5s;
  }

  > div {
    height: 3rem;
    width: 0.1rem;
    position: absolute;
    left: -1rem;
    transition: left 0.5s;
  }

  &:hover {
    > span{
      right: 1rem;
    }

    > div {
      left: 1rem;
    }
  }

  > a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Trajan Pro Bold', 'serif';
    font-size: 1.3rem;
    text-decoration: none;
    cursor: pointer;
  }
`;