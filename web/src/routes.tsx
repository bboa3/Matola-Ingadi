import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Ingadi from './pages/Ingadi';

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/"  component={Ingadi} />
    </Switch>
  </BrowserRouter>
)

export default Router;