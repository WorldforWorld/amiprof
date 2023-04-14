export function navLight() {
	document.querySelector('.header__burger').addEventListener('click', function () {
		this.classList.toggle('active');
		document.querySelector('.nav__menu').classList.toggle('active');
		document.querySelector('body').classList.toggle('_lock');
	});

	// Получаем элементы меню и кнопку
	const nav__list = document.querySelector(".nav__list");
	const nav__menu = document.querySelector(".nav__menu");
	const dd_menu = document.querySelector(".dd_menu");
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
	// ----------------
	const contacts = document.querySelector('.contacts__phone')
	contacts.addEventListener("mouseover", () => {
		contacts.classList.add("active")
	})
	contacts.addEventListener("mouseout", () => {
		contacts.classList.remove("active")
	})

	const header = document.querySelector('header');
	function addClassScroll() {
		if (window.pageYOffset > 100) {
			header.classList.add("scroll")
		} else {
			header.classList.remove("scroll")
		}
	}
	addClassScroll()
	window.addEventListener('scroll', addClassScroll);
	// собираем все якоря; устанавливаем время анимации и количество кадров
	const learnMoreLinks = document.querySelectorAll("a[href*='#']");

	learnMoreLinks.forEach(link => {
		link.addEventListener("click", (event) => {
			event.preventDefault();
			document.querySelector('.header__burger').classList.remove('active');
			document.querySelector('.nav__menu').classList.remove('active');
			document.querySelector('body').classList.remove('_lock');
			const id = event.target.getAttribute("href");
			const section = document.querySelector(id);
			const top = section.offsetTop;
			const duration = 1000;
			const start = window.pageYOffset;
			const distance = top - start;
			let startTime = null;

			function animation(currentTime) {
				if (startTime === null) startTime = currentTime;
				const timeElapsed = currentTime - startTime;
				const run = ease(timeElapsed, start, distance, duration);
				window.scrollTo(0, run);
				if (timeElapsed < duration) requestAnimationFrame(animation);
			}

			function ease(t, b, c, d) {
				t /= d / 2;
				if (t < 1) return c / 2 * t * t + b;
				t--;
				return -c / 2 * (t * (t - 2) - 1) + b;
			}

			requestAnimationFrame(animation);
		});
	});
}
