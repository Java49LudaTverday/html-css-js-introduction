// task 3 copy length elements
function arrayCopy (src, srcPos, dst, dstPos, length) {//after webinar
    let srcPartCopy = src.slice(srcPos, length+srcPos);
     srcPartCopy.map((elem) =>  {
         dst.splice (dstPos, 0, elem);
         dstPos++;
     })
     return dst;
 }

let ar1 = [10, 20, 30, 40, 50, 10, 20, 30];
let ar2 = [7, 6, 8, 9, 0];
console.log (`Task 3 ${'\n'}Befor: [${ar2}]  ${'\n'}After: [${arrayCopy (ar1, 3, ar2, 0, 2)}]${'\n'}`);

// task 4 moves element at a given index on a given offset position
function moveElemInArray (array, index, offset) {
    array.splice(index+offset, 0, array.splice (index,1));
    return array;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let index = 4;
let offset = numbers.length;
console.log (`Task 4 ${'\n'}Source array: [${numbers}] ${'\n'}position: ${offset}  from index: ${index} ${'\n'}Given array: [${moveElemInArray(numbers, index, offset)}]`);
/*function arrayCopy (src, srcPos, dst, dstPos, length) {//befor webinar
   let src1 = src.slice(srcPos, length+srcPos);
    //console.log (src1);
    for (let i = 0; i<src1.length; i++) {
        dst.splice (dstPos, 0, src1 [i]);
        dstPos++;
    }
    return dst;
}*/