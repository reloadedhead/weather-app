import React, { lazy } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const AppShell = lazy(() => import('./components/layout'));

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path={['/', '/weather']} component={AppShell} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default Router;
