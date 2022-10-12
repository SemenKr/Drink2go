const swiper=new Swiper(".swiper",{slidesPerView:1,spaceBetween:10,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});let navMain=document.querySelector(".main-header"),navToggle=document.querySelector(".main-header__toggle");navMain.classList.remove("main-header--nojs"),navMain.classList.add("main-header--menu_closed"),navToggle.addEventListener("click",(function(){navMain.classList.contains("main-header--menu_closed")?(navMain.classList.remove("main-header--menu_closed"),navMain.classList.add("main-header--menu_opened")):(navMain.classList.add("main-header--menu_closed"),navMain.classList.remove("main-header--menu_opened"))}));const map=L.map("map").setView({lat:59.968194195792805,lng:30.316492},20);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);const mainPinIcon=L.icon({iconUrl:"./icons/stack.svg#map-marker",iconSize:[100,90],iconAnchor:[50,20]}),marker=L.marker({lat:59.968322,lng:30.317359},{icon:mainPinIcon});marker.addTo(map),map.on("click",(function(){map.scrollWheelZoom.enabled()||map.scrollWheelZoom.enable()})),map.on("mouseout",(function(){map.scrollWheelZoom.disable()}));