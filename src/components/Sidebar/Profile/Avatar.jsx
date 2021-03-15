import React from 'react';

const pfp = require('../../../assets/images/bitmoji/smile.png').default;

// TODO Enable/fix avatar click fancybox

export default function Avatar() {
  return (
    //avatar
    <div className='art-avatar'>
      <a data-fancybox='avatar' href={pfp} className='art-avatar-curtain'>
        <img src={pfp} alt='Avatar' />
        <i className='fas fa-expand'></i>
      </a>

      {/* availability */}
      <div className='art-lamp-light'>
        {/* change class 'art-not-available' if not available */}
        <div className='art-available-lamp'></div>
      </div>
    </div>
  );
}