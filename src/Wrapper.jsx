import React, { useState } from 'react';
import InfoBar from './components/Sidebar/InfoBar';
import Content from './views/Home';
import MenuBar from './components/Navbar/MenuBar';

function App() {
  // sliding for left side panel
  const [infoActive, setInfoActive] = useState(false);

  // sliding for right side menu
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div>
      <div className='art-mobile-top-bar'></div>

      <div className='art-app-wrapper'>
        <div className='art-app-container'>
          <InfoBar infoActive={infoActive} setInfoActive={setInfoActive} />
          <Content
            menuActive={menuActive}
            setMenuActive={setMenuActive}
            infoActive={infoActive}
            setInfoActive={setInfoActive}
          />
          <MenuBar menuActive={menuActive} setMenuActive={setMenuActive} />
        </div>
      </div>
    </div>
  );
}

export default App;
