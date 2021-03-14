import React from 'react';
import Profile from './Profile/Profile';
import About from './About/About';
import Languages from './Languages/Languages';
import HardSkills from './HardSkills/HardSkills';
import SoftSkills from './SoftSkills/SoftSkills';
import Resume from './Resume/Resume';
import Social from './Social/Social';
import Scrollbar from 'smooth-scrollbar-react';

export default function ArtInfoBar(props) {
  return (
    // info bar
    <div className={props.sidebarActive ? 'art-info-bar art-active' : 'art-info-bar'}>
      {/* menu bar frame */}
      <div className='art-info-bar-frame'>
        {/* info bar header (mobile icon to show/hide sidebar) */}
        <div className='art-info-bar-header'>
          <div className='art-info-bar-btn' onClick={() => {
            props.navbarActive && props.setNavbarActive(false);
            props.setSidebarActive(!props.sidebarActive);
          }}>
            <i className='fas fa-ellipsis-v'></i>
          </div>
        </div>

        {/* avatar, availability, name, post */}
        <Profile />

        <Scrollbar>
          <div className='art-scroll-frame'>
            <div className='scroll-content'>
              <About />
              <div className='art-ls-divider'></div>
              {/* languages, circle bar animation */}
              <Languages />
              <div className='art-ls-divider'></div>
              {/* hard skills, line bar */}
              <HardSkills />
              <div className='art-ls-divider'></div>
              {/* soft skills, list */}
              <SoftSkills />
              <div className='art-ls-divider'></div>
              {/* download link for resume */}
              <Resume />
            </div>
          </div>
        </Scrollbar>

        {/* social links */}
        <Social />
      </div>
    </div>
  );
}