import * as flsFunctions from "./modules/functions.js";
import * as navLightInit from "./modules/nav_light.js";
import * as owlCarousel from "./modules/owl.carousel.js"
document.addEventListener("DOMContentLoaded", function () {
  flsFunctions.isWebp();

  navLightInit.navLight();
	document.querySelector('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
  // --------------------------------------------------------------

  // Получаем элементы меню и кнопку
  const nav__list = document.querySelector(".nav__list");
  const nav__menu = document.querySelector(".nav__menu");
  const dd_menu = document.querySelector(".dd_menu");
  const dropdown__toggle = document.querySelector(".dropdown-toggle");
  const dropdown_menu = document.querySelector(".dropdown-menu");
  dd_menu.addEventListener("click", () => {
    dropdown_menu.classList.toggle("open");
  });
  // Скрываем элементы
  let widthItem = 0;

  function hideItemMenu() {
    const nav__item = document.querySelectorAll(".nav__list > .nav__item");
    const dd_nav__item = document.querySelectorAll(".dd_menu .nav__item");

    const nav__item__open = document.querySelectorAll(
      ".nav__list > .nav__item.open"
    );

    if (nav__item__open.length == nav__item.length) {
      dd_menu.style.display = "none";
    }
    if (nav__list.offsetWidth > nav__menu.offsetWidth) {
      widthItem = nav__item__open[nav__item__open.length - 1].offsetWidth;
      nav__item__open[nav__item__open.length - 1].classList.remove("open");
      dd_menu.style.display = "block";
      dd_nav__item[nav__item__open.length - 1].style.display = "block";
      if (nav__list.offsetWidth > nav__menu.offsetWidth) {
        hideItemMenu();
      }
    } else if (
      nav__list.offsetWidth + widthItem < nav__menu.offsetWidth &&
      nav__item__open.length !== nav__item.length
    ) {
      nav__item[nav__item__open.length].classList.add("open");
      widthItem = nav__item[nav__item__open.length].offsetWidth;

      let coutNone = !dd_nav__item[nav__item__open.length]
        ? nav__item__open.length - 1
        : nav__item__open.length;

      dd_nav__item[coutNone].style.display = "none";
    }
  }
  hideItemMenu();
  window.addEventListener("resize", hideItemMenu);
  // --------------------------------------------------------------
});
