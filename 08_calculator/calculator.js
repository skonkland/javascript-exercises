const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, next) => total + next, 0);
};

const multiply = function (array) {
  return array.reduce((total, next) => total * next, 1);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (a) {
  let result = 1;

  for (let mult = a; mult > 0; mult--) {
    result *= mult;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
