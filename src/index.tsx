import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import { Auth0Provider } from './contexts/auth0.context';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider>
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
