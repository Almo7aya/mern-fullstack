import ReactDOMServer from 'react-dom/server';
import React from 'react';
import axios from 'axios';
import config from '../config';

import App from '../src/components/App'

axios({
  url: `${config.hostUrl}/api/package`
}).then(({data}) => {
  ReactDOMServer.renderT
}).catch(console.log)

export default () =>{};
