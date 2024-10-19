const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, value) => total + value, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, value) => total * value, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
	if (number === 0 || number === 1) {
    return 1;
  }
  else {
    let total = 1;
    for(i = 2; i <= number; i++) {
      total *= i;
    }
    return total;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
