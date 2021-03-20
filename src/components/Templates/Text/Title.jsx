import React from 'react';

export default function Title(props) {
  return (
    <div className='art-section-title'>
      <div className='art-title-frame'>
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}
