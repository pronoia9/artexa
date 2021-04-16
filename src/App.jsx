/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import SmoothScrollbar from 'smooth-scrollbar';
import Scrollbar from 'react-smooth-scrollbar';
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
import { rng, transition, scrollbarInit } from './assets/js/main.js';

let i = rng(0, data.backgrounds.animated.length - 1);

// TODO: <Scrollbar> is component t, need to fix warning regarding it

export default function App() {
  useEffect(scrollbarInit, []);
  useEffect(transition, [window.location.pathname]);

  // sliding for left side panel
  const [sidebarActive, setSidebarActive] = useState(false);

  // sliding for right side menu
  const [navbarActive, setNavbarActive] = useState(false);

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
            <Background />

            {/* transition container */}
            <div className='transition-fade' id='transition-fade'>
              {/* scroll frame */}
              <Scrollbar
                className='content-scrollbar'
                damping={0.5}
                thumbMinSize={20}
                renderByPixels={true}
                alwaysShowTracks={false}
                continuousScrolling={true}
                plugins={{ SmoothScrollbar }}
              >
                <div id='scrollbar' className='art-scroll-frame' data-scrollbar='true' tabIndex='-1'>
                  <div className='scroll-content'>
                    {/* routes */}
                    <Routes data={data.main} />

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
