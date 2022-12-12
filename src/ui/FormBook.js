import { showErrorMessage } from "./errorMessage.js";
export class FormBook {
    #formElement;
    #inputElements;
    #inputPublishDataElem;
    #inputPagesElem;
    //#dataErrorElem;
    //#pagesErrorElem;
    #minPages;
    #maxPages;
    #minYear;
    #maxYear;
    constructor(params) {
        this.#formElement = document.getElementById(params.idForm);
        this.#inputElements = document.querySelectorAll(`#${params.idForm} [name]`);
        this.#inputPublishDataElem = document.getElementById(params.idPublishData);
        this.#inputPagesElem = document.getElementById(params.idPagesInput);
        this.#maxPages = params.maxPages;
        this.#maxYear = params.maxYear;
        this.#minPages = params.minPages;
        this.#minYear = params.minYear;
        this.onClose();
    }
    onAddBook(processBookFun) {
        this.#formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            console.log("submitted");
            const arrBookData = Array.from(this.#inputElements);
            const book = arrBookData.reduce((newBook, field) => {
                newBook[field.name] = field.value;
                return newBook;
            }, {})
            console.log(book);
            processBookFun(book);
            return book;
        }
        )
    }
    onClose(){
        this.#inputPublishDataElem.addEventListener("change", () =>
        this.isValidPublishData(this.#inputPublishDataElem));
        this.#inputPagesElem.addEventListener("change", () =>
        this.isValidNumberOfPages(this.#inputPagesElem)); //event.target
    }
    isValidPublishData(elementEvent) {
        const value = elementEvent.value;
        const year = value.slice(0, 4);
        console.log(year);
        if (year < this.#minYear || year > this.#maxYear) {
            showErrorMessage(elementEvent);
        }
    }
    isValidNumberOfPages(elementEvent) {
        const value = elementEvent.value;
        console.log(value);
        if (value < this.#minPages || value > this.#maxPages) {
            showErrorMessage(elementEvent);
        }
    }
}

/////from main:
/*
const elementsInput = document.querySelectorAll(".form-book [name]");
function onAddBook(event) {
    event.preventDefault();
    const arrBookData = Array.from(elementsInput);
    const book = arrBookData.reduce((newBook, field) => {
        newBook[field.name] = field.value;
        return newBook;
    }, {})
    console.log(book);
    library.addBook(book);
    return book;
}
////////Validation:
function onChange(event) {
    const elementEvent = event.target;
    if (elementEvent.name === "publish_data") {
        isValidPublishData(elementEvent);
    }
    if (elementEvent.name === "pages") {
        isValidNumberOfPages(elementEvent);
    }
    // if (elementEvent.name === "pageFrom"){
    //     FROM_PAGE == +elementEvent.value;        
    // }
    // if (elementEvent.name === "pageTo"){
    //     TO_PAGE == +elementEvent.value;
    //     isValidFromToPages(elementEvent,FROM_PAGE,TO_PAGE);
    // }
}
function isValidPublishData(elementEvent) {
    const value = elementEvent.value;
    const year = value.slice(0, 4);
    console.log(year);
    if (year < MIN_YEAR || year > MAX_YEAR) {
        showErrorMessage(elementEvent);
    }
}
function isValidNumberOfPages(elementEvent) {
    const value = elementEvent.value;
    console.log(value);
    if (value < MIN_PAGES || value > MAX_PAGES) {
        showErrorMessage(elementEvent);
    }
}*/