/* eslint-disable max-classes-per-file */
export class BooksLocalStorage {
  static getBookStorage = () => {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBookStorage = (book) => {
    const books = BooksLocalStorage.getBookStorage();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBookStorage = (id) => {
    const books = BooksLocalStorage.getBookStorage();
    books.forEach((book, index) => {
      if (book.id === id) books.splice(index, 1);
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

export class Library {
  static display = () => {
    const books = BooksLocalStorage.getBookStorage();
    books.forEach((book) => Library.addBook(book));
  }

  static addBook = (book) => {
    const list = document.querySelector('#bookList');

    const container = document.createElement('tr');
    container.innerHTML = `
             <td>"${book.title}" by ${book.author}</td>
             <td id="hide">${book.id}</td>
             <td id="caseDelete"><button class="delete">Remove</button></td>
         `;

    list.appendChild(container);
  }

  static delete = (dl) => {
    if (dl.classList.contains('delete')) {
      dl.parentElement.parentElement.remove();
    }
  }

  static clearFields = () => {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}
