// remove duplicates from an Array with the Spred Operator and Set
let array = [1,2,2,3,3,4,4];
array = [...new Set(array)];
console.log(array);

