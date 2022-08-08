/* eslint-disable max-classes-per-file */
import { inputAuthor, inputTitle, submitBtn } from './elements.js';
import { Book } from './book.js';
import { BookSet } from './bookset.js';
import { DateTime } from './luxon.js';

// Book Constructor function (representing a book).
const coll = new BookSet();
if (localStorage.getItem('bookItems')) {
  const localBooks = JSON.parse(localStorage.getItem('bookItems'));
  localBooks.bookColl.forEach((item) => {
    coll.add(new Book(item.title, item.author));
  });
}
submitBtn.addEventListener('click', () => {
  coll.add(new Book(inputTitle.value, inputAuthor.value));
});

const dateVisit = document.querySelector('.userDate');
dateVisit.innerHTML = DateTime.now().toString();

// Navigation Bar
const listLink = document.querySelector('.books');
const booksAddition = document.querySelector('.bookAdded');
const contactUs = document.querySelector('.contactUs');
const navigator = document.querySelectorAll('.book-nav');
navigator.forEach((n, index) => n.addEventListener('click', () => {
  navigator.forEach((link, number) => {
    if (number === index) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  if (index === 0) {
    listLink.classList.remove('hidden');
    booksAddition.classList.add('hidden');
    contactUs.classList.add('hidden');
  } else if (index === 1) {
    listLink.classList.add('hidden');
    booksAddition.classList.remove('hidden');
    contactUs.classList.add('hidden');
  } else {
    listLink.classList.add('hidden');
    booksAddition.classList.add('hidden');
    contactUs.classList.remove('hidden');
  }
}));