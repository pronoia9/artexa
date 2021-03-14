import React from 'react';
import NavbarButton from './NavbarButton';
import NavbarCurrentPage from './NavbarCurrentPage';
import NavbarList from './NavbarList';

export default function ArtMenuBar(props) {
  return (
    <div className={props.navbarActive ? 'art-menu-bar art-active' : 'art-menu-bar'}>
      <div id='art-menu-bar-frame' className='art-menu-bar-frame'>
        <NavbarButton
          navbarActive={props.navbarActive}
          setNavbarActive={props.setNavbarActive}
          sidebarActive={props.sidebarActive}
          setSidebarActive={props.setSidebarActive}
        />
        <NavbarCurrentPage />
        <NavbarList />
      </div>
    </div>
  );
}
