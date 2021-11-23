import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomeView } from '../views/homeview/HomeView';
import { RoomOneView } from '../views/roomOne/RoomOneView';
import {RoomTwoView} from '../views/roomTwo/RoomTwoView';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomeView} />
        <Route exact path='/roomone' component={RoomOneView} />
        <Route exact path='/roomtwo' component={RoomTwoView} />
      </Switch>
    </BrowserRouter>
  );
};
