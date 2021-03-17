import React from 'react';

export default function Background(props) {
  return (
    //top background
    <div
      className='art-top-bg'
      style={{
        backgroundImage: 'url(' + process.env.PUBLIC_URL + props.background.current + ')',
      }}
    >
      {/* overlay */}
      <div className='art-top-bg-overlay'></div>
    </div>
  );
}
