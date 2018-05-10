import { Router } from 'express';
const router = Router();

import serverRender from '../serverRender/render';

router.get('/', (req, res) => {
  serverRender().then( ({markup, initData}) => {
    res.render('index', {
      markup,
      initData
    });
  })
});


router.get('/api/package', (req, res) => {
  res.json(require('../package.json'));
});

export default router;
