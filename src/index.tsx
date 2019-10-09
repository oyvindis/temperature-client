import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import './index.css';
import App from './app/App';

import { loadConfig } from './config';

function run(): void {
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  );
}

run();

if ((module as any).hot) {
  (module as any).hot.accept();
}

loadConfig().catch(console.error);
