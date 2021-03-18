import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavbarListItem(props) {
  // used to open/close submenu
  // clicking on the main list item will change the active state (toggle it on/off)
  const [active, setActive] = useState(false);

  if (props.item.subMenu) {
    return (
      <li
        className={
          'menu-item menu-item-has-children' +
          (props.currentPage === props.item.title ? ' current-menu-item' : '')
        }
      >
        <p onClick={() => setActive(!active)}>{props.item.title}</p>
        <ul className={'sub-menu' + (active ? ' art-active' : '')}>
          {props.item.subMenu.map((li) => (
            <NavbarListItem
              key={li.subtitle}
              item={li}
              setNavbarActive={props.setNavbarActive}
              currentPage={props.currentPage}
              setCurrentPage={props.setCurrentPage}
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
    <li
      className={
        'menu-item' +
        (props.currentPage === props.item.title || props.currentPage === props.item.subtitle
          ? ' current-menu-item'
          : '')
      }
    >
      <Link
        to={props.item.path}
        onClick={(e) => {
          // if the current link items path is the current pathname
          if (props.item.path === window.location.pathname) {
            // that means were on the page that this link links to, so dont do anything
            e.preventDefault();
          }
          // if it's a different path, then change the current page to that links title
          // and set navbar active to false to close it
          else {
            props.setNavbarActive(false);
            props.setCurrentPage(props.item.title);
            if (active) {props.setActive(false);}
          }
        }}
      >
        {/* show either the subtitle (if they have it, nested list items will have it), or the title  */}
        <span>{props.item.subtitle || props.item.title}</span>
      </Link>
    </li>
  );
}
