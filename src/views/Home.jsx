import React from 'react';
import Background from '../components/Banner/Background';
import Banner from '../components/Banner/Banner';
import History from './History';
import Scrollbar from 'smooth-scrollbar-react';

function Content(props) {
  return (
    <div className={props.navbarActive || props.sidebarActive ? 'art-content art-active' : 'art-content'}>
      {/* curtain */}
      <div
        className='art-curtain'
        onClick={() => {
          props.navbarActive && props.setNavbarActive(false);
          props.sidebarActive && props.setSidebarActive(false);
        }}
      ></div>

      <Background />

      {/* swup container */}
      <div className='transition-fade'>
        {/* scroll frame */}
        <Scrollbar>
          <div id='scrollbar' className='art-scroll-frame' data-scrollbar='true' tabindex='-1'>
            <div className='scroll-content'>
              {/* heading for banner */}
              <Banner />
              {/* education history */}
              <History />
              {/* projects */}
              
              {/* extracurricular */}
            </div>
          </div>
        </Scrollbar>
      </div>
    </div>
  );
}

export default Content;
