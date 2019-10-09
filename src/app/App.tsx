import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import get from 'lodash/get';

import { routeConfig } from './routeConfig';
import './App.css';

export default hot(function App() {
  return (
    <div className="App">
      <header>
        <p>Test2</p>
      </header>
      <Router>
        <Switch>
          {routeConfig.map((route, i) => (
            <Route key={`${i}-${get(route, 'path', '')}`} {...route} />
          ))}
        </Switch>
      </Router>
    </div>
  );
});
