const fibonacci = function(place) {
    if (typeof place == 'string') {
        place = parseInt(place);
    }
    if (place < 0) {
        return 'OOPS';
    }

    for (let i = 0; i < place + 1; i++) {
        answer = recur(i);
    }

    return answer;

    function recur(num) {
        if (num < 2) {
            return num;
        }
        else {
            return recur(num - 1) + recur(num - 2);
        }
    }
};

console.log(fibonacci(25));

// Do not edit below this line
module.exports = fibonacci;
