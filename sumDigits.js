function sumDigits (number){
    if (number<0){
        number *= -1;
    }
    let sum = 0;
    while (number>0){
        sum += number%10;
        number = Math.trunc (number/10);
    }
    return sum;
}
let number = 123;
console.log ("Number = "+ number +"  SumDigits = " + sumDigits(number));
number = -123;
console.log ("Number = "+ number +"  SumDigits = " + sumDigits(number));
number = -100;
console.log ("Number = "+ number +"  SumDigits = " + sumDigits(number));