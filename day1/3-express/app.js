const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

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

app.get('/', (req, res) => {
  res.end('Hello Express!');
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => user.id === Number(id));

  if (user) {
    return res.json(user);
  }

  res.status(404).end('User not found');
});

app.get('/settings', (req, res) => {
  const { lang, page } = req.query;

  res.end(`Settings: ${lang} - ${page}`);
});

app.post('/new', (req, res) => {
  const { name } = req.body;

  const user = {
    name,
    id: users.length + 1,
  };

  users.push(user);
  res.json(users);
});

app.listen(3000, () => console.log('Server is up on 3000 PORT! '));
