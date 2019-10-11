import React from 'react';
import { hot } from 'react-hot-loader/root';

import { Router } from '../router/router.component';
import './App.css';

export default hot(function App() {
  return (
    <div className='App'>
      <header>
        <p>Test2</p>
      </header>
      <Router />
    </div>
  );
});
