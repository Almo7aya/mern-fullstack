import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.render('index', {
    content: 'babel is rocks'
  });
});


router.get('/api/package', (req, res) => {
  res.json(require('../package.json'));
});


export default router;
