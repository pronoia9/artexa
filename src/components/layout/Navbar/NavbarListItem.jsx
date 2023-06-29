import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { styled, css } from 'styled-components';
import { motion } from 'framer-motion';

import { dataStore } from '../../../store/dataStore';
import { navbarMotion, rem } from '../../../utils';

export const NavbarListItem = ({ title, path, index, submenu }) => {
  const { navbarOpen, closeNavbar } = dataStore((state) => ({ navbarOpen: state.navbarOpen, closeNavbar: state.closeNavbar }));
  let location = useLocation();
  const [submenuOpen, setSubMenuOpen] = useState(false);

  const handleClick = (e) => {
    if (submenu) setSubMenuOpen((prev) => !prev);
    else {
      if (location.pathname === path) e.preventDefault();
      closeNavbar();
    }
  };

  return (
    <ListItem
      className={`menu-item ${submenu ? ' menu-item-has-children' : ''}`}
      $index={index + 1}
      $currentPage={location.pathname === path}
      $navbarOpen={navbarOpen}
      $submenuopen={submenu && submenuOpen}
      {...navbarMotion.item}
    >
      {submenu ? (
        <>
          <p onClick={handleClick}>{title}</p>
          <ul className='sub-menu'>
            {submenu.map((li, index) => (
              <NavbarListItem key={`navbarlist-${title}-${index}`} {...li} />
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

const ListItem = styled(motion.li)`
  position: relative;
  width: 100%;
  list-style-type: none;
  transition: 0.55s ease-in-out;
  opacity: ${({ $navbarOpen }) => ($navbarOpen ? 1 : 0)};
  transform: ${({ $navbarOpen }) => ($navbarOpen ? 'translateX(0)' : `translateX(${rem(60)})`)};
  transition: 0.55s ease-in-out;
  ${({ $index }) =>css` transition-delay: ${$index * 0.05}s;`};

  * {
    color: ${({ $currentPage }) => ($currentPage ? 'var(--c-font-2)' : 'var(--c-font-1)')};
    &:hover {
      color: var(--c-font-2);
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
    top: ${rem(12.5)};
    right: ${rem(30)};
    display: inline-block;
    font-size: ${rem(9)};
    font-weight: 900;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    transform: translateX(${rem(5)});
    transition: 0.4s ease-in-out;
  }

  &.menu-item-has-children {
    position: relative;
    padding-left: 0;
    padding-right: 0;

    &:hover { i { transform: rotate(90deg); } }

    .sub-menu {
      position: relative;
      width: 100%;
      max-height: ${({ $submenuopen }) => $submenuopen ? rem(500) : 0};
      padding-left: 0;
      display: block;
      box-shadow: inset 0 ${rem(3)} ${rem(8)} 0 var(--c-box-shadow);
      background: var(--c-bg);
      filter: brightness(95%);
      pointer-events: ${({ $submenuopen }) => $submenuopen ? 'all' : 'none'};
      overflow: hidden;
      transition: max-height 0.6s ease-in-out;

      .menu-item {
        opacity: ${({$submenuopen }) => $submenuopen ? 1 : 0};

        a {
          font-size: ${rem(11)};
        }
      }
    }
  }
`;
