import anime from 'animejs/lib/anime.es.js';

function pageLoading() {
  // Fade In
  anime({
    targets: '.art-preloader .art-preloader-content',
    opacity: [0, 1],
    delay: 200,
    duration: 600,
    easing: 'linear',
    complete: function (anim) {},
  });

  // Fade Out
  anime({
    targets: '.art-preloader',
    opacity: [1, 0],
    delay: 2200,
    duration: 400,
    easing: 'linear',
    complete: function (anim) {
      document.getElementById('art-preloader').style = 'display: none';
    },
  });
}

export default pageLoading;