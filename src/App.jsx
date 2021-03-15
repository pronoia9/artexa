import React from 'react';
import Preloader from './components/Preloader/Preloader';
import Wrapper from './Wrapper';
// StyleSheets
import './assets/css/fancybox.min.css';
import './assets/css/styles.css';
import './assets/css/colors/yellow.css';

export default function App() {
  return (
    <div className='art-app'>
      <Wrapper />
      <Preloader />
    </div>
  );
}
