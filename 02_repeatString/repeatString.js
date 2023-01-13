const repeatString = function(string, num) {
    if ((num < 0)) {
        return "ERROR";
    }

    let stringArray = [];

    for (let i = 0; i < num; i++) {
        stringArray.push(string);
    }

    let newString = stringArray.join("");
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
