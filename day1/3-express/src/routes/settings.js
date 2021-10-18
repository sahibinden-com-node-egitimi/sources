import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const { lang, page } = req.query;

  res.end(`Settings: ${lang} - ${page}`);
});

export default router;
