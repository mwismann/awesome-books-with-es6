import {
  booksGrid, form, newBookTitle, newBookAuthor,
} from './utilities.js';

export default class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

    static books = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];

    addBook() {
      if (newBookTitle.value.trim() === '' || newBookAuthor.value.trim() === '') {
        return;
      }

      Book.books.push(this);
      localStorage.setItem('books', JSON.stringify(Book.books));

      newBookTitle.value = '';
      newBookAuthor.value = '';
      this.renderBooksGrid();
      form.classList.remove('active');
      booksGrid.classList.add('active');
    }

    removeBook(id) {
      Book.books = Book.books.filter((book) => book.id !== +id);
      localStorage.setItem('books', JSON.stringify(Book.books));
      this.renderBooksGrid();
    }

    renderBooksGrid() {
      booksGrid.innerHTML = '';
      Book.books.forEach((book) => {
        booksGrid.insertAdjacentHTML('beforeend',
          `<article class="book-item">
            <div class="item-meta">
              <h2>"${book.title}"</h2>
              <span>by</span>
              <p>${book.author}</p>
            </div>
              <button class="remove-book btn" data-id="${book.id}">Remove</button>
            </article>`);
      });

      // ------------ remove book --------------------
      const removeBookBtn = document.querySelectorAll('.remove-book');

      // ------------ event listener -----------------
      removeBookBtn.forEach((btn) => btn.addEventListener('click', (e) => {
        this.removeBook(e.target.dataset.id);
      }));
    }
}