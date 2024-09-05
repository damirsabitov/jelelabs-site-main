const button = document.querySelector('.menu-button');
const navList = document.querySelector('.mobile');
const navLinks = document.querySelectorAll('.nav__link');

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
    // Не удаляем классы, если клик был на ссылке
    if (!e.target.classList.contains('nav__link')) {
      // Remove the 'clicked' class from the button
      button.classList.remove('clicked');

      // Remove the 'show' class from the nav list
      navList.classList.remove('show');
    }
  }
});

// Добавляем обработчик клика на ссылки
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // Удаляем класс active у всех ссылок
    navLinks.forEach((l) => l.classList.remove('active'));
    // Добавляем класс active к кликнутой ссылке
    e.target.classList.add('active');
  });
});