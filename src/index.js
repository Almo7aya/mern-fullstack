import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.js';

import packages from '../package.json';

ReactDOM.render(
    <App packages={packages}/>,
  document.getElementById('root')
);
