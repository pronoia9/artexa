import React from 'react';

function MenuBarHeader(props) {
  return (
    <div className='art-menu-bar-header'>
      {/* when clicked on it, add class art-active */}
      <a
        className={'art-menu-bar-btn'}
        href='/'
        onClick={() => (props.menuActive ? props.setMenuActive(false) : props.setMenuActive(true))}
      >
        <span></span>
      </a>
    </div>
  );
}

export default MenuBarHeader;
