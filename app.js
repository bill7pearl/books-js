// const addBook = document.querySelector('.book-list');

class Book {

  constructor(title, author){

   this.title = title;
   this.author = author;

  } 
}

class Library{

   static display() {

       const books = BooksLocalStorage.getStorage();

       books.forEach((book) => Library.addBook(book));

   }

   static addBook(book) {
       const list = document.querySelector('#bookList');

       const container = document.createElement('table');
       container.innerHTML = `
       <tr>
           <td>${book.title}</td>
           <td>${book.author}</td>
           <td><button class="delete">Remove</button></td>
       </tr>
       `;

       list.appendChild(container);
   }

   static delete(dl) {
       if(dl.classList.contains('delete')) {
           dl.parentElement.parentElement.remove();
       }
   }


    static clearFields() {
      document.querySelector('#title').value = '';
       document.querySelector('#author').value = '';
   }


}


class BooksLocalStorage {

   static getStorage(){
       let books;
       if(localStorage.getItem('books') === null){
           books = [];
       }
       else{
           books = JSON.parse(localStorage.getItem('books'));
       }
       return books;
}

   static addBookStorage(book){
       const books = BooksLocalStorage.getStorage();
       books.push(book)
       localStorage.setItem('books',JSON.stringify(books));
   }

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

