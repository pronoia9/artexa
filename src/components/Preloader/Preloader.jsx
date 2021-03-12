import React, { useEffect } from 'react';
import LoadingBar from './PercentLineBar';
import pageLoading from './pageLoading.js'

function Preloader() {
  useEffect(pageLoading);

  return (
    <div id='art-preloader' className='art-preloader'>
      <div className='art-preloader-content'>
        <h4>Welcome</h4>
        <LoadingBar />
      </div>
    </div>
  );
}

export default Preloader;