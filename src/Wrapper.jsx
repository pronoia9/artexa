import React, { useState } from 'react';
import InfoBar from './components/Sidebar/InfoBar';
import Home from './views/Home';
import Navbar from './components/Navbar/Navbar';
import banner from './data/banner.json';

export default function Wrapper() {
  // sliding for left side panel
  const [sidebarActive, setSidebarActive] = useState(false);

  // sliding for right side menu
  const [navbarActive, setNavbarActive] = useState(false);

  // current background image (gets a image link)
  const [background, setBackground] = useState(
    banner.backgrounds.unsplash[Math.floor(Math.random() * banner.backgrounds.unsplash.length)]
  );

  return (
    <div>
      <div className='art-mobile-top-bar'></div>

      <div className='art-app-wrapper'>
        <div className='art-app-container'>
          <InfoBar
            navbarActive={navbarActive}
            setNavbarActive={setNavbarActive}
            sidebarActive={sidebarActive}
            setSidebarActive={setSidebarActive}
          />
          <Home
            navbarActive={navbarActive}
            setNavbarActive={setNavbarActive}
            sidebarActive={sidebarActive}
            setSidebarActive={setSidebarActive}
            background={background}
            setBackground={setBackground}
          />
          <Navbar
            navbarActive={navbarActive}
            setNavbarActive={setNavbarActive}
            sidebarActive={sidebarActive}
            setSidebarActive={setSidebarActive}
          />
        </div>
      </div>
    </div>
  );
}
