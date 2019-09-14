import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import get from 'lodash/get';

import { routeConfig } from './app/routeConfig';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-headerx">
          <p>Test</p>
        </header>
        <Switch>
          {routeConfig.map((route, i) => (
            <Route key={`${i}-${get(route, 'path', '')}`} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
