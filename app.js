// const addBook = document.querySelector('.book-list');

class Book {

   constructor(title, author){

    this.title = title;
    this.author = author;

   } 
}

class Library{

    static display() {
        const StoredBooks = [
            {
                title: 'Book one',
                author: 'author1'
            },
            {
                title: 'Book two',
                author: 'author2'
            }
        ];

        const books = StoredBooks;

        books.forEach((book) => Library.addBook(book));

    }

    static addBook(book) {
        const list = document.querySelector('#bookList');

        const container = document.createElement('div');
        container.innerHTML = `
            <p>${book.title}</p>
            <p>${book.author}</p>
            <button class="delete">Remove</button>
            <hr>
        
        `;

        list.appendChild(container);
    }

    static delete(dl) {
        if(dl.classList.contains('delete')) {
            dl.parentElement.remove();
        }
    }


     // static clearFields() {
       //  document.querySelector('#title').value = '';
        // document.querySelector('#author').value = '';
     //}


}


//Display books
document.addEventListener('DOMContentLoaded', Library.display);

// add a book
document.querySelector('.book-form').addEventListener('submit',(e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;

    const book = new Book(title, author);

    Library.addBook(book);

    Library.clearFields();

});

// remove a book
document.querySelector('#bookList').addEventListener('click', (e) => {
    Library.delete(e.target)
});
