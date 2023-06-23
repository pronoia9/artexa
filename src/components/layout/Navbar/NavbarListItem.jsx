import { useLocation, Link } from 'react-router-dom';
import { styled, css } from 'styled-components';

import { dataStore } from '../../../store/dataStore';
import { rem } from '../../../utils';

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
  transform: ${({ $navbarOpen }) => ($navbarOpen ? 'translateX(0)' : `translateX(${rem(60)})`)};
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
    padding: ${rem(7)} ${rem(30)};
    font-size: ${rem(13)};
    font-weight: 500;
    letter-spacing: ${rem(1)};
    text-transform: uppercase;
    cursor: pointer;
  }

  &:first-child {
    margin-top: ${rem(15)};
  }

  &:last-child {
    margin-bottom: ${rem(15)};
  }

  &:hover {
    * {
      color: var(--c-font-1);
      text-shadow: 0 0 ${rem(3)} var(--c-font-shadow);
    }
  }
`;
