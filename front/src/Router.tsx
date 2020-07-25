import React, { lazy } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const Weather = lazy(() => import('./components/weather'));

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Weather} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default Router;
