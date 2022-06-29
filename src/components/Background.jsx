import React from 'react';

export default function Background({ background }) {
  return (
    //top background
    <div
      className='art-top-bg'
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + background})` }}>
      {/* overlay */}
      <div className='art-top-bg-overlay'></div>
    </div>
  );
}