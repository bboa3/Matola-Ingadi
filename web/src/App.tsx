import React from 'react';
import GlobalStyles from './assets/styles/globalStyles';
import './assets/styles/hijrnotes-webfont/style.css';
import './assets/styles/didot-cufonfonts-webfont/style.css';
import './assets/styles/made-mirage-cufonfonts-webfont/style.css';
import Router from './routes';

function App() {
  return (
    <>
      <Router />
      <GlobalStyles />
    </>
  );
}

export default App;
