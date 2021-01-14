import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #215737;
}

body {
  background: var(--white);

  font-size: 1.9rem;
  line-height: 1.87;
  letter-spacing: .02rem;
  font-family: Didot;
}

h1, h2, h3, h4 {
  color: #215737;
}

:root {
    --dark: rgb(36, 41, 46);
    --white: #ffffff;

    --primary: #BF0B3B;
    --light-gray: #E6E6F0;
    --yellow: #c39d42;
    --dark-gray: #404040;
    --supper-dark-gray: #262626;

    font-size: 60%;
  }

  @media (min-width: 700px){
    :root {
      font-size: 62.5%;
    }
  }
`;