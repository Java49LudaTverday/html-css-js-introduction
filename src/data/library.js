export class Library {
    constructor() {
        this.books = [];
    }
    addBook (book) {
      this.books.push(book);
    }
    getAllBooks () {
        return this.books;
    }
    getBooksByPages (fromPages, toPages){
        return this.books.filter(book => book.pages>=fromPages && book.pages<toPages);
    }
    getAuthorBooks (author) {
        return this.books.filter(book => book.author === author);
    }
}
