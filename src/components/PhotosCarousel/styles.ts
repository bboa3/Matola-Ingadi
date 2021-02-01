import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  text-align: center;

  > h2 {
    margin-top: 3rem;
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  > .slider {
    width: 100%;
    height: 69vw;
    position: relative;

    > .slide {
      width: 100%;
      height: 100%;

      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;

      display: none;
      animation: slide 2s ease;
    }

    > .slide.active {
      display: flex;
    }

    @media (min-width: 738px) {
      height: 59vw;
    }

    @keyframes slide{
      0%{
        transform: scale(1.01);
      }
      
      100%{
        transform: scale(1);
      }
    }
  }

  @media (min-width: 992px) {
    display: flex;
    align-items: center;

    > h2 {
      padding: 0 5vw;
    }

    > .slider {
      margin-top: 7rem;
    }
  }
`;

export const SlideButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3%;

  position: absolute;
  top: 40%;

  @media (min-width: 738px) {
    top: 50%;
  }
`;