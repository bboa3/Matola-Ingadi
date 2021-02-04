import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Ingadi from './pages/Ingadi';
import Accessories from './pages/Accessories';
import Photos from './pages/Photos';
import Visit from './pages/Visit';

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/"  component={Ingadi} />
      <Route path="/nossas-lembranças/images"  component={Photos} />
      <Route path="/visitar-matola-ingadi"  component={Visit} />
      <Route path="/acessórios-de-eventos"  component={Accessories} />
    </Switch>
  </BrowserRouter>
)

export default Router;