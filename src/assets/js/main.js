/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
import $ from './plugins/jquery';
import Scrollbar, { OverscrollPlugin } from './plugins/overscroll.min';
import Swup from './plugins/swup.min';
import anime from './plugins/anime.min';
import Swiper from './plugins/';

$(function () {
  // swup js
  const options = {
    containers: ['#swup', '#swupMenu'],
    animateHistoryBrowsing: true,
  };

  const swup = new Swup(options);

  // scrollbar
  Scrollbar.use(OverscrollPlugin);
  Scrollbar.init(document.querySelector('#scrollbar'), {
    damping: 0.05,
    renderByPixel: true,
    continuousScrolling: true,
  });
  Scrollbar.init(document.querySelector('#scrollbar2'), {
    damping: 0.05,
    renderByPixel: true,
    continuousScrolling: true,
  });

  // counters
  anime({
    targets: '.art-counter-frame',
    opacity: [0, 1],
    duration: 800,
    delay: 2300,
    easing: 'linear',
  });

  anime({
    targets: '.art-counter',
    delay: 1300,
    opacity: [1, 1],
    complete: function (anim) {
      $('.art-counter').each(function () {
        $(this)
          .prop('Counter', 0)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 2000,
              easing: 'linear',
              step: function (now) {
                $(this).text(Math.ceil(now));
              },
            }
          );
      });
    },
  });

  // Contact form
  $('.art-input').keyup(function () {
    if ($(this).val()) {
      $(this).addClass('art-active');
    } else {
      $(this).removeClass('art-active');
    }
  });

  $('#form').submit(function () {
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: $(this).serialize(),
    }).done(function () {
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
    });
    return false;
  });

  // portfolio filter
  $('.art-filter a').on('click', function () {
    $('.art-filter .art-current').removeClass('art-current');
    $(this).addClass('art-current');

    var selector = $(this).data('filter');
    $('.art-grid').isotope({
      filter: selector,
    });
    return false;
  });

  // masonry Grid
  $('.art-grid').isotope({
    filter: '*',
    itemSelector: '.art-grid-item',
    transitionDuration: '.6s',
  });

  // slider testimonials
  var swiper = new Swiper('.art-testimonial-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: false,
    autoplaySpeed: 5000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.art-testi-swiper-next',
      prevEl: '.art-testi-swiper-prev',
    },
    breakpoints: {
      1500: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });

  // slider works
  var swiper = new Swiper('.art-works-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: {
      delay: 4000,
    },
    autoplaySpeed: 5000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.art-works-swiper-next',
      prevEl: '.art-works-swiper-prev',
    },
    breakpoints: {
      1500: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });

  // slider blog
  var swiper = new Swiper('.art-blog-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: {
      delay: 4000,
    },
    autoplaySpeed: 5000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.art-blog-swiper-next',
      prevEl: '.art-blog-swiper-prev',
    },
    breakpoints: {
      1500: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });

  $('[data-fancybox="gallery"]').fancybox({
    animationEffect: 'zoom-in-out',
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: ['zoom', 'share', 'slideShow', 'thumbs', 'close'],
  });

  $('[data-fancybox="diplome"]').fancybox({
    animationEffect: 'zoom-in-out',
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: ['zoom', 'slideShow', 'thumbs', 'close'],
  });

  $('[data-fancybox="avatar"]').fancybox({
    animationEffect: 'zoom-in-out',
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: ['zoom', 'close'],
  });

  $('[data-fancybox="recommendation"]').fancybox({
    animationEffect: 'zoom-in-out',
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: ['zoom', 'slideShow', 'thumbs', 'close'],
  });

  $.fancybox.defaults.hash = false;

  $('.current-menu-item a').clone().appendTo('.art-current-page');

  $('.art-map-overlay').on('click', function () {
    $(this).addClass('art-active');
  });

  $('.art-info-bar-btn').on('click', function () {
    $('.art-info-bar').toggleClass('art-active');
    $('.art-menu-bar-btn').toggleClass('art-disabled');
  });

  $('.art-menu-bar-btn').on('click', function () {
    $('.art-menu-bar-btn , .art-menu-bar').toggleClass('art-active');
    $('.art-info-bar-btn').toggleClass('art-disabled');
  });

  $('.art-info-bar-btn , .art-menu-bar-btn').on('click', function () {
    $('.art-content').toggleClass('art-active');
  });

  $('.art-curtain , .art-mobile-top-bar').on('click', function () {
    $(
      '.art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn'
    ).removeClass('art-active , art-disabled');
  });

  $('.menu-item').on('click', function () {
    if ($(this).hasClass('menu-item-has-children')) {
      $(this).children('.sub-menu').toggleClass('art-active');
    } else {
      $(
        '.art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn'
      ).removeClass('art-active , art-disabled');
    }
  });

  // reinit
  document.addEventListener('swup:contentReplaced', function () {
    Scrollbar.use(OverscrollPlugin);
    Scrollbar.init(document.querySelector('#scrollbar'), {
      damping: 0.05,
      renderByPixel: true,
      continuousScrolling: true,
    });
    Scrollbar.init(document.querySelector('#scrollbar2'), {
      damping: 0.05,
      renderByPixel: true,
      continuousScrolling: true,
    });

    $('#form').submit(function () {
      $.ajax({
        type: 'POST',
        url: 'mail.php',
        data: $(this).serialize(),
      }).done(function () {
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
      });
      return false;
    });

    // Masonry Grid
    $('.art-grid').isotope({
      filter: '*',
      itemSelector: '.art-grid-item',
      transitionDuration: '.6s',
    });

    $('.art-filter a').on('click', function () {
      $('.art-filter .art-current').removeClass('art-current');
      $(this).addClass('art-current');

      var selector = $(this).data('filter');
      $('.art-grid').isotope({
        filter: selector,
      });
      return false;
    });

    anime({
      targets: '.art-counter-frame',
      opacity: [0, 1],
      duration: 800,
      delay: 300,
      easing: 'linear',
    });

    $('.art-counter').each(function () {
      $(this)
        .prop('Counter', 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 2000,
            easing: 'linear',
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });

    // slider testimonials
    var swiper = new Swiper('.art-testimonial-slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1400,
      autoplay: false,
      autoplaySpeed: 5000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.art-testi-swiper-next',
        prevEl: '.art-testi-swiper-prev',
      },
      breakpoints: {
        1500: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 1,
        },
      },
    });

    // slider works
    var swiper = new Swiper('.art-works-slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1400,
      autoplay: {
        delay: 4000,
      },
      autoplaySpeed: 5000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.art-works-swiper-next',
        prevEl: '.art-works-swiper-prev',
      },
      breakpoints: {
        1500: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 1,
        },
      },
    });

    // slider blog
    var swiper = new Swiper('.art-blog-slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1400,
      autoplay: {
        delay: 4000,
      },
      autoplaySpeed: 5000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.art-blog-swiper-next',
        prevEl: '.art-blog-swiper-prev',
      },
      breakpoints: {
        1500: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 1,
        },
      },
    });

    $('[data-fancybox="gallery"]').fancybox({
      animationEffect: 'zoom-in-out',
      animationDuration: 600,
      transitionDuration: 1200,
      buttons: ['zoom', 'slideShow', 'thumbs', 'close'],
    });

    $('[data-fancybox="diplome"]').fancybox({
      animationEffect: 'zoom-in-out',
      animationDuration: 600,
      transitionDuration: 1200,
      buttons: ['zoom', 'slideShow', 'thumbs', 'close'],
    });

    $('[data-fancybox="recommendation"]').fancybox({
      animationEffect: 'zoom-in-out',
      animationDuration: 600,
      transitionDuration: 1200,
      buttons: ['zoom', 'slideShow', 'thumbs', 'close'],
    });

    $.fancybox.defaults.hash = false;

    $('.current-menu-item a').clone().prependTo('.art-current-page');

    $('.menu-item').on('click', function () {
      if ($(this).hasClass('menu-item-has-children')) {
        $(this).children('.sub-menu').toggleClass('art-active');
      } else {
        $(
          '.art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn'
        ).removeClass('art-active , art-disabled');
      }
    });
  });

  /* -------------------------------------------

  demo

  ------------------------------------------- */
  var demo =
    '<style>.color-change{top: 30vh; right: -50px; padding: 5px 5px 0; background-color: rgba(250,250,252,1); position: fixed; z-index: 99999999999999999999999999999999; border-radius: 0 0 2px 0; -webkit-transition: .3s ease-in-out; transition: .3s ease-in-out;}.active-changer{right: 0;}.swapColor{height: 40px; width: 40px; display: block; margin-bottom: 5px; border-radius: 1px; filter: brightness(100%); -webkit-transition: .3s ease-in-out; transition: .3s ease-in-out;}.swapColor:hover{filter: brightness(110%);}.swapOverlay{height: 40px; width: 40px; display: block; margin-bottom: 10px; border-radius: 1px;}.green{background-color: #4CAF50;}.red{background-color: #f44336;}.blue{background-color: #64B5F6;}.orange{background-color: #FFC107;}.open-changer{cursor: pointer; position: absolute; background-color: rgba(250,250,252,1); height: 40px; width: 40px; top: 0; left: -40px; color: rgba(32,32,42,1); display: flex; justify-content: center;}.open-changer i{align-self: center; animation: rotate 2s infinite linear;}@keyframes rotate{0%{transform: rotate(0);}100%{transform: rotate(360deg);}}.demo-card{width: 100%;}.demo-frame{margin: 0;}@media (max-width: 768px){.demo-frame{margin-left: -15px; margin-right: -15px;}}</style> <div class="color-change"> <div class="open-changer"><i class="fas fa-cog"></i></div><a href="javascript:void(0)" class="swapColor orange" data-theme="orange"></a> <a href="javascript:void(0)" class="swapColor red" data-theme="red"></a> <a href="javascript:void(0)" class="swapColor green" data-theme="green"></a> <a href="javascript:void(0)" class="swapColor blue" data-theme="blue"></a></div>';

  $('body').prepend(demo);

  var sheets = {
    orange: $('<link rel="stylesheet" href="css/color-1.css">'),
    red: $('<link rel="stylesheet" href="css/color-2.css">'),
    green: $('<link rel="stylesheet" href="css/color-3.css">'),
    blue: $('<link rel="stylesheet" href="css/color-4.css">'),
  };

  var sheets2 = {
    blueoverlay: $('<link rel="stylesheet" href="css/overlay-color/blue.css">'),
    violetoverlay: $('<link rel="stylesheet" href="css/overlay-color/violet.css">'),
  };

  var currentSheet = sheets.orange.appendTo($('head'));

  $('a.swapColor').click(function () {
    currentSheet.detach();
    currentSheet = sheets[$(this).attr('data-theme')].appendTo($('head'));
  });

  $('.open-changer').click(function () {
    $('.color-change').toggleClass('active-changer');
  });

  $('.art-app').click(function () {
    $('.color-change').removeClass('active-changer');
  });

  /* -------------------------------------------

  demo end

  ------------------------------------------- */
});
