// ------------- main and nav variables ------------
const navLinks = document.querySelectorAll('.nav-link');
const headline = document.querySelector('h1');
const sections = document.querySelectorAll('.section');

// ------------- book grid section -----------------
const booksGrid = document.getElementById('books-grid');

// ------------- new book form section -------------
const form = document.querySelector('form');
const newBookTitle = document.getElementById('new-title');
const newBookAuthor = document.getElementById('new-author');
const addBookBtn = document.getElementById('add-book');

// ------------- functions -------------------------
const renderContent = (currSection) => {
  sections.forEach((section) => section.classList.remove('active'));
  document.querySelector(`${currSection}`).classList.add('active');
  if (currSection === '#books-grid') {
    headline.textContent = 'All awesome books';
  } else if (currSection === 'form') {
    headline.textContent = 'Add a new Book';
  } else {
    headline.textContent = 'Contact Information';
  }
};

export {
  navLinks, headline, sections,
  booksGrid, form, newBookTitle,
  newBookAuthor, addBookBtn, renderContent,
};