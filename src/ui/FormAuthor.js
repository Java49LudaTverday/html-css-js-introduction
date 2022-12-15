export class FormAuthor {
    #formElement;
    #inputAuthor;
    constructor(params){
        this.#formElement = document.getElementById(params.idForm);
        this.#inputAuthor = document.getElementById(params.idInputAuthor);
    }
    selectBooksByAuthor(procesBooksAuthorFun) {
        this.#formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const author = this.#inputAuthor.value.toLowerCase();
            procesBooksAuthorFun(author);
        })
    }

}
