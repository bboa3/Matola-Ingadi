import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 3rem 0;
`;

export const MinHeader = styled.div`
  width: 90%;
  height: 100vh;
  margin-bottom: 3rem;

  > h1 {
    font-size: 2.1rem;
    font-family: 'Crimson Roman', Gentium Plus, sans-serif;
    text-transform: none;
    font-weight: normal;
  }

  @media (min-width: 738px) {
    width: 86%;
    > h1 {
      max-width: 50rem;
    }
  }

  @media (min-width: 992px) {
    margin-bottom: 6rem;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 3.3vw;

  @media (min-width: 738px) {
    top: -26vw;
  }

  @media (min-width: 992px) {
    top: -38vw;
  }
`;