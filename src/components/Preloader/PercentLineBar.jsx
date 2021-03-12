import React, { useEffect } from 'react';
var ProgressBar = require('progressbar.js');

function LoadingBar() {
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

  return (
    <div id='preloader' className='art-preloader-load' style={{ position: 'relative' }}>
      <svg viewBox='0 0 100 1.7' preserveAspectRatio='none'></svg>
      <div
        className='progressbar-text'
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          padding: 0,
          margin: 0,
          transform: 'translate(-50%, -50%)',
          color: 'rgb(85, 85, 85)',
        }}
      ></div>
    </div>
  );
}

export default LoadingBar;
