import React, { useEffect } from 'react';
import Load from './Load';
import loadAnimation from './loadAnimation.js'
import './preloader.css';

function Preloader() {
  useEffect(loadAnimation);

  return (
    <div id='art-preloader' className='art-preloader'>
      <div className='art-preloader-content'>
        <h4>Welcome</h4>
        <Load />
      </div>
    </div>
  );
}

export default Preloader;