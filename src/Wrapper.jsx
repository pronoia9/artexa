import React, { useState } from 'react';
import InfoBar from './views/Sidebar/InfoBar';
import Content from './views/Content/Home';
import MenuBar from './views/Navbars/MenuBar';

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
