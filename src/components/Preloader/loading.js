import anime from 'animejs/lib/anime.es.js';
var ProgressBar = require('progressbar.js');

function loading() {
  // fade in animation
  anime({
    targets: '.art-preloader .art-preloader-content',
    opacity: [0, 1],
    delay: 200,
    duration: 600,
    easing: 'linear',
    complete: (anim) => (document.getElementById('art-preloader').style = 'display: flex'),
  });

  // fade out animation
  anime({
    targets: '.art-preloader',
    opacity: [1, 0],
    delay: 2200,
    duration: 400,
    easing: 'linear',
    complete: (anim) => (document.getElementById('art-preloader').style = 'display: none'),
  });

  // laoding bar animation
  var bar = new ProgressBar.Line(
    '#preloader',
    {
      strokeWidth: 1.7,
      easing: 'easeInOut',
      duration: 1400,
      delay: 750,
      trailWidth: 1.7,
      svgStyle: {
        width: '100%',
        height: '100%',
      },
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
      },
    },
    []
  );
  bar.animate(1);
}

export default loading;
