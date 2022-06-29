import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavbarListItem({ item, setNavbarActive, currentPage, setCurrentPage }) {
  // used to open/close submenu
  // clicking on the main list item will change the active state (toggle it on/off)
  const [active, setActive] = useState(false);

  if (item.subMenu) {
    return (
      <li className={'menu-item menu-item-has-children' + (currentPage === item.title ? ' current-menu-item' : '')}>
        <p onClick={() => setActive(!active)}>{item.title}</p>
        <ul className={'sub-menu' + (active ? ' art-active' : '')}>
          {item.subMenu.map((li) => (
            <NavbarListItem
              key={li.subtitle}
              item={li}
              setNavbarActive={setNavbarActive}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              active={active}
              setActive={setActive}
            />
          ))}
        </ul>
      </li>
    );
  }
  // else return a normal list item
  return (
    // if the current page is this list item, add a class that will highlight it
    <li className='menu-item'>
      <Link
        to={item.path}
        activeclassname='selected'
        activestyle={{
          color: '#fff',
          textShadow: '0 0 3px var(--color-text-shadow-0)',
        }}
        onClick={(e) => {
          // if the current link items path is the current pathname
          if (item.path === window.location.pathname) {
            // that means were on the page that this link links to, so dont do anything
            e.preventDefault();
          }
          // if it's a different path, then change the current page to that links title
          // and set navbar active to false to close it
          else {
            setNavbarActive(false);
            setCurrentPage(item.title);
            // close all the dropdown menus (submenus)
            const submenus = document.getElementsByClassName('sub-menu');
            for (let i = 0; i < submenus.length; i++) {
              submenus[i].classList.remove('art-active');
            }
            active && setActive(false);
          }
        }}>
        {/* show either the subtitle (if they have it, nested list items will have it), or the title  */}
        <span>{item.subtitle || item.title}</span>
      </Link>
    </li>
  );
}