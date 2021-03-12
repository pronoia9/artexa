import React from 'react';

//const url = require('../../assets/images/tengyart-vDn7bw3awrQ-unsplash.jpg').default;


// TODO: Fix the background image link

function Banner() {
  return (
    //top background
    <div
      className='art-top-bg'
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1615377730068-e8235046ff05?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)',
      }}
    >
      {/* overlay */}
      <div className='art-top-bg-overlay'></div>
    </div>
  );
}

export default Banner;
