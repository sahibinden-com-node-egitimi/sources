// import fetch from 'node-fetch';

import axios from 'axios';

const BASE_ENDPOINT = 'https://jsonplaceholder.typicode.com';

// fetch(`${BASE_ENDPOINT}/users`)
//   .then((res) => res.json())
//   .then((users) => {
//     const [user1] = users;

//     const lastUser = users[users.length - 1];
//     console.log('User', user1);
//     console.log('lastUser', lastUser);

//     fetch(`${BASE_ENDPOINT}/users/${user1.id}/posts`)
//       .then((res) => res.json())
//       .then((posts) => {
//         console.log('Posts', posts);

//         const [post1] = posts;

//         fetch(`${BASE_ENDPOINT}/posts/${post1.id}/comments`)
//           .then((res) => res.json())
//           .then((comments) => {
//             console.log('Comments', comments);
//           });
//       });
//   });

// axios(`${BASE_ENDPOINT}/users`)
//   .then((res) => res.data)
//   .then((users) => {
//     const [user1] = users;
//     console.log('User', user1);

//     axios(`${BASE_ENDPOINT}/users/${user1.id}/posts`)
//       .then((res) => res.data)
//       .then((posts) => {
//         const [post1] = posts;
//         console.log('Posts', posts);

//         axios(`${BASE_ENDPOINT}/posts/${post1.id}/comments`)
//           .then((res) => res.data)
//           .then((comments) => {
//             console.log('Comments', comments);
//           });
//       });
//   });

// async/await
// const getData = async () => {
//   const { data: users } = await axios(`${BASE_ENDPOINT}/users`);
//   const { data: posts } = await axios(`${BASE_ENDPOINT}/users/${users[0].id}/posts`);
//   const { data: comments } = await axios(`${BASE_ENDPOINT}/posts/${posts[0].id}/comments`);
// };

// getData();

(async () => {
  const { data: users } = await axios(`${BASE_ENDPOINT}/users`);
  const { data: posts } = await axios(`${BASE_ENDPOINT}/users/${users[0].id}/posts`);
  const { data: comments } = await axios(`${BASE_ENDPOINT}/posts/${posts[0].id}/comments`);

  console.log('user1', users[0]);
  console.log('posts1', posts[0]);
  console.log('comments1', comments[0]);
})();
