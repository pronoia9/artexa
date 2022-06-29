import React from 'react';

export default function MenuBarHeader({ navbarActive, setSidebarActive, sidebarActive, setNavbarActive }) {
  return (
    <div className='art-menu-bar-header'>
      {/* when clicked on it, add class art-active and shows/hides the navbar */}
      <div
        className={navbarActive ? 'art-menu-bar-btn art-active' : 'art-menu-bar-btn'}
        onClick={() => {
          sidebarActive && setSidebarActive(false);
          setNavbarActive(!navbarActive);
        }}>
        <span></span>
      </div>
    </div>
  );
}