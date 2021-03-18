import anime from 'animejs/lib/anime.es.js';
var ProgressBar = require('progressbar.js');

// 1. preloader
//       - loading animation (fade in, line bar, fade out)
// 2. progress bars
//       - circle animation
//       - line animation
// 3. counters
//       - couter animation (fade in)
// 4. form
//       - button animations (scale, fade in/out)

//------------------------------- PRELOADER ------------------------------//
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
// ----------------------------- TRANSITION ----------------------------- //
function transition() {
  anime({
    targets: '.transition-fade',
    opacity: [0, 1],
    scale: [0, 1],
    delay: 250,
    endDelay: 250,
    duration: 1000,
    easing: 'easeOutExpo',
  });
}

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

export { loading, transition, progressbarCircle, progressbarLine, counterAnimation, formButtonAnimation };
