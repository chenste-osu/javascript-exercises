const palindromes = function (word) {
    word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
        .replace(/\s+/g, "");
    word = word.toLowerCase();

    // console.log(word);

    let left = 0;
    let right = word.length - 1;

    while (left < right) {
        // console.log(left);
        // console.log(word[left]);
        // console.log(right);
        // console.log(word[right]);

        if (word[left] != word[right]){
            return false
        }
        left++;
        right--;
    }

    return true;
};

palindromes('Animal loots foliated detail of stool lamina.');

// Do not edit below this line
module.exports = palindromes;
