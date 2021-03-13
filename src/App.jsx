import React, { useState } from 'react';
import './assets/css/style.css';
import Preloader from './views/Preloader/Preloader';
import InfoBar from './views/Sidebar/InfoBar';
import Content from './views/Content/Content';
import MenuBar from './views/MenuBar/MenuBar';

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