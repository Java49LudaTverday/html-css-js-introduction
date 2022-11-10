// task 1: find min max value
let numbers = [-4, 8, -9, 10, -5, -1, 0];

function minMax (numbers) {
    let arMinMax = numbers.reduce (
    (arMinMax,elem) => { 
        elem < arMinMax[0] ? arMinMax[0] = elem : arMinMax[0];     
        elem > arMinMax[1] ? arMinMax[1] = elem : arMinMax[1];
        return arMinMax;  
        }, [numbers[0], numbers[1]]);
    return arMinMax;
}
console.log (`Array: [${numbers}]${'\n'}Array min/max: [${minMax(numbers)}]${'\n'}`);

// task 2 delet element with prefix
function deleteWithPrefix (strings, prefix) {
    let arrRes = [];
    arrRes = strings.filter(string => string.slice(0,prefix.length) !== prefix);
    return arrRes;
}

let strings = ['abc', 'acb', 'sdx', 'abc_d', 'abc_f', 'ert', 'abc_3', '123'];
let prefix = 'a'
console.log(`Befor: [${strings}]${'\n'}Deleted prefix: ${prefix}${'\n'}After: [${deleteWithPrefix(strings, prefix)}]${'\n'}`);

//task 3 sort array even/odd
function getSortedEvenOdd (numbers) {
    let sortArr = numbers.slice(0,numbers.length);
     sortArr.sort(
         (el1, el2) => el1%2==0 && el1<el2 ? -1 : el2%2==0 ? 1 : el2-el1 );
    return sortArr;
}

let numbers1 = [9,1,2,3,5,7,6,4,8, -1,0,-2, -3] ;
console.log(`Befor: [${numbers1}]${'\n'}After: [${getSortedEvenOdd(numbers1)}]`);

/*function getSortedEvenOdd (numbers) { // solution#2 for me
    let evenArr = numbers.filter(number => number%2 == 0).sort((num1, num2) => num1-num2);
    let oddArr = numbers.filter(number => number%2 != 0).sort((num1,num2) => num2-num1);
    oddArr.splice(0,0, ...evenArr);
    console.log(numbers);
    return oddArr;
}*/
