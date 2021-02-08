import React from 'react';
import GlobalStyles from './assets/styles/globalStyles';
import './assets/styles/fonts/trajan-pro/styles.css';
import './assets/styles/fonts/crimson/styles.css';
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