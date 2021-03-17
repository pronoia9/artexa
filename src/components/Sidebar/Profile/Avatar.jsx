import React from 'react';

export default function Avatar(props) {
  return (
    //avatar
    <div className='art-avatar'>
      <a data-fancybox='avatar' href={process.env.PUBLIC_URL + props.image} className='art-avatar-curtain'>
        <img src={process.env.PUBLIC_URL + props.image} alt='Avatar' />
        <i className='fas fa-expand'></i>
      </a>

      {/* availability */}
      {/* change class 'art-not-available' if not available */}
      <div className={'art-lamp-light' + (props.available ? '' : ' art-not-available')}>
        <div className='art-available-lamp'></div>
      </div>
    </div>
  );
}
