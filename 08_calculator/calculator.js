const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, val) => total + val, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, val) => total * val, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	if (a === 0) {
    return 1;
  }

  let fact = 1;
  for(let num = 1; num <= a; num++) {
    fact *= num;
  }

  return fact;
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
