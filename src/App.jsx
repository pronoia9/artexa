import React, { useState } from 'react';
import './assets/css/style.css';
import Preloader from './components/Preloader/Preloader';
import InfoBar from './components/Sidebar/InfoBar';
import Content from './components/Content/Content';
import MenuBar from './components/Navbars/MenuBar';

function App() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className='art-app'>
      <div className='art-mobile-top-bar'></div>

      <div className='art-app-wrapper'>
        <div className='art-app-container'>
          <InfoBar />
          <Content menuActive={menuActive} setMenuActive={setMenuActive} />
          <MenuBar menuActive={menuActive} setMenuActive={setMenuActive} />
        </div>
      </div>

      <Preloader />
    </div>
  );
}

export default App;