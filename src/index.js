import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.js';

ReactDOM.render(
  <App initPackages={window.initData}/>,
  document.getElementById('root')
);


