import React from 'react';

export default function Post(props) {
  return (
    <div className='art-sm-text'>
      {props.subtitle.map((s) => (
        <div key={s}>{s}</div>
      ))}
    </div>
  );
}