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
