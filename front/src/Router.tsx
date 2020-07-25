import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/weather" component={null} />
      <Redirect to="/weather" />
    </Switch>
  </BrowserRouter>
);

export default Router;
