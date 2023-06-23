import { useLocation, Link } from 'react-router-dom';
import { styled, css } from 'styled-components';

import { dataStore } from '../../../store/dataStore';

const NavbarListItem = ({ title, path, submenu, index }) => {
  const closeNavbar = dataStore((state) => state.closeNavbar);
  let location = useLocation();

  const handleClick = (e) => {
    if (location.pathname === path) e.preventDefault();
    closeNavbar();
  };

  return (
    <ListItem
      className={`menu-item${submenu ? ' menu-item-has-children' : ''}${
        location.pathname === path ? (submenu ? ' current-menu-item' : ' current_page') : ''
      }`}
      index={index + 1}
    >
      <Link to={path} onClick={handleClick}>
        {submenu ? submenu.length && submenu.map((li) => <NavbarListItem key={`navbarlist-${title}-${index}`} {...li} />) : <span>{title}</span>}
      </Link>
    </ListItem>
  );
};
export default NavbarListItem;

const ListItem = styled.li`
  width: 100%;
  list-style-type: none;
  transition: 0.55s ease-in-out;
  opacity: 0;
  transform: translateX(60px);
  transition: 0.55s ease-in-out;
  ${({ index }) => css`
    transition-delay: ${index * 0.05}s;
  `};
`;
