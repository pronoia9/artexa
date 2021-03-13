var ProgressBar = require('progressbar.js');

function animateSoftSkill(id, skill, level) {
  const i = '#lineprog' + id;
  var bar = new ProgressBar.Line(i, {
    strokeWidth: 1.72,
    easing: 'easeInOut',
    duration: 1400,
    // increase delay down the list (ie: 2800, 2900, 3000, 3100, 3200)
    delay: (2700 + (Number(id) * 100)),
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

export default animateSoftSkill;