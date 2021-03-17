import anime from 'animejs/lib/anime.es.js';
var ProgressBar = require('progressbar.js');

//------------------------------- PRELOADER ------------------------------//

//----------------------------- PROGRESSBARS -----------------------------//
function progressbarCircle(i, id, percent) {
  var bar = new ProgressBar.Circle('#' + id, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 1400,
    delay: 2400 + Number(i) * 100,
    trailWidth: 7,
    step: (state, bar) => {
      bar.setText(percent);
    },
  });
  bar.animate(percent / 100);
}

function progressbarLine(i, id, level) {
  var bar = new ProgressBar.Line('#' + id, {
    strokeWidth: 1.72,
    easing: 'easeInOut',
    duration: 1400,
    // increase delay down the list (ie: 2800, 2900, 3000, 3100, 3200)
    delay: 2700 + Number(i) * 100,
    trailWidth: 1.72,
    svgStyle: {
      width: '100%',
      height: '100%',
    },
    step: (state, bar) => {
      bar.setText(level + ' %');
    },
  });
  bar.animate(level / 100);
}

//------------------------------- COUNTERS -------------------------------//
function counterAnimation() {
  anime({
    targets: '.art-counter-frame',
    opacity: [0, 1],
    duration: 800,
    delay: 2300,
    easing: 'linear',
  });
}

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

export { progressbarCircle, progressbarLine, counterAnimation, formButtonAnimation };
