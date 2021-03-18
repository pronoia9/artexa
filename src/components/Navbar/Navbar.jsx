import React, { useState } from 'react';
import NavbarButton from './NavbarButton';
import NavbarCurrentPage from './NavbarCurrentPage';
import NavbarList from './NavbarList';

export default function ArtMenuBar(props) {
  // contains the current page
  const [currentPage, setCurrentPage] = useState('Home');

  return (
    <div className={props.navbarActive ? 'art-menu-bar art-active' : 'art-menu-bar'}>
      <div id='art-menu-bar-frame' className='art-menu-bar-frame'>
        <NavbarButton
          navbarActive={props.navbarActive}
          setNavbarActive={props.setNavbarActive}
          sidebarActive={props.sidebarActive}
          setSidebarActive={props.setSidebarActive}
        />

        <NavbarCurrentPage currentPage={currentPage} />

        <NavbarList
          data={props.data}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setNavbarActive={props.setNavbarActive}
        />
      </div>
    </div>
  );
}
