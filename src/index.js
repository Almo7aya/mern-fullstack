import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import App from './components/App.js';

axios.get('/api/package')
  .then(({data}) => {
    ReactDOM.render(
      <App initPackages={data}/>,
      document.getElementById('root')
    );
  })
  .catch(console.log);

