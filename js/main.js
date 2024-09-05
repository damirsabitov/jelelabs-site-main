const button = document.querySelector('.menu-button');
const navList = document.querySelector('.mobile');

// Add an event listener to the button for mousedown event
button.addEventListener('mousedown', (e) => {
  e.preventDefault(); // Prevent default touch behavior
  // Toggle the 'clicked' class on the button
  button.classList.toggle('clicked');

  // Toggle the 'show' class on the nav list
  navList.classList.toggle('show');
});

// Add an event listener to the document for mouseup event
document.addEventListener('mouseup', (e) => {
  // Check if the click is not on the button or the nav list
  if (!button.contains(e.target) && !navList.contains(e.target)) {
    // Remove the 'clicked' class from the button
    button.classList.remove('clicked');

    // Remove the 'show' class from the nav list
    navList.classList.remove('show');
  }
});

// Получаем все ссылки в меню
const navLinks = document.querySelectorAll('.nav__link');

// Функция, которая удаляет класс active у всех ссылок
function removeActiveClass() {
  navLinks.forEach((link) => {
    link.classList.remove('active');
  });
}

// Функция, которая добавляет класс active к кликнутой ссылке
function addActiveClass(e) {
  removeActiveClass();
  e.target.classList.add('active');
}

// Вызываем функцию при клике на ссылку
navLinks.forEach((link) => {
  link.addEventListener('click', addActiveClass);
});