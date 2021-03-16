import anime from 'animejs/lib/anime.es.js';

//------------------------------- PRELOADER ------------------------------//

//----------------------------- PROGRESSBARS -----------------------------//

//--------------------------------- FORM ---------------------------------//
// submit button and form button animation
function formButtonAnimation() {
  var tl = anime.timeline({
    easing: 'easeOutExpo',
  });

  tl.add({
    targets: '.art-submit',
    opacity: 0,
    scale: 0.5,
  }).add({
    targets: '.art-success',
    scale: 1,
    height: '45px',
  });
  return true;
}

export { formButtonAnimation };

//-------------------------- BLOG POSTS SLIDER --------------------------//
// var swiper = new Swiper('.art-works-slider', {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   speed: 1400,
//   autoplay: {
//     delay: 4000,
//   },
//   autoplaySpeed: 5000,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.art-works-swiper-next',
//     prevEl: '.art-works-swiper-prev',
//   },
//   breakpoints: {
//     1500: {
//       slidesPerView: 2,
//     },
//     1200: {
//       slidesPerView: 2,
//     },
//     992: {
//       slidesPerView: 1,
//     },
//   },
// });

// // slider blog
// var swiper = new Swiper('.art-blog-slider', {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   speed: 1400,
//   autoplay: {
//     delay: 4000,
//   },
//   autoplaySpeed: 5000,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.art-blog-swiper-next',
//     prevEl: '.art-blog-swiper-prev',
//   },
//   breakpoints: {
//     1500: {
//       slidesPerView: 3,
//     },
//     1200: {
//       slidesPerView: 3,
//     },
//     992: {
//       slidesPerView: 1,
//     },
//   },
// });

// $('[data-fancybox="gallery"]').fancybox({
//   animationEffect: 'zoom-in-out',
//   animationDuration: 600,
//   transitionDuration: 1200,
//   buttons: ['zoom', 'slideShow', 'thumbs', 'close'],
// });

// $('[data-fancybox="diplome"]').fancybox({
//   animationEffect: 'zoom-in-out',
//   animationDuration: 600,
//   transitionDuration: 1200,
//   buttons: ['zoom', 'slideShow', 'thumbs', 'close'],
// });

// $('[data-fancybox="recommendation"]').fancybox({
//   animationEffect: 'zoom-in-out',
//   animationDuration: 600,
//   transitionDuration: 1200,
//   buttons: ['zoom', 'slideShow', 'thumbs', 'close'],
// });

// $.fancybox.defaults.hash = false;

// $('.current-menu-item a').clone().prependTo('.art-current-page');

// $('.menu-item').on('click', function () {
//   if ($(this).hasClass('menu-item-has-children')) {
//     $(this).children('.sub-menu').toggleClass('art-active');
//   } else {
//     $(
//       '.art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn'
//     ).removeClass('art-active , art-disabled');
//   }
// });