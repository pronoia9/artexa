import React, { useEffect } from 'react';
import LoadingBar from './PercentLineBar';
import anime from 'animejs/lib/anime.es.js';

function Preloader() {
  useEffect(pageLoading);

  return (
    <div id='art-preloader' className='art-preloader'>
      <div className='art-preloader-content'>
        <h4>Welcome</h4>
        <LoadingBar />
      </div>
    </div>
  );
}

export default Preloader;

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
