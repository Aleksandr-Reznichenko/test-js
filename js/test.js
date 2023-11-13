'use strict';

//

// function greet(name) {
//   console.log(`Ласкаво просимо, ${name}!`);
// }

// function notify(name) {
//   console.log(`${name}, ваша кімната буде готова через 30 хв.`);
// }

// function registerGuest(name, callback) {
//   console.log(`Реєстрація ${name}`);
//   callback(name);
// }

// registerGuest('Олександр', notify);

//////////////////////////////////////////////////

// function registerGuest(name, callback) {
//   console.log(`Реєстрація ${name}`);
//   callback(name);
// }

// registerGuest('Олександр', function greet(name) {
//   console.log(`Ласкаво просимо, ${name}!`);
// });

// registerGuest('Олександр', function notify(name) {
//   console.log(`${name}, ваша кімната буде готова через 30 хв.`);
// });

// registerGuest('Олександр', function roomIsReady(name) {
//   console.log(`${name}, ваша кімната готова!`);
// });

//////////////////////////////////////////////////////////////////

function doMath(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}

doMath(2, 5, function (x, y) {
  return x + y;
});
doMath(2, 5, function (x, y) {
  return x - y;
});
doMath(2, 5, function (x, y) {
  return x * y;
});
doMath(2, 5, function (x, y) {
  return x / y;
});
