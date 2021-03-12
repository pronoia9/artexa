import React from 'react';
import MenuBarHeader from './MenuBarHeader';
import MenuBarCurrentPage from './MenuBarCurrentPage';
import MenuBarScrollFrame from './MenuBarScrollFrame';

function ArtMenuBar(props) {
  return (
    <div className={props.menuActive ? 'art-menu-bar active' : 'art-menu-bar'}>
      <div className='art-menu-bar-frame'>
        <MenuBarHeader menuActive={props.menuActive} setMenuActive={props.setMenuActive} />
        <MenuBarCurrentPage />
        <MenuBarScrollFrame />
      </div>
    </div>
  );
}

export default ArtMenuBar;
