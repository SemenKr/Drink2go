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
		navMain.classList.add('main-header--menu_closed');
		navMain.classList.remove('main-header--menu_opened');
	}
});


// Map
const map = L.map('map')
	.setView({
		lat: 59.968194195792805,
		lng: 30.316492,
	},
		15,);

L.tileLayer(
	'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
	{
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	},
).addTo(map);

const mainPinIcon = L.icon({
	iconUrl: './icons/stack.svg#map-marker',
	iconSize: [38, 50],
	iconAnchor: [15, 30],
});

const marker = L.marker(
	{
		lat: 59.968322,
		lng: 30.317359,
	},
	{
		icon: mainPinIcon,
	}
);

marker.addTo(map);
