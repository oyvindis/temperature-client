import React from 'react';
import { hot } from 'react-hot-loader/root';

import { Router } from '../router/router.component';
import './App.css';
import { NavBar } from "./navbar/navbar.component";

export default hot(function App() {
  return (
    <div className='App'>
      <NavBar title="Temperature client" />
      <Router />
    </div>
  );
});
