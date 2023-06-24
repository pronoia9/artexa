import { useLocation, Link } from 'react-router-dom';
import { styled, css } from 'styled-components';

import { dataStore } from '../../../store/dataStore';
import { rem } from '../../../utils';
import { useState } from 'react';

const NavbarListItem = ({ title, path, index, subMenu }) => {
  const { navbarOpen, closeNavbar } = dataStore((state) => ({ navbarOpen: state.navbarOpen, closeNavbar: state.closeNavbar }));
  let location = useLocation();
  const [submenuOpen, setSubMenuOpen] = useState(false);

  const handleClick = (e) => {
    if (subMenu) setSubMenuOpen((prev) => !prev);
    else {
      if (location.pathname === path) e.preventDefault();
      closeNavbar();
    }
  };

  return (
    <ListItem
      className={`menu-item ${subMenu ? ' menu-item-has-children' : ''}`}
      $index={index + 1}
      $currentPage={location.pathname === path}
      $navbarOpen={navbarOpen}
    >
      {subMenu ? (
        <>
          <p onClick={handleClick}>{title}</p>
          <ul className={`sub-menu ${submenuOpen ? ' art-active' : ''}`} $submenuOpen={submenuOpen}>
            {subMenu.map((li, index) => (
              <NavbarListItem key={`navbarlist-submenu-${index}`} {...li} />
            ))}
          </ul>
          <i className='fa-solid fa-chevron-right' />
        </>
      ) : (
        <Link to={path} onClick={handleClick}>
          {title}
        </Link>
      )}
    </ListItem>
  );
};
export default NavbarListItem;

const ListItem = styled.li`
  position: relative;
  width: 100%;
  list-style-type: none;
  transition: 0.55s ease-in-out;
  opacity: ${({ $navbarOpen }) => ($navbarOpen ? 1 : 0)};
  transform: ${({ $navbarOpen }) => ($navbarOpen ? 'translateX(0)' : `translateX(${rem(60)})`)};
  transition: 0.55s ease-in-out;
  ${({ $index }) => css`transition-delay: ${$index * 0.05}s;`};

  * {
    color: ${({ $currentPage }) => ($currentPage ? 'var(--c-font-1)' : 'var(--c-font-2)')};
    &:hover {
      color: var(--c-font-1);
      text-shadow: 0 0 ${rem(3)} var(--c-font-shadow);
    }
  }

  a, p, span {
    transition: 0.2s ease-in-out;
  }

  a, p {
    display: inline-block;
    width: 100%;
    margin-bottom: 0;
    padding: ${rem(7)} ${rem(30)};
    font-size: ${rem(13)};
    font-weight: 500;
    letter-spacing: ${rem(1)};
    text-transform: uppercase;
    cursor: pointer;
  }

  &:first-child { margin-top: ${rem(15)}; }
  &:last-child { margin-bottom: ${rem(15)}; }

  /* Submenu */
  i {
    position: absolute;
    top: 12.5px;
    right: 30px;
    display: inline-block;
    font-size: 9px;
    font-weight: 900;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    transform: translateX(5px);
    transition: 0.4s ease-in-out;
  }

  &.menu-item-has-children {
    position: relative;
    padding-left: 0;
    padding-right: 0;
    
    &:hover {
      i {
        /* color: var(--c-font-1); */
        /* text-shadow: 0 0 ${rem(3)} var(--c-font-shadow); */
        transform: rotate(90deg);
      }
    } 
    
    .sub-menu {
      padding-left: 0;
      width: 100%;
      display: block;
      position: relative;
      overflow: hidden;
      pointer-events: none;
      box-shadow: inset 0 3px 8px 0 var(--color-box-shadow-0);
      background: var(--color-text-3);
      filter: brightness(95%);
      max-height: 0;
      transition: max-height 0.6s ease-in-out;
  
      .menu-item {
        position: relative;
        opacity: 0;
        transition: 0.55s ease-in-out;
  
        a {
          padding: 7px 30px;
          font-weight: 400;
          font-size: 10px;
        }
  
        .sub-menu {
          margin: 0;
          max-height: 0;
          transition: max-height 1s ease-in-out;
        }
  
        &:hover {
          &.menu-item-has-children:after {
            transform: rotate(90deg);
          }
  
          .sub-menu {
            max-height: 500px;
          }
        }
  
        &:first-child { margin-top: 15px; }
        &:last-child { margin-bottom: 15px; }
      }
  
      &.art-active {
        pointer-events: all;
        max-height: 500px;
  
        .menu-item {
          opacity: 1;
        }
      }
    }
  }

`;
