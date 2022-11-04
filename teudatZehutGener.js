function generateRandomTeudatZehut () {

    let arrTZ = getArrayTZ ();
    let arrTZforSum = arrDigitsForSum(arrTZ);
    let sum = sumElemArray(arrTZforSum);
    arrTZ [8] = getControlDigit(sum);
    let stringTZ = arrTZ.join ('');

    return stringTZ;
}

console.log (generateRandomTeudatZehut());
function getArrayTZ () {
    let arrTZ = [];
    for(let i = 0; i < 8; i++) {
        arrTZ [i] = Math.round(Math.random() * 9);
    }
    return arrTZ;
}

function arrDigitsForSum (array) {
    array = array.map((element, index) => index % 2 == 0 ? element : sumElemDigits (element) );
    return array;
}

function sumElemDigits (element) {
    if (element*2 >= 10) {
        element = Array.from (String(element*2), Number);
        element = element.reduce((res, elem) => res + elem, 0);
    } else element *= 2;
return element;
}
//console.log (getArrayTZ ());

 function sumElemArray (array) {
    let sum = array.reduce((res, cur) => res + cur, 0);
     //console.log (sum);
    return sum;
 }

 function getControlDigit (sum) {
    let digit = 0;
    let rem = sum % 10;
    return rem > 0 ? digit = 10 - rem : digit;

 }
// let a = getArrayTZ ();
// console.log (a);
// console.log (sumElemArray(a));