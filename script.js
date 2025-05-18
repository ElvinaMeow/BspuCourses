const hamburgerMenu = document.querySelector('.hamburger-menu');
const navRight = document.querySelector('.nav-right');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navRight.classList.toggle('active');
});