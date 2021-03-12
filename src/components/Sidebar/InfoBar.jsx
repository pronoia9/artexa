import React from 'react';
import Profile from './Profile/Profile';
import About from './About/About';
import Languages from './Languages/Languages';
import HardSkills from './HardSkills/HardSkills';
import SoftSkills from './SoftSkills/SoftSkills';
import Resume from './Resume/Resume';
import Social from './Social/Social';
import './infoBar.css';

function ArtInfoBar() {
  return (
    // info bar
    <div className='art-info-bar'>
      {/* menu bar frame */}
      <div className='art-info-bar-frame'>
        {/* info bar header */}
        <div className='art-info-bar-header'>
          <a className='art-info-bar-btn' href='/'>
            <i className='fas fa-ellipsis-v'></i>
          </a>
        </div>
        {/* info bar header end */}

        {/* avatar, availability, name, post */}
        <Profile />

        <div id='scrollbar2' className='art-scroll-frame'>
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
          <div className='scrollbar-track scrollbar-track-x'>
            <div className='scrollbar-thumb scrollbar-thumb-x'></div>
          </div>
          <div className='scrollbar-track scrollbar-track-y'>
            <div className='scrollbar-thumb scrollbar-thumb-y'></div>
          </div>
        </div>

        {/* social links */}
        <Social />
      </div>
    </div>
  );
}

export default ArtInfoBar;
