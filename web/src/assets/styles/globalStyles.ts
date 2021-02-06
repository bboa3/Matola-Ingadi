import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--color-white);
  color: var(--color-primary);
  font-size: 1.8rem;
  font-family: 'Crimson Roman', Gentium Plus, sans-serif;

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
  letter-spacing: 0.5px;
}

h1, h2, h3, h4 {
  font-family: 'Crimson Bold', Gentium Plus, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  line-height: 1.3;
}

button {
  font-family: 'Trajan Pro Bold', 'serif';
}

:root { 
    --color-white: #fff;
    --color-primary: #232136;
    --color-adjust: #603B5A;
    --color-yellow: #fdb324;
    --color-yellow-dark: #b27824;
    
    --color-error: #dc3545;
    --color-success: #198754;
    font-size: 60%;
  }

  @media (min-width: 738px){
    :root {
      font-size: 62.5%;
    }
  }
`;