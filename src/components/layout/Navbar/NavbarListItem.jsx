import { useLocation, Link } from 'react-router-dom';
import { styled, css } from 'styled-components';

import { dataStore } from '../../../store/dataStore';

const NavbarListItem = ({ title, path, index }) => {
  const { navbarOpen, closeNavbar } = dataStore((state) => ({ navbarOpen: state.navbarOpen, closeNavbar: state.closeNavbar }));
  let location = useLocation();

  const handleClick = (e) => {
    if (location.pathname === path) e.preventDefault();
    closeNavbar();
  };

  return (
    <ListItem className='menu-item' $index={index + 1} $currentPage={location.pathname === path} $navbarOpen={navbarOpen}>
      <Link to={path} onClick={handleClick}>
        <span>{title}</span>
      </Link>
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
  transform: ${({ $navbarOpen }) => ($navbarOpen ? 'translateX(0)' : 'translateX(60px)')};
  transition: 0.55s ease-in-out;
  ${({ $index }) => css`transition-delay: ${$index * 0.05}s;`};

  * {
    color: ${({ $currentPage }) => ($currentPage ? 'var(--c-font-1)' : 'var(--c-font-2)')};
  }

  a, p, span {
    transition: 0.2s ease-in-out;
  }

  a, p {
    display: inline-block;
    width: 100%;
    margin-bottom: 0;
    padding: 7px 30px;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
  }

  &:first-child, &:last-child {
    margin-top: 15px;
  }

  &:hover {
    * {
      color: var(--c-font-1);
      text-shadow: 0 0 3px var(--c-font-shadow);
    }
  }
`;
