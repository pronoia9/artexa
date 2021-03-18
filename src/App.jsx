/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Scrollbar from 'smooth-scrollbar-react';
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
            <div className='transition-fade'>
              {/* scroll frame */}
              <Scrollbar>
                <div id='scrollbar' className='art-scroll-frame' data-scrollbar='true' tabIndex='-1'>
                  <div className='scroll-content'>
                    {/* DIFFERENT TYPES OF PAGES WILL BE HERE */}
                    <Switch>
                      <Route path='/projects'>
                        <ProjectsPage data={data.main.projects} />
                      </Route>

                      <Route path='/history'>
                        <HistoryPage data={data.main.history} />
                      </Route>

                      <Route path='/contact'>
                        <ContactPage data={data.main.contact} />
                      </Route>

                      {/* TODO: CHANGE BLOG PAGE TO 2 or 3 COLUMNS */}
                      <Route path='/blog'>
                        <BlogPage data={data.main.blog} />
                      </Route>

                      <Route path='/'>
                        <HomePage data={data.main} background={background} setBackground={setBackground} />
                      </Route>
                    </Switch>

                    {/* footer */}
                    <Footer data={data.main.logos} />
                  </div>
                </div>
              </Scrollbar>
            </div>
          </div>

          {/* <HomePage
            data={data.main}
            navbarActive={navbarActive}
            setNavbarActive={setNavbarActive}
            sidebarActive={sidebarActive}
            setSidebarActive={setSidebarActive}
            background={background}
            setBackground={setBackground}
          /> */}
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
