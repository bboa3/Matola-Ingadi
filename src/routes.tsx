import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Ingadi from './pages/Ingadi';
import Photos from './pages/Photos';
import Visit from './pages/Visit';

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/"  component={Ingadi} />
      <Route path="/nossas-lembranças/images"  component={Photos} />
      <Route path="/visitar-matola-ingadi"  component={Visit} />
    </Switch>
  </BrowserRouter>
)

export default Router;