const burgerMenu = document.querySelector('.burger-menu');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burgerMenu.addEventListener('click', () => {
  burger.classList.toggle('open');
  menu.classList.toggle('open');
});
