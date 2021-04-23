import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as CONSTANTS from './CONSTANTS';
import { NotFound } from './NotFound';
import { MapPage } from '../pages/MapPage';
import { AddInfo } from '../pages/AddInfo';

export const RouterConfig = () => {
  return (
    <Switch>
      <Route exact path={CONSTANTS.ROOT} component={MapPage} />
      <Route exact path={CONSTANTS.ADD_INFO} component={AddInfo} />
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default RouterConfig;
