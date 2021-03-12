import React from 'react';
import MenuBarHeader from './MenuBarHeader';
import CurrentPage from './CurrentPage';
import ScrollFrame from './ScrollFrame';

function ArtMenuBar(props) {
  return (
    <div className={props.menuActive ? 'art-menu-bar active' : 'art-menu-bar'}>
      <div className='art-menu-bar-frame'>
        <MenuBarHeader menuActive={props.menuActive} setMenuActive={props.setMenuActive} />
        <CurrentPage />
        <ScrollFrame />
      </div>
    </div>
  );
}

export default ArtMenuBar;
