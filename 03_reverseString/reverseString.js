const reverseString = function(string) {
    let revArray = [];
    for (let char of string) {
        revArray.unshift(char);
    }

    let revString = revArray.join("");

    return revString;
};


// Do not edit below this line
module.exports = reverseString;
