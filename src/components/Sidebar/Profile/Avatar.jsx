import React from 'react';
const pfp = require('../../../assets/images/arter/face-1(1).jpg').default;

// TODO Enable/fix avatar click fancybox

function Avatar() {
  return (
    //avatar
    <div className='art-avatar'>
      <a data-fancybox='avatar' className='art-avatar-curtain' href={pfp}>
        <img
          className='art-avatar-curtain'
          src={pfp}
          alt='Avatar'
        />
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

export default Avatar;


  // $('[data-fancybox="avatar"]').fancybox({
  //   animationEffect: 'zoom-in-out',
  //   animationDuration: 600,
  //   transitionDuration: 1200,
  //   buttons: ['zoom', 'close'],
  // });
