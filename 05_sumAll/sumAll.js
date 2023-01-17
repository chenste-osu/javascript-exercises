const sumAll = function(num1, num2) {
    if (!(Number.isInteger(num1) && Number.isInteger(num2))) {
        return 'ERROR';
    }

    if ((num1 < 0) || (num2 < 0)) {
        return 'ERROR';
    }

    let left = Math.min(num1, num2);
    let right = Math.max(num1, num2);
    let final = 0;

    for (let i = left; i < right + 1; i++) {
        final += i;
    }
    return final;
};

// Do not edit below this line
module.exports = sumAll;
