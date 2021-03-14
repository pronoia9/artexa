import React from 'react';
import Preloader from './components/Preloader/Preloader';
import Wrapper from './Wrapper';
import './assets/css/style.css';

export default function App() {
  return (
    <div className='art-app'>
      <Wrapper />
      <Preloader />
    </div>
  );
}