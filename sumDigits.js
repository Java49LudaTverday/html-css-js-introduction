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

//Solution:
function sumDigits1 (number){
    number = Math.abs(number);
    number = Math.trunc (number);
    let sum = 0;
    do{
        let digit = number%10;
        sum = sum+digit;
        number = (number-digit)/10;
    } while (number != 0);
    return sum;
}
let number1 = 123;
console.log ("Number1 = "+ number1 +"  SumDigits = " + sumDigits1(number1));