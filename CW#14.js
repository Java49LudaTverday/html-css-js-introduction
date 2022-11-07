['12345', '465789', '8924' , 'fhuiw'].forEach( function (e) {
    console.log(`teudat zehut: ${e}, return of method chackTeudatZehut: ${checkTeudatZehut(e)}`);
})
if(teudatStrNumber.length != 9 || isNaN(teudatStrNumber)){// it`s not correct; will return just one time;
    return false;
}

let res = false;
if (teudatStrNumber.length == 9 && !isNaN(teudatStrNumber)) {
    let arrayForSum = getArrayForSum(teudatStrNumber);
let sum = getSum (arrayForSum);
res = sum % 10 == 0;
}
return res;

