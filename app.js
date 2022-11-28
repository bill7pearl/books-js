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
        const list = document.getElementById('bookList')

        const container = document.createElement('div');
        container.innerHTML = `
            <p>${book.title}</p>
            <p>${book.author}</p>
            <butthon>Remove</butthon>
        
        `;

        list.appendChild(container);
    }

    // static clearFields() {
    //     document.querySelector('#title').value = '';
    //     document.querySelector('#author').value = '';
    // }


}


//Display books
doocument.addEventListner('DOMContentLoaded', Library.display);

// add a book
document.querySelector('#book-form').addEventListener('click',(e) => {
    console.log()
})