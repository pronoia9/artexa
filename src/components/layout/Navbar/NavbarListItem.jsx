import { useLocation, Link } from 'react-router-dom';
import { dataStore } from '../../../store/dataStore';

const NavbarListItem = ({ title, path, submenu }) => {
  const closeNavbar = dataStore((state) => state.closeNavbar);
  let location = useLocation();

  const handleClick = (e) => {
    if (location.pathname === path) e.preventDefault();
    closeNavbar();
  };

  return (
    <li
      className={`menu-item${submenu ? ' menu-item-has-children' : ''}${
        location.pathname === path ? (submenu ? ' current-menu-item' : ' current_page') : ''
      }`}
    >
      <Link to={path} onClick={handleClick}>
        {submenu
          ? submenu.length && submenu.map((li) => <NavbarListItem key={`navbarlist-${title}-${index}`} {...li} />)
          : <span>{title}</span>}
      </Link>
    </li>
  );
};
export default NavbarListItem;
