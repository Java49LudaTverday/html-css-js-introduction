const inputElements = document.querySelectorAll(".form-class [name]");
const YEAR_MIN = 1959;
const YEAR_MAX = new Date().getFullYear();
const ACode = "A".charCodeAt();
function onSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    const employee = Array.from(inputElements).reduce((res, cur) => {
        res[cur.name] = cur.value;
        return res;
    }, {});
    console.log(employee);
}
function onChange(event) {
    let nameElement = event.target.name;
    switch (nameElement) {
        case "employee-name":
            if (checkisValidName(event) == false) {
                errorEvent(event, nameElement);
            }
            break;
        case "email":
            if (checkisValidEmail(event) == false) {
                errorEvent(event, nameElement);
            }
            break;
        case "birthDate":
            if (checkisValidBirthDate(event) == false) {
                errorEvent(event, nameElement);
            }
            break;
        case "salary":
            if (event.target.value < 1000 || event.target.value > 40000) {
                errorEvent(event, nameElement);
            }
            break;
    }   
}
function errorEvent(event, nameElement) {
    event.target.value = '';
    document.getElementById(`error_${nameElement}`).innerHTML = `*Enter relevant ${nameElement}`;
    timeoutError(nameElement);
}

function timeoutError(nameElement) {
    setTimeout(() => {
        document.getElementById(`error_${nameElement}`).innerHTML = ``;
    }, 3000)
}
function checkisValidName(event) {
   let res = true;
    let arrayInput = Array.from(event.target.value);
   /*let res = arrayInput.every(letter => {
        let charCodeLet = letter.charCodeAt(0);
        (isNaN(+letter)|| (charCodeLet >=ACode && charCodeLet< ACode+26) || (charCodeLet>(ACode+33)&&charCodeLet<=("z".charCodeAt()))) 
    })*/
   arrayInput.forEach(elem => {
        let number = +elem;
        if (!isNaN(number)) {
            res = false;
        }
    })
    return res;
}

function checkisValidEmail(event) {
    let res = false;
    let arrayInput = Array.from(event.target.value);
    arrayInput.forEach(elem => {
        let at = "@";
        if (elem === at) {
            res = true;
        }
    })
    return res;
}
function checkisValidBirthDate(event) {
    let res = true;
    let arrayInput = Array.from(event.target.value);
    let year = arrayInput.slice(0, 4).join('');
    console.log(year);
    if (year < YEAR_MIN || year > YEAR_MAX) {
        res = false;
    }
    return res;
}

 /* if (nameElement == "employee-name") {
         if (checkisValidName(event) == false) {
             errorEvent (event, nameElement);
         }
     }
     if (nameElement == "email") {
         if (checkisValidEmail(event) == false) {
             errorEvent(event, nameElement);
         }
     }
     else if (nameElement == "salary") {
         if (event.target.value < 1000 || event.target.value > 40000) {
             errorEvent(event, nameElement);
         }
     }*/