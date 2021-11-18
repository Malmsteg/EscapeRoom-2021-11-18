import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomeView } from '../views/HomeView';
export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomeView} />
      </Switch>
    </BrowserRouter>
  );
};
