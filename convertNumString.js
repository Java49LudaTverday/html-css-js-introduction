// Solution:
function getSymbol (digit) {
    let codeA='a'.charCodeAt();
    return digit < 10 ? digit.String.fromcharCode(codeA+digit-10);
}
function fromNumberToString (number, base){
    number = Math.abs(number);
    let res = "";
    do{
        let digit = number % base;
        let sym = getSymbol (digit);
        res = sym + res;
        number = Math.tranc (number/10);
    } while (number != 0);
    return res;
}

// 2)
function fromStringToNumber1 (string, base){
    // "". get all function (prompts);
    string = string.toLowerCase ();
    let result = 0;
    for (let i = 0; string.length; i++) {
        let code = getCode (string [i]);
        result = result * base + code;
    }
}
function getCode (symbole){
    let codeA = 'a', charCodeAt();
    let res = symbole < '9' ? +symbole : symbole.charCodeAt() - codeA + 10;
    return res;
}



// convert from number to String in each numeral system (max 36)
function numberToString (number, base) {
    number = Math.abs(number);
    number = Math.trunc (number);
    let res = "";
    if (isNaN(number) || base  > 36 || base <= 0) {
        return res = 'Error';
    }
    do {
        let rem = number % base;
        if( rem > 9){
            rem = String.fromCharCode(97 + (rem - 10));
        }
        res = rem + res;
        number = Math.trunc (number / base);
    } while (number != 0);
    return res;
}

console.log (numberToString(900550,36));
console.log (numberToString(46016237,36));
console.log (numberToString(1019134,36));
console.log (numberToString(11483,2));

// convert from String to number

function fromSrtingToNumber (string, base) {
    let res = 0;
    if(typeof string == 'number' || base  > 36 || base <= 0) {
        return res = 'Error';
    }    
   let code = 0;
    for (let i = 0; i < string.length; i++) {        
        if (+string[i]<=9){
             code = +string[i];  
        } else{
            code = (string.charCodeAt(i)-87);
        }
        res = res * base + code; 
    }
    return res;
}

console.log (fromSrtingToNumber('java', 36));
console.log (fromSrtingToNumber('react', 36));
console.log (fromSrtingToNumber('luda', 36));
console.log (fromSrtingToNumber('10110011011011', 2));

