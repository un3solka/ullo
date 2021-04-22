import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as CONSTANTS from './CONSTANTS';
import { NotFound } from './NotFound';
import { MapPage } from '../pages/MapPage';

export const RouterConfig = () => {
  return (
    <Switch>
      <Route exact path={CONSTANTS.ROOT} component={MapPage} />
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default RouterConfig;
