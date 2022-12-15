import { Library } from "./data/library.js";
import {FormBook} from "./ui/FormBook.js";
import { FormBookPages } from "./ui/FormBookPages.js";
import { ListBooks } from "./ui/listBooks.js";
import { FormAuthor } from "./ui/FormAuthor.js";

const listAllBooks = new ListBooks("allBooks");
const listBooksByPages = new ListBooks("listBooksPages");
const listBooksByAuthor = new ListBooks("listBooksByAuthor");

const sectionElements = document.querySelectorAll("section");
const sectionAddBook = document.querySelector(".addBook");


/////
const library = new Library();
const ULSTYLE = "ulstyle";
const MIN_YEAR = 1980;
const MAX_YEAR = new Date().getFullYear();
const MIN_PAGES = 50;
const MAX_PAGES = 2000;

////
sectionAddBook.style.display = "none";

const bookForm = new FormBook ({idForm: "form-book", idPublishData: "publish-data", idPagesInput: "input-pages", 
maxPages: MAX_PAGES, maxYear: MAX_YEAR, minPages: MIN_PAGES, minYear: MIN_YEAR  });
bookForm.onAddBook(book => library.addBook(book));

const bookFormPages =new FormBookPages ({idForm: "setPages", idFromInput: "inputPagesFrom", idToInput: "inputPagesTo"});
bookFormPages.selectBooksByPages((objFromToPages) => {
    const books = library.getBooksByPages(objFromToPages.fromPage, objFromToPages.toPage);
    console.log(books);
    listBooksByPages.showBooks(books);    
});

const bookFormAuthor = new FormAuthor ({idForm: "setAuthor", idInputAuthor: "inputAuthor"});
bookFormAuthor.selectBooksByAuthor(author => {
    const books = library.getAuthorBooks(author);
    listBooksByAuthor.showBooks(books);
});
/////
function showBooks(index) {
    sectionElements.forEach(section => section.hidden = true);
    sectionElements.forEach(elem => elem.classList.remove(ULSTYLE));
    sectionElements[index].hidden = false;
    sectionAddBook.style.display = "none";
    switch (index) {
        case (0):
            sectionAddBook.style.display = "flex";
            break;
        case (1):
            showDetailsSection(index);
            listAllBooks.showBooks(library.getAllBooks());
            break;
        case (2):
            showDetailsSection(index);
            break;
        case (3):
            showDetailsSection(index);
            break;
    }

}
/////////
function showDetailsSection(index) {
    sectionElements[index].hidden = false;
    sectionElements[index].classList.add(ULSTYLE);
}

window.showBooks = showBooks;
