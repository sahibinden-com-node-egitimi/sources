// 1.
//  const user = {
//   name: 'Ayşe',
//   surname: 'Vural',
//   age: 30,
//   location: {
//     city: 'Istanbul',
//     country: {
//       code: 'TR',
//       phone: '90',
//     },
//   },
// };

// // let name = user.name;
// // let surname = user.surname;
// // let age = user.age;

// let {
//   name: title,
//   surname,
//   age,
//   location: {
//     city,
//     country: { code },
//   },
// } = user;

// console.log(title, surname, age);
// console.log(city);
// console.log(code);

// 2.
// const color = ['red', 'green', 'blue'];
// let [color1, color2, color3] = color;
// console.log(color1, color2, color3);

// 3.
// function logUser({ name, age, profile: { friends } }) {
//   console.log(name);
//   console.log(age);
//   console.log(friends);
// }

// logUser({ name: 'Burak', age: 22, profile: { friends: 40 } });

const name = 'Mehmet';
const surname = 'Seven';

console.log('Hoş geldin ' + name + ' ' + surname + ', nasılsın?');
console.log(`Hoş geldin ${name} ${surname}, nasılsın?`);
