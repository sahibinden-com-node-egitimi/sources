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

const getUser = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.id === userId);

      if (user) {
        return resolve(user);
      }

      reject('User not found.');
    }, 400);
  });
};

// getUser(2).then(console.log).catch(console.log);

(async () => {
  try {
    const user = await getUser(2);
    console.log(user);
  } catch (e) {
    console.log('Error:', e);
  }
})();
