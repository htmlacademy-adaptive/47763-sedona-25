const toggleButton = document.querySelector(".main-header__toggle-button");
const mainMenu = document.querySelector(".main-nav__list");
const backdrop = document.querySelector(".backdrop");

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('main-header__toggle-button--open');
  mainMenu.classList.toggle('main-nav__list--open');
  backdrop.classList.toggle('backdrop--show');
})

backdrop.addEventListener('click', () => {
  toggleButton.classList.remove('main-header__toggle-button--open');
  mainMenu.classList.remove('main-nav__list--open');
  backdrop.classList.remove('backdrop--show');
})
