import '../scss/app.scss';

/* Demo JS */
import Swiper, { Navigation, Pagination, Autoplay, EffectFade , Thumbs, Controller  } from 'swiper'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';
 
Swiper.use([Navigation, Pagination, Autoplay, EffectFade, Thumbs, Controller ]);
const swiper = new Swiper('.slider', {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable : true,
        vertical: true,
    },
    autoplay: {
        delay: 4000,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
})

const gallery_thumbnails = new Swiper('.gallery_thumbnails', {  
    slidesPerView: 3,
    spaceBetween: 10,   
})

const gallery_images = new Swiper('.gallery_images', {  
     
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView: 1, 
      thumbs: {
        swiper: gallery_thumbnails,
      },  
     
})
 


import './main.js';
 

