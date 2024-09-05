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

// Удаляем класс active у всех ссылок при клике на любую ссылку
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    navLinks.forEach((l) => l.blur()); // Удаляем фокус с других ссылок
  });
});