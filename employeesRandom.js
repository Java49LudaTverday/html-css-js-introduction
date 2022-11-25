//task 1 - createRandomEmployees
const arrRandomEmployees = []; 
const arrayId = [];

function createRandomEmployees (nEmployees, idDigits, minSalary, maxSalary) {     
   while (nEmployees) {
        nEmployees--;
        let name = "name" + idRandom(idDigits).toString();
        let salary = getRandomValue (minSalary, maxSalary);  
        let birthYear =  getBirthYear ();
        arrRandomEmployees[nEmployees] = createEmployee (name, birthYear, salary);        
    } 
    return arrRandomEmployees;
}
function idRandom (idDigits) {
    let idMin = 10**(idDigits-1);
    let idMax = 10**(idDigits)-1;
    let id = getRandomValue(idMin, idMax);
    /*while (arrayId[id] == id) { 
        id = getRandomValue(idMin, idMax);
    }
    arrayId[id] = id;*/
    return checkId(id, idMin, idMax);
}
function getRandomValue (minValue, maxValue){
   return maxValue - Math.trunc(Math.random()* (maxValue-minValue));
}
function getBirthYear () {
    let minYear = 2006;
    let maxYear = 1960;
    return getRandomValue(minYear,maxYear);
}
function createEmployee (name, birthYear, salary) {
    return {name, birthYear, salary};
}
function checkId (id, idMin, idMax) {
    while (arrayId[id] == id) { 
        id = getRandomValue(idMin, idMax);
    }
    arrayId[id] = id;
    return id;
}

createRandomEmployees (10, 3, 10000, 20000);
console.log (`Employees of company XXX:`);
console.log (arrRandomEmployees);

//task 2 Average Age all Employees
console.log('**********************************************');
function getAverageAge (arrEmployees) {
    let age = 0;
    let ageAverage =  arrEmployees.reduce( (ageAverage, employee ) => {
        age = getAgeEmployee(employee);
        //console.log(age);
        ageAverage += (age/arrEmployees.length);
        return ageAverage;
    }, 0)
    return Math.floor(ageAverage);
}

function getAgeEmployee (employee) {
    return new Date().getFullYear() - employee.birthYear;
}

console.log (`Average age of employees: ${getAverageAge(arrRandomEmployees)}`);

//task 3 sort salary from/to
console.log('**********************************************');

function getEmployeesBySalary (arrEmployees, salaryFrom, salaryTo) {
    let arSalaryFromTo = arrEmployees.filter(employee =>
        employee.salary >= salaryFrom && employee.salary <= salaryTo);
    return arSalaryFromTo.sort( (empl1, empl2) => empl1.salary > empl2.salary ? 1 : -1);
}

let salaryFrom = 13000;
let salaryTo = 18000;
console.log (`Employees whith salary from ${salaryFrom} to ${salaryTo}:`);
console.log( getEmployeesBySalary(arrRandomEmployees, salaryFrom, salaryTo));