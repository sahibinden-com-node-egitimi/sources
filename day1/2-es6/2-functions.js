// // f(x) => x + 1

// 1.
// function hello(text) {
//   console.log(text);
// }

// 2.
// const hello = function (text) {
//   return 'Hello '+ text;
// };

// 3.
// const hello = name => 'Hello ' + name;

// let title = hello('Ahmet');
// console.log(title);

// 4. callback

function uyan(callback) {
  setTimeout(() => {
    console.log('Uyanıldı');
    setTimeout(() => {
      callback();
    }, 3000);
  }, 2000);
}

uyan(() => {
  console.log('Yüzünü yıka');
});
