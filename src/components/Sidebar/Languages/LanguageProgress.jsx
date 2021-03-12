import React, { useEffect } from 'react';
var ProgressBar = require('progressbar.js');

function LanguageProgress(props) {
  const i = '#circleprog' + props.id;
  useEffect(() => {
    var bar = new ProgressBar.Circle(i, {
      strokeWidth: 7,
      easing: 'easeInOut',
      duration: 1400,
      delay: 2400 + props.level,
      trailWidth: 7,
      step: function (state, circle) {
        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value);
        }
      },
    });
    bar.animate(props.level / 100);
  });

  return (
    <div className='art-lang-skills-item'>
      <div id={'circleprog' + props.id} className='art-circle-progress'></div>
      <h6>{props.language}</h6>
    </div>
  );
}

export default LanguageProgress;
