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
  letter-spacing: 0.6px;
}

h1, h2, h3, h4 {
  font-family: 'Crimson Bold', Gentium Plus, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  line-height: 1.3;
}

button {
  font-family: 'Trajan Pro Bold', 'serif';
}

input {
  width: 100%;
  height: 3.3rem;
  
  border: 1px solid var(--color-adjust);
  border-radius: 0.6rem;
  outline: 0;
  
  font-size: 1.8rem;
  letter-spacing: 0.3rem;
  color: var(--color-adjust);
  
  padding: 0 0.9rem;
  background: transparent;

  &::placeholder {
    font-size: 1.8rem;
    font-family: 'Crimson Roman', 'Gentium Plus', sans-serif;
    opacity: 0.7;
  }
}

:root { 
    --color-white: #fff;
    --color-blue: #15233E;
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