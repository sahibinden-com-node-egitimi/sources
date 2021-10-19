import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Sahibinden.com', name: 'Sahibinden' });
});

export default router;
