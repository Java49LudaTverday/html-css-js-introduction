// filter
function getEvenNumbers (numbers) {
    return numbers.filter(n => n%2 == 0);
}
let ar = [2, -10, 3, 1999];
ar.sort((a, b) => a-b);

console.log (ar);
ar = ['abc', 'a', 'lmn', 'y'];
ar.sort((a, b) => a < b ? -1: 1);
console.log (ar);
ar.sort((a, b) => a.length - b.length); // sort with length element
console.log (ar);