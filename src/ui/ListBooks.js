export class ListBooks { 
    #idListElement;
    constructor(idList){
        this.#idListElement = document.getElementById(idList);
        }
        showBooks (books){
            this.#idListElement.innerHTML = addLIBook(books);
        }
}
function addLIBook(books) {
    console.log(books);
    const arrLIBooks = books.map(book => 
        `<ul class="list-books">
        <li>Title: ${book.title}</li>
        <li>Author: ${book.author}</li>
        <li>Genre: ${book.genre}</li>
        <li>Number of pages: ${book.pages}</li>
        </ul>`
    )
    return arrLIBooks.join('');
}