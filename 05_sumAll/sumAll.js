const sumAll = function (num1, num2) {
  if (!isValid(num1) || !isValid(num2)) return "ERROR";

  let result = 0;
  let start = num1 < num2 ? num1 : num2;
  let end = num1 < num2 ? num2 : num1;

  for (let number = start; number <= end; number++) {
    result += number;
  }

  return result;
};

function isValid(value) {
  return typeof value === "number" && value >= 0;
}

// Do not edit below this line
module.exports = sumAll;
