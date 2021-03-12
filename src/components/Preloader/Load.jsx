import React, { useEffect } from 'react';
var ProgressBar = require('progressbar.js');

function Load() {
  useEffect(() => {
    var bar = new ProgressBar.Line('#preloader', {
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
    });
    bar.animate(1);
  });

  return <div id='preloader' className='art-preloader-load' style={{ position: 'relative' }}></div>;
}

export default Load;
