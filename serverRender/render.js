import ReactDOMServer from 'react-dom/server';
import React from 'react';
import axios from 'axios';
import config from '../config';

import App from '../src/components/App';

const serverRender = () =>
  axios({url: `${config.hostUrl}/api/package`})
    .then(({data}) =>
      ({
        markup: ReactDOMServer.renderToString(<App initPackages={data}/>),
        initData: data
      })
    ).catch(console.log);

export default serverRender;
