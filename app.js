/* eslint-disable no-plusplus */
const MainData = document.querySelector('#bookList');
/* eslint-disable no-unused-vars */
const Title = document.querySelector('#title');
const author = document.querySelector('#author');
const addButton = document.querySelector('#submit');

let BooksList = [];

function BookData() {
  MainData.innerHTML = '';
  for (let i = 0; i < BooksList.length; i++) {
    MainData.innerHTML += `
    <div>
      <p class="Title">${BooksList[i].Title}</p>
      <p class="author">${BooksList[i].author}</p>
      <button class="button" onclick="remove(${i})">remove</button>
      <hr/>
    </div>
   `;
    Title.value = '';
    author.value = '';
  }
}

function remove(index) {
  BooksList.splice(index, 1);
  BookData();
  localStorage.setItem('BooksList', JSON.stringify(BooksList));
}

window.onload = () => {
  if (localStorage.getItem('BooksList')) {
    BooksList = JSON.parse(localStorage.getItem('BooksList'));
  }
  BookData();
};

addButton.addEventListener('click', () => {
  const book = {
    Title: Title.value,
    author: author.value,
  };
  BooksList.push(book);
  BookData();
  localStorage.setItem('BooksList', JSON.stringify(BooksList));
});