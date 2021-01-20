import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--color-white);
  font-size: 1.8rem;
  font-family: 'Trajan Pro Regular', serif;

  .sweet-loading {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

body p {
  line-height: 1.5;
}

h1, h2, h3, button, input {
  font-family: 'Trajan Pro Bold', 'serif Bold';
}

:root { 
    --color-white: #fff;
    --color-primary: #232136;
    --color-yellow: #fdb324;
    --color-yellow-dark: #b27824;
    
    font-size: 60%;
  }

  @media (min-width: 738px){
    :root {
      font-size: 62.5%;
    }
  }
`;