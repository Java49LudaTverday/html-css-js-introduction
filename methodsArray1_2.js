//task 1 inside <ul></ul>
function ulSurround (string) {
    let ulSurronString = addUlElement(arrayWithLi(string));    
   return ulSurronString;
}
function arrayWithLi (string) {   
    return string.map(addLIElement);
}
function addLIElement (element) {
    return element = '<li>'+ element + '</li>';
}
function addUlElement (string) {  //after webinar  
    string.splice (0,0, '<ul>'); 
    string.push ('</ul>');   
    return  string;
}

let string = ['abc', 'lmn', 'cd'];
console.log(`${'\n'}Task 1 ${'\n'}Before: [${string}] ${'\n'}After: [${ulSurround(string)}${'\n'}]`);

//task 2 how many times a given element encountered in an array
function countTimesGivenElem (string, givElem) { //after webinar
   return string.reduce((function (count, elem) {
        return elem == givElem ? ++count : count;
    }),0)   
}

let string1 = ['asd', 'asd', 'dfg', 'fgh', 'asd', 'asd'];
let givElem = 'asd'
console.log (`Task 2 ${'\n'}Array: [${string1}] ${'\n'}Element: '${givElem}' ${'\n'}Times: ${countTimesGivenElem(string1, givElem)} ${'\n'}`);

/*function addUlElement (string) {// befor webinar
    let array = ['<ul>'];
    for (i = 0; i < string.length; i++) {
        array.push(string[i]);
    }
    array.push('/ul>');
    return array;
}*/
/*function countTimesGivenElem (string, gElem) { //befor webinar
    let count = 0;
   string.forEach((function (elem) {
        elem == gElem ? count++ : count;
    }))
    return count;     
}*/