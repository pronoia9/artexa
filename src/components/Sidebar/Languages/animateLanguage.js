var ProgressBar = require('progressbar.js');

function animateLanguage(id, language, level) {
  const i = '#circleprog' + id;
  var bar = new ProgressBar.Circle(i, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 1400,
    delay: 2400 + Number(id) * 100,
    trailWidth: 7,
    step: (state, bar) => {
      bar.setText(level);
    },
  });
  bar.animate(level / 100);
}

export default animateLanguage;
