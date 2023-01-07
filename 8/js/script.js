let mainHeaderMenu = document.querySelector('.main-header__menu');
let mainHeaderToggle= document.querySelector('.main-header__toggle');
let mainNav = document.querySelector('.main-nav');

mainHeaderMenu.classList.remove('main-nav--nojs');

mainHeaderToggle.addEventListener('click',  function() {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
  }
});
