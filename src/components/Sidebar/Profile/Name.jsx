import React from 'react';

export default function Name(props) {
  return (
    <h5 className='art-name mb-10'>
      <a href='/'>{props.name}</a>
    </h5>
  );
}