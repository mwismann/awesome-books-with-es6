import {
  navLinks, newBookTitle, newBookAuthor, addBookBtn, renderContent,
} from './modules/utilities.js';
import Book from './modules/classes.js';

new Book().renderBooksGrid();
navLinks.forEach((link) => link.addEventListener('click', (e) => {
  renderContent(e.target.dataset.link);
}));
addBookBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const newBook = new Book(
    Math.floor((Math.random() * Date.now())), newBookTitle.value, newBookAuthor.value,
  );
  newBook.addBook();
});