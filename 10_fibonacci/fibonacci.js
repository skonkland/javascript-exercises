const fibonacci = function (value) {
  let number = +value;

  if (number < 0) return "OOPS";
  if (number === 0) return 0;

  let firstPrev = 1;
  let secondPrev = 0;
  let result = 1;

  for (let i = 2; i <= number; i++) {
    result = firstPrev + secondPrev;
    secondPrev = firstPrev;
    firstPrev = result;
  }

  return result;
};

// Do not edit below this line
module.exports = fibonacci;
