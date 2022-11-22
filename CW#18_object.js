function getAddressKey () {
    return 'app';
}
const person = {id: 123, first_name: 'Vasya', last_name: 'Petrov',
year: 2000, address: {city: 'Lod', street: 'Skolov', app: 100}
};
const yearExp = "ye" + "ar";
console.log(person.yearExp);//undefined
 console.log(person[yearExp]); //2000
 const personArr = [123, 'Vasya', 'Petrov', 2000, ['Lod', 'Sokolov', 100]];
console.log(personArr[3]);//2000
const name1 = "first_name";
const name2 = getAddressKey ();
// console.log(person.name);//undefined
// console.log(person[name1]);//'Vasya'
// console.log(person["first_name"]);//"Vasya"
// console.log(person.address);
// comsole.log(person.address[name2]);//100
// console.log(person.address);

function displayOccurrences(strings) {
    const occurrences = {};
    strings.forEach ( element => {
        if(occurrences[element]) {
            console.log(occurrences);
            occurrences[element]++;
            //console.log(occurrences);
        } else {
            occurrences[element] = 1;
        }
    });
    console.log(occurrences);
    console.log(Object.entries(occurrences));
    const occurrencesAr = Object.entries(occurrences);
    occurrencesAr.sort((elem, elem2) => elem2[1]-elem[1]);
    console.log(occurrencesAr);

}
const strings = ["lmn", 'abc', 'a', 'lmn','lmn', 'abc'];
displayOccurrences(strings);
 const x = {};
 const string = "abc";
 x[string] = 1;
 console.log (x);
 x[string]++;
 console.log (x);