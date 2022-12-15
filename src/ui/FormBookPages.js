import { showErrorMessage } from "./errorMessage.js";
export class FormBookPages {
    #formElement;
    #inputFromPages;
    #inputToPages;
    #fromPage;
    #toPage;
    constructor(params){
        this.#formElement = document.getElementById(params.idForm);
        this.#inputFromPages = document.getElementById(params.idFromInput);
        this.#inputToPages = document.getElementById(params.idToInput);
        this.validFromPages();
        this.validToPages();
    }
    selectBooksByPages(procesBooksByPagesFun) {
        this.#formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const objFromToPages = {fromPage: this.#fromPage, toPage: this.#toPage};
            procesBooksByPagesFun(objFromToPages);
        })
    }
    validFromPages() {
        this.#inputFromPages.addEventListener("change", (event) =>{
            this.#fromPage = +event.target.value;
            if (this.#fromPage > this.#toPage) {
                showErrorMessage(this.#inputFromPages);
            }
        })
    }
    validToPages(){
        this.#inputToPages.addEventListener("change", (event) =>{
            this.#toPage = +event.target.value;
            if (this.#fromPage > this.#toPage) {
                showErrorMessage(this.#inputFromPages);
            }
        })        
    }    
}