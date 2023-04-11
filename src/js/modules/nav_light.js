export function navLight() {
  document.querySelector('.header__burger').addEventListener('click', function () { 
    this.classList.toggle('active');
    document.querySelector('.nav__menu').classList.toggle('active');
    document.querySelector('body').classList.toggle('_lock');
  });
}
