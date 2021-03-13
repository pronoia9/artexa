import React, { useState } from 'react';
import InfoBar from './components/Sidebar/InfoBar';
import Content from './views/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  // sliding for left side panel
  const [sidebarActive, setSidebarActive] = useState(false);

  // sliding for right side menu
  const [navbarActive, setNavbarActive] = useState(false);

  return (
    <div>
      <div className='art-mobile-top-bar'></div>

      <div className='art-app-wrapper'>
        <div className='art-app-container'>
          <InfoBar sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} />
          <Content
            navbarActive={navbarActive}
            setNavbarActive={setNavbarActive}
            sidebarActive={sidebarActive}
            setSidebarActive={setSidebarActive}
          />
          <Navbar navbarActive={navbarActive} setNavbarActive={setNavbarActive} />
        </div>
      </div>
    </div>
  );
}

export default App;
