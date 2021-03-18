/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import Scrollbar from 'smooth-scrollbar-react';
import { spring, AnimatedSwitch } from 'react-router-transition';
// bg
import Background from './components/Background';
// side panels
import InfoBar from './components/Sidebar/InfoBar';
import Navbar from './components/Navbar/Navbar';
// pages
import HomePage from './views/HomePage';
import ProjectsPage from './views/ProjectsPage';
import HistoryPage from './views/HistoryPage';
import BlogPage from './views/BlogPage';
import ContactPage from './views/ContactPage';
import Footer from './components/Footer';
// data
import data from './data/data.json';

export default function App() {
  // sliding for left side panel
  const [sidebarActive, setSidebarActive] = useState(false);

  // sliding for right side menu
  const [navbarActive, setNavbarActive] = useState(false);

  // current background image (gets a image link)
  let i = Math.floor(Math.random() * data.backgrounds.animated.length);
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
          <BrowserRouter>
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

              {/* swup container */}
              <div className='transition-fade swup' id='swup'>
                {/* scroll frame */}
                <Scrollbar>
                  <div id='scrollbar' className='art-scroll-frame' data-scrollbar='true' tabIndex='-1'>
                    <div className='scroll-content'>
                      <AnimatedSwitch
                        atEnter={bounceTransition.atEnter}
                        atLeave={bounceTransition.atLeave}
                        atActive={bounceTransition.atActive}
                        mapStyles={mapStyles}
                        className='route-wrapper'
                      >
                        <Route exact path='/projects-2-col'>
                          <ProjectsPage data={data.main.projects} column={2} />
                        </Route>

                        <Route exact path='/projects-3-col'>
                          <ProjectsPage data={data.main.projects} column={3} />
                        </Route>

                        <Route exact path='/history'>
                          <HistoryPage data={data.main.history} />
                        </Route>

                        <Route exact path='/contact'>
                          <ContactPage data={data.main.contact} />
                        </Route>

                        <Route exact path='/blog-2-col'>
                          <BlogPage data={data.main.blog} column={2} />
                        </Route>

                        <Route exact path='/blog-3-col'>
                          <BlogPage data={data.main.blog} column={3} />
                        </Route>

                        <Route exact path='/'>
                          <HomePage
                            data={data.main}
                            background={background}
                            setBackground={setBackground}
                          />
                        </Route>
                      </AnimatedSwitch>

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
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

// ---------------- transition functions ---------------- //
// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 100,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};
