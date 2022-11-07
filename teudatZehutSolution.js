
function checkTeudatZehut (teudatStrNumber){
let arrayForSum = getArrayForSum(teudatStrNumber);
let sum = getSum (arrayForSum);
return sum%10 == 0;
}

function getArrayForSum(teudatStrNumber){
    let array = Array.from(teudatStrNumber);
    /*let res = [];
    for(let i = 0; i < array.length; i++){
        res[i] = getCurrentNumber(array[i], i);
    }*/
    return array.map(getCurrentNumber);
}

function getCurrentNumber (element, index) {
    return index % 2 == 0 ? +element : getNumberOddIndex (element);
}

function getNumberOddIndex (element) {
    let res = element * 2;
    if (res > 9) {
        res -= 9;
    }
    return res;
}

function getSum (array) {
   /* let res = 0;
    for (let i = 0; i < array.length; i++){
        res += array[i];
    }
    return res;*/
    return array.reduce(function (res , cur) {
        return res + cur;
    }, 0)
}