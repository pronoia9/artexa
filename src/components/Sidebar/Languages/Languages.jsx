import React, { useEffect } from 'react';
var ProgressBar = require('progressbar.js');

function Languages() {
  useEffect(() => {
    var bar1 = new ProgressBar.Circle('#circleprog1', {
      strokeWidth: 7,
      easing: 'easeInOut',
      duration: 1400,
      delay: 2500,
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
    bar1.animate(1);

    // french
    var bar2 = new ProgressBar.Circle('#circleprog2', {
      strokeWidth: 7,
      easing: 'easeInOut',
      duration: 1400,
      delay: 2600,
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
    bar2.animate(0.2);

    // spanish
    // var bar3 = new ProgressBar.Circle('#circleprog3', {
    //   strokeWidth: 7,
    //   easing: 'easeInOut',
    //   duration: 1400,
    //   delay: 2700,
    //   trailWidth: 7,
    //   step: function (state, circle) {
    //     var value = Math.round(circle.value() * 100);
    //     if (value === 0) {
    //       circle.setText('');
    //     } else {
    //       circle.setText(value);
    //     }
    //   },
    // });
    // bar3.animate(0.7);
  });

  return (
    <div className='art-lang-skills p-30-15'>
      {/* Main language */}
      <div className='art-lang-skills-item'>
        <div id='circleprog1' className='art-circle-progress'></div>
        <h6>English</h6>
      </div>

      {/* Secondary language */}
      <div className='art-lang-skills-item'>
        <div id='circleprog2' className='art-circle-progress'></div>
        <h6>French</h6>
      </div>

      {/* Third language */}
      {/* <div className='art-lang-skills-item'>
        <div id='circleprog3' className='art-circle-progress'></div>
        <h6>Spanish</h6>
      </div> */}
    </div>
  );
}

export default Languages;
