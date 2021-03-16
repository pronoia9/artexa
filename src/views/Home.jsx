import React from 'react';
import Background from '../components/Banner/Background';
import Banner from '../components/Banner/Banner';
import Counters from './Counters';
import History from './History';
import Projects from './Projects';
import Contact from './Contact';
import Blog from './Blog';
import Warning from './Warning';
import Footer from './Footer';
import Scrollbar from 'smooth-scrollbar-react';

export default function Content(props) {
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

      <Background background={props.background} setBackground={props.setBackground} />

      {/* swup container */}
      <div className='transition-fade'>
        {/* scroll frame */}
        <Scrollbar>
          <div id='scrollbar' className='art-scroll-frame' data-scrollbar='true' tabIndex='-1'>
            <div className='scroll-content'>
              {/* heading for banner */}
              <Banner background={props.background} setBackground={props.setBackground} />

              {/* counters */}
              <Counters />

              {/* education history */}
              <History />

              {/* projects */}
              {/* <Projects /> */}

              {/* activities */}

              {/* contact info */}
              {/* <Contact /> */}

              {/* newsletter / posts */}
              <Blog />

              {/* warning */}
              <Warning />

              {/* footer */}
              <Footer />
            </div>
          </div>
        </Scrollbar>
      </div>
    </div>
  );
}
