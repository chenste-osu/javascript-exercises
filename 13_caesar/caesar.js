const caesar = function(rawstring, shift) {
    let encrypt = []
    shift = shift % 26;

    for (char of rawstring) {
        let unicode = char.charCodeAt(0);
        // console.log('unicode', unicode, 'char', char);
        
        // uppercase
        if (96 < unicode && unicode < 123) {
            let newcode = unicode + shift;
            // right shift
            if (shift > 0) {
                if (newcode > 122) {
                    newcode -= 26;
                } 
                encrypt.push(String.fromCharCode(newcode));
            }
            // left shift 
            else if (shift < 0) {
                if (newcode < 97) {
                    newcode += 26;
                } 
                encrypt.push(String.fromCharCode(newcode));
            } 

            else {
                encrypt.push(char);
            }

        // lowercase
        }
        else if (64 < unicode && unicode < 91) {
            let newcode = unicode + shift;
            // right shift
            if (shift > 0) {
                if (newcode > 90) {
                    newcode -= 26;
                } 
                encrypt.push(String.fromCharCode(newcode));
                
            }
            // left shift 
            else if (shift < 0) {
                if (newcode < 65) {
                    newcode += 26;
                }
                encrypt.push(String.fromCharCode(newcode));
            }
            else {
                encrypt.push(char);
            }
        }

        else {
            encrypt.push(char);
        }

        // encrypt.push(unicode);
        // encrypt.push(String.fromCharCode(unicode));        
    }
    return encrypt.join('');
};

// console.log(caesar(' World!', 5));
// console.log(caesar('A', 1));

// uppercase 97-122

// lowercase 65-90

// Do not edit below this line
module.exports = caesar;
