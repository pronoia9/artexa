/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Scrollbar from 'smooth-scrollbar-react';
import SmoothScrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
// bg
import Background from './components/Background';
// side panels
import InfoBar from './components/Sidebar/InfoBar';
import Navbar from './components/Navbar/Navbar';
// middle
import Footer from './components/Footer';
import Routes from './routes/Routes';
// data
import data from './data/data.json';
// js
import { rng } from './assets/js/main.js';
let i = rng(0, data.backgrounds.animated.length);

SmoothScrollbar.use(OverscrollPlugin);

export default function App() {
  // sliding for left side panel
  const [sidebarActive, setSidebarActive] = useState(false);

  // sliding for right side menu
  const [navbarActive, setNavbarActive] = useState(false);

  // current background image (gets a local image link/path)
  const [background, setBackground] = useState({
    all: data.backgrounds.animated,
    total: data.backgrounds.animated.length,
    current: data.backgrounds.animated[i],
    index: i,
  });

  return (
    <div className='art-app'>
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
          {/* body (content area, middle section) */}
          {/* activate/show curtain (css) if any of the panels are open/active */}
          <div className={navbarActive || sidebarActive ? 'art-content art-active' : 'art-content'}>
            {/* curtain */}
            <div
              className='art-curtain'
              onClick={() => {
                navbarActive && setNavbarActive(false);
                sidebarActive && setSidebarActive(false);
              }}
            ></div>
            {/* send the background state from wrapper, which changes dynamically (on input) */}
            <Background background={background} setBackground={setBackground} />

            {/* transition container */}
            <div className='transition-fade' id='transition-fade'>
              {/* scroll frame */}
              <Scrollbar
                damping={0.5}
                thumbMinSize={20}
                renderByPixels={true}
                alwaysShowTracks={false}
                continuousScrolling={true}
                plugins={SmoothScrollbar}
              >
                <div id='scrollbar' className='art-scroll-frame' data-scrollbar='true' tabIndex='-1'>
                  <div className='scroll-content'>
                    {/* routes */}
                    <Routes data={data.main} background={background} setBackground={setBackground} />

                    {/* footer */}
                    <Footer data={data.main.logos} />
                  </div>
                </div>
              </Scrollbar>
            </div>
          </div>

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
