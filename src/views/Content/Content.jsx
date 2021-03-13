import React, { useState } from 'react';
import Background from './Banner/Background';
import Banner from './Banner/Banner';
import History from './History/History';

function Content(props) {
  const [currPage, setCurrPage] = useState('Home');

  return (
    <div className={props.menuActive ? 'art-content active' : 'art-content'}>
      {/* curtain */}
      <div className='art-curtain' onClick={() => props.menuActive && props.setMenuActive(false)}></div>

      {currPage === 'Home' && <Background />}

      {/* swup container */}
      <div className='transition-fade' id='swup' data-swup='0'>
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
