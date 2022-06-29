import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavbarListItem({ item, setNavbarActive, currentPage }) {
  let location = useLocation();

  // used to open/close submenu
  // clicking on the main list item will change the active state (toggle it on/off)
  const [active, setActive] = useState(false);
  const { subMenu, path, title, subtitle } = item;

  if (subMenu) {
    return (
      <li className={'menu-item menu-item-has-children' + (currentPage === title ? ' current-menu-item' : '')}>
        <p onClick={() => setActive(!active)}>{title}</p>
        <ul className={'sub-menu' + (active ? ' art-active' : '')}>
          {subMenu.map((li) => (
            <NavbarListItem
              key={li.subtitle}
              item={li}
              setNavbarActive={setNavbarActive}
              currentPage={currentPage}
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
    <li className={'menu-item' + (path === location.pathname ? ' current_page' : '')}>
      <Link
        to={path}
        activeclassname='selected'
        activestyle={{
          color: '#fff',
          textShadow: '0 0 3px var(--color-text-shadow-0)',
        }}
        onClick={(e) => {
          // if the current link items path is the current pathname that means were on the page that this link links to, so dont do anything
          if (path === location.pathname) e.preventDefault();
          // if it's a different path, then change the current page to that links title and set navbar active to false to close it
          else {
            setNavbarActive(false);
            // close all the dropdown menus (submenus)
            const submenus = document.getElementsByClassName('sub-menu');
            for (let i = 0; i < submenus.length; i++) {
              submenus[i].classList.remove('art-active');
            }
            active && setActive(false);
          }
        }}>
        {/* show either the subtitle (if they have it, nested list items will have it), or the title  */}
        <span>{subtitle || title}</span>
      </Link>
    </li>
  );
}