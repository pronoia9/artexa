import React from 'react';

export default function Logo(props) {
  return (
    <div className='col-6 col-lg-3'>
      <img className='art-brand' src={process.env.PUBLIC_URL + props.url} alt='warning'></img>
    </div>
  );
}
