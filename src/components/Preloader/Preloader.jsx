import React, { useEffect } from 'react';
import {loading} from '../../assets/js/main.js';

export default function Preloader(props) {
  useEffect(loading, []);

  return (
    <div id='art-preloader' className='art-preloader'>
      <div className='art-preloader-content'>
        <h4>Welcome</h4>
        <div id='preloader' className='art-preloader-load'></div>
      </div>
    </div>
  );
}