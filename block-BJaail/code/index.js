class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

}
class UI {
    addBook(book) {
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#' class='delete'> X <a></td>
    `;
        list.appendChild(row);
    };

    showAlert(message, className) {
        const div = document.createElement('div');
        const bookForm = document.getElementById('book-form');
        const container = document.querySelector('.container');
        div.innerHTML = message;
        div.className = `alert ${className}`;
        container.insertBefore(div, bookForm);

        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteBook(target) {
        if (target.className === 'delete') {
            console.log(target.parentElement.parentElement);
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('author').value = '';
        document.getElementById('title').value = '';
        document.getElementById('isbn').value = '';
    }
}
//Add to local Storage

class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') == null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);

        localStorage.setItem('books', JSON.stringify(books))
    }

    static displayBooks() {
        const books = Store.getBooks();
        console.log(books);
        books.forEach(function (book) {
            const ui = new UI;

            // Add book to UI
            ui.addBook(book);
        });

    }

    static deleteBook(isbn) {
        const books = Store.getBooks();
        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));

    }

}
document.addEventListener('DOMContentLoaded', Store.displayBooks);
//add Book
document.querySelector('#book-form').addEventListener(
    'submit', (e) => {
        //get values from form
        const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value;
        //create Book
        const book = new Book(title, author, isbn);
        //create UI
        const ui = new UI();
        console.log(ui);
        if (title === '' || author === '' || isbn === '') {
            ui.showAlert('Please Fill all Fields', 'error');
        } else {

            //add book list
            ui.addBook(book);
            //add to ls
            Store.addBook(book);
            //show book added
            ui.showAlert('Book Added', 'success');
            //clear fields
            ui.clearFields();

        }

        e.preventDefault();

    }

)

//delete book
document.getElementById('book-list').addEventListener('click', (e) => {
    // console.log(e.target);
    const ui = new UI();
    ui.deleteBook(e.target);
    //delete Book
    console.log(e.target.parentElement.previousElementSibiling.textContent)

    Storage.deleteBook(e.target.parentElement.previousElementSibiling.textContent)

    //show Message
    ui.showAlert('Book Removed', 'success');

    e.preventDefault();
})