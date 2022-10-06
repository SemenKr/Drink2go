const swiper = new Swiper('.swiper', {
		slidesPerView: 1,
		spaceBetween: 10,

		pagination: {
				el: '.swiper-pagination',
		},

		navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
		},

		scrollbar: {
				el: '.swiper-scrollbar',
		},
});

let navMain = document.querySelector('.main-header');
let navToggle = document.querySelector('.main-header__toggle');

navMain.classList.remove('main-header--nojs');
navMain.classList.add('main-header--menu_closed');

navToggle.addEventListener('click', function () {
if (navMain.classList.contains('main-header--menu_closed')) {
navMain.classList.remove('main-header--menu_closed');
navMain.classList.add('main-header--menu_opened');
} else {
navMain.classList.remove('main-header--menu_opened');
}
});
