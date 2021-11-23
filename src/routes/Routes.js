import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomeView } from '../views/HomeView';
import { RoomThreeView } from '../views/RoomThree/RoomThreeView';
export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomeView} />
        <Route exact path='/roomthree' component={RoomThreeView} />
      </Switch>
    </BrowserRouter>
  );
};
