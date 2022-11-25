//task 1 - createRandomEmployees
const arrayId = [];

function createRandomEmployees(nEmployees, idDigits, minSalary, maxSalary, minBirthYear, maxBirthYear) {
    const arrRandomEmployees = [];
    while (nEmployees) {
        nEmployees--;
        let id = idRandom(idDigits);
        arrRandomEmployees[nEmployees] = createEmployee(id, "name" + id,
            getRandomValue(minBirthYear, maxBirthYear), getRandomValue(minSalary, maxSalary));
    }
    return arrRandomEmployees;
}
function idRandom(idDigits) {
    let idMin = 10 ** (idDigits - 1);
    let idMax = 10 ** (idDigits);
    let id = getRandomValue(idMin, idMax);
    return checkId_IsUnick(id, idMin, idMax);
}
function getRandomValue(minValue, maxValue) {
    return maxValue - Math.trunc(Math.random() * (maxValue - minValue));
}
function createEmployee(id, name, birthYear, salary) {
    return { id, name, birthYear, salary };
}
function checkId_IsUnick(id, idMin, idMax) {
    while (arrayId[id] == id) {
        id = getRandomValue(idMin, idMax);
    }
    arrayId[id] = id;
    return id;
}

const arrEmployees = createRandomEmployees(10, 3, 10000, 20000, 1950, 2006);
console.log(`Employees of company XXX:`);
console.log(arrEmployees);

console.log('**********************************************');
//task 2 Average Age all Employees

function getAverageAge(arrEmployees) {
    let ageAverage = arrEmployees.reduce((ageAverage, employee) => {
        let age = getAgeEmployee(employee);
        ageAverage += (age / arrEmployees.length);
        return ageAverage;
    }, 0)
    return Math.floor(ageAverage);
}
function getAgeEmployee(employee) {
    return new Date().getFullYear() - employee.birthYear;
}

console.log (`Average age of employees: ${getAverageAge(arrEmployees)}`);

console.log('**********************************************');
//task 3 sort salary from/to

function getEmployeesBySalary(arrEmployees, salaryFrom, salaryTo) {
    let arSalaryFromTo = arrEmployees.filter(employee =>
        employee.salary >= salaryFrom && employee.salary <= salaryTo);
    return arSalaryFromTo.sort((empl1, empl2) => empl1.salary > empl2.salary ? 1 : -1);
}

let salaryFrom = 13000;
let salaryTo = 18000;
console.log(`Employees whith salary from ${salaryFrom} to ${salaryTo}:`);
console.log(getEmployeesBySalary(arrEmployees, salaryFrom, salaryTo));

console.log('*****************************************************')
//task 4 increase salary

function increaseSalary(arEmployees, borderSalary, percent) {
    const emplLessSalary = arEmployees.filter(elem => elem.salary < borderSalary);
    return emplLessSalary.map(elem => elem.salary += elem.salary * (percent / 100));// if we want just to change a source array we should remove a 'return';
}
increaseSalary(arrEmployees, 15000, 5);
console.log('Employees after increasing salary');
console.log(arrEmployees);



// I can use this variables in the function of the task 1:
//let name = "name" + idRandom(idDigits).toString();
// let salary = getRandomValue (minSalary, maxSalary);
//let birthYear =  getRandomValue (minBirthYear, maxBirthYear);

//arEmployees.forEach(employee => {
    //     if (employee.salary < borderSalary) {
    //         employee.salary += employee.salary*(percent/100):
    //     }
    // })