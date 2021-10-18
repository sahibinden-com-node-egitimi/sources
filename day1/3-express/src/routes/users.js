import express from 'express';

const router = express.Router();

const users = [
  {
    id: 1,
    name: 'Ahmet',
  },
  {
    id: 2,
    name: 'Ayşe',
  },
  {
    id: 3,
    name: 'Fatma',
  },
  {
    id: 4,
    name: 'Mehmet',
  },
];

router.get('/', (req, res) => {
  res.json(users);
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  const user = users.find((user) => user.id === Number(id));

  if (user) {
    return res.json(user);
  }

  next('Error user not found');
});

router.post('/', (req, res) => {
  const { name } = req.body;

  const user = {
    name,
    id: users.length + 1,
  };

  users.push(user);
  res.json(users);
});

export default router;
