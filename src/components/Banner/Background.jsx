import React from 'react';
import banner from '../../data/banner.json';

function Banner(props) {
  return (
    //top background
    <div className='art-top-bg' style={{ backgroundImage: 'url(' + props.background + ')' }}>
      {/* overlay */}
      <div className='art-top-bg-overlay'></div>
    </div>
  );
}

export default Banner;
