import React from 'react';
import MenuBarHeader from './MenuBarHeader';
import MenuBarCurrentPage from './MenuBarCurrentPage';
import MenuBarScrollFrame from './MenuBarScrollFrame';

function ArtMenuBar(props) {
  return (
    <div className={props.menuActive ? 'art-menu-bar art-active' : 'art-menu-bar'}>
      <div id='art-menu-bar-frame' className='art-menu-bar-frame'>
        <MenuBarHeader menuActive={props.menuActive} setMenuActive={props.setMenuActive} />
        <MenuBarCurrentPage />
        <MenuBarScrollFrame />
      </div>
    </div>
  );
}

export default ArtMenuBar;
