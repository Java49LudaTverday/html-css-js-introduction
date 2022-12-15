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

