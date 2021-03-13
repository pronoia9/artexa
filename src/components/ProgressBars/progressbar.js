var ProgressBar = require('progressbar.js');

function progressbarCircle(i, id, text, percent) {
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

function progressbarLine(i, id, skill, level) {
  var bar = new ProgressBar.Line("#" + id, {
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

export { progressbarCircle, progressbarLine };
