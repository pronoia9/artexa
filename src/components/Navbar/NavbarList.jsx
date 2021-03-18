import React from 'react';
import NavbarListItem from './NavbarListItem';

export default function NavbarList(props) {
  return (
    <div className='art-scroll-frame'>
      <nav id='swupMenu' data-swup='1'>
        <ul className='main-menu'>
          {props.data.map((li) => (
            <NavbarListItem
              key={li.title}
              item={li}
              setNavbarActive={props.setNavbarActive}
              currentPage={props.currentPage}
              setCurrentPage={props.setCurrentPage}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}
