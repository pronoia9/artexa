import React, { useState } from 'react';
// side panels
import InfoBar from './components/Sidebar/InfoBar';
import Navbar from './components/Navbar/Navbar';
// pages
import HomePage from './views/HomePage';
import ProjectsPage from './views/ProjectsPage';
import HistoryPage from './views/HistoryPage';
import ContactPage from './views/ContactPage';
import BlogPage from './views/BlogPage';
// data
import data from './data/data.json';

export default function App() {
  // sliding for left side panel
  const [sidebarActive, setSidebarActive] = useState(false);

  // sliding for right side menu
  const [navbarActive, setNavbarActive] = useState(false);

  let i = Math.floor(Math.random() * data.backgrounds.animated.length);
  // current background image (gets a image link)
  const [background, setBackground] = useState({
    all: data.backgrounds.animated,
    total: data.backgrounds.animated.length,
    current: data.backgrounds.animated[i],
    index: i,
  });

  return (
    <div>
      <div className='art-mobile-top-bar'></div>

      <div className='art-app-wrapper'>
        <div className='art-app-container'>
          <InfoBar
            data={data.sidebar}
            navbarActive={navbarActive}
            setNavbarActive={setNavbarActive}
            sidebarActive={sidebarActive}
            setSidebarActive={setSidebarActive}
          />
          <HomePage
            data={data.main}
            navbarActive={navbarActive}
            setNavbarActive={setNavbarActive}
            sidebarActive={sidebarActive}
            setSidebarActive={setSidebarActive}
            background={background}
            setBackground={setBackground}
          />
          <Navbar
            data={data.navbar}
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
