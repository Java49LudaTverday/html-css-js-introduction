const TIME_OUT = 3500;
export function showErrorMessage(elementEvent) {    
    const errorMessageElem = document.getElementById(`error_${elementEvent.name}`); 
    console.log(elementEvent.name)
    errorMessageElem.innerHTML = `*enter correct ${elementEvent.name}`;
    timeOutErrorMessage(errorMessageElem);
    elementEvent.value = "";
}
function timeOutErrorMessage(errorMessageElem) {
    setTimeout(() => {
        errorMessageElem.innerHTML = "";
    }, TIME_OUT);
}
