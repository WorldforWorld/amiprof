import Swiper, { Navigation } from 'swiper';
export function swiper() {
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
}