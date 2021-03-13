import React from 'react';
import data from '../../data/data.json';

function Banner() {
  return (
    //top background
    <div className='art-top-bg' style={{backgroundImage: "url(" + data.background + ")"}}>
      {/* overlay */}
      <div className='art-top-bg-overlay'></div>
    </div>
  );
}

export default Banner;
