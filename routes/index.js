import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.end('Hello');
});

export default router;
