import * as flsFunctions from "./modules/functions.js";
import * as navLightInit from "./modules/nav_light.js";

import Swiper, { Navigation } from 'swiper';

document.addEventListener("DOMContentLoaded", function () {
	flsFunctions.isWebp();

	navLightInit.navLight();
	const settings = {
		// Default parameters
		slidesPerView: 1,
		spaceBetween: 10,
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 15
			},
			// when window width is >= 480px
			600: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			// when window width is >= 640px
			1000: {
				slidesPerView: 3,
				spaceBetween: 40
			}
		},
		modules: [Navigation],
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	}
	const swiperFeedback = new Swiper('.feedback__swiper', settings)
	const swiperCertificate = new Swiper('.certificate__slider', settings)
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
