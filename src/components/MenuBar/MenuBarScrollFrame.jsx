import React from 'react';

function ScrellFrame() {
  return (
    <div className='art-scroll-frame'>
      <nav id='swupMenu' data-swup='1'>
        <ul className='main-menu'>
          <li className='menu-item current-menu-item'>
            <a href='/'>Home</a>
          </li>
          <li className='menu-item'>
            <a href='/'>Education</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ScrellFrame;
