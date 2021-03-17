import React from 'react';
import Scrollbar from 'smooth-scrollbar-react';
import Background from '../components/Background';
import Banner from '../components/Banner/Banner';
import Counters from '../components/Counter/Counters';
import History from '../components/History/History';
import Projects from '../components/Projects/Projects';
// import Test from './Test';
import Contact from '../components/Contact/Contact';
import Blog from '../components/Blog/Blog';
import Footer from '../components/Footer';

export default function HomePage(props) {
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

      {/* send the background state from wrapper, which changes dynamically (on input) */}
      <Background background={props.background} setBackground={props.setBackground} />

      {/* swup container */}
      <div className='transition-fade'>
        {/* scroll frame */}
        <Scrollbar>
          <div id='scrollbar' className='art-scroll-frame' data-scrollbar='true' tabIndex='-1'>
            <div className='scroll-content'>
              {/* heading for banner */}
              <Banner
                background={props.background}
                setBackground={props.setBackground}
                data={props.data.banner}
              />

              {/* counters */}
              <Counters data={props.data.counters} />

              {/* education history */}
              <History data={props.data.history} />

              {/* projects */}
              <Projects data={props.data.projects} />
              {/* <Test data={props.data.projects} /> */}

              {/* activities */}

              {/* contact info */}
              <Contact data={props.data.contact} />

              {/* newsletter / posts */}
              <Blog data={props.data.blog} />

              {/* footer */}
              <Footer data={props.data.logos} />
            </div>
          </div>
        </Scrollbar>
      </div>
    </div>
  );
}
