import React from 'react';
import Background from './Banner/Background';
import Banner from './Banner/Banner';
import History from './History/History';

function Content(props) {
  return (
    <div className={props.menuActive || props.infoActive ? 'art-content art-active' : 'art-content'}>
      {/* curtain */}
      <div className='art-curtain' onClick={() => {
        props.menuActive && props.setMenuActive(false);
        props.infoActive && props.setInfoActive(false);
      }}></div>

      <Background />

      {/* swup container */}
      <div className='transition-fade'>
        {/* scroll frame */}
        <div id='scrollbar' className='art-scroll-frame' data-scrollbar='true' tabindex='-1'>
          <div className='scroll-content'>
            {/* heading for banner */}
            <Banner />
            {/* history, education */}
            <History />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
