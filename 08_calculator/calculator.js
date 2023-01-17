const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	if (!array) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }

  return sum;
};

const multiply = function(array) {
  let total = 1;

  for (num of array) {
    total *= num;
  }
  
  return total;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
  let total = 1;

	while (num > 0) {
    total *= num;
    num -= 1;
  }

  return total;
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
