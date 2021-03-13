import React from 'react';
import Preloader from './views/Preloader/Preloader';
import Wrapper from './Wrapper';
import './assets/css/style.css';

function App() {
  return (
    <div className='art-app'>
      <Wrapper />
      <Preloader />
    </div>
  );
}

export default App;