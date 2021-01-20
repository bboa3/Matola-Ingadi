import styled from 'styled-components';

export const Container = styled.button`
  width: 16rem;
  height: 3.6rem;
  outline: none;
  border: none;
  
  font-size: 1.7rem;

  cursor: pointer;

  > svg {
    width: 1.6rem;
    height: 1rem;
    margin-left: 0.8rem;
    position: relative;
  }

  &:hover {
    > svg {
      animation-name: Next;
      animation-fill-mode: forwards;
      animation-duration: 0.3s;

      @keyframes Next {
        0% {
          right: 0;
        }

        100% {
          right: -0.4rem;
        }
      }
    }
  }
`;