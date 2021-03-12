import React, { useState } from 'react';
import Preloader from './preloader/Preloader';
import InfoBar from './info/InfoBar';
import Content from './content/Content';
import MenuBar from './menu/MenuBar';

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