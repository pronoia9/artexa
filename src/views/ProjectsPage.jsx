import React from 'react';
import Scrollbar from 'smooth-scrollbar-react';
import ProjectsAll from '../components/Projects/ProjectsAll';
import Footer from '../components/Footer';

export default function ProjectsPage(props) {
  return (
    // activate/show curtain (css) if any of the panels are open/active
    <div className={props.navbarActive || props.sidebarActive ? 'art-content art-active' : 'art-content'}>
      {/* curtain */}
      <div
        className='art-curtain'
        onClick={() => {
          props.navbarActive && props.setNavbarActive(false);
          props.sidebarActive && props.setSidebarActive(false);
        }}
      ></div>

      {/* swup container */}
      <div className='transition-fade'>
        {/* scroll frame */}
        <Scrollbar>
          <div id='scrollbar' className='art-scroll-frame' data-scrollbar='true' tabIndex='-1'>
            <div className='scroll-content'>
              {/* projects */}
              <ProjectsAll data={props.data.projects} />
              {/* <Test data={props.data.projects} /> */}

              {/* footer */}
              <Footer data={props.data.logos} />
            </div>
          </div>
        </Scrollbar>
      </div>
    </div>
  );
}
