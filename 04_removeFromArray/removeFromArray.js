const removeFromArray = function(ogArray, ...targetArgs) {

    return ogArray.filter(target => !targetArgs.includes(target));
};

// Do not edit below this line
module.exports = removeFromArray;
