import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import get from 'lodash/get';

import { routeConfig } from './config/routeConfig';

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routeConfig.map((route, i) => (
          <Route key={`${i}-${get(route, 'path', '')}`} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};
