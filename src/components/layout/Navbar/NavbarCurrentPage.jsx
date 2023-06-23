import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

import { dataStore } from '../../../store/dataStore';

const NavbarCurrentPage = () => {
  const { routes, navbarOpen } = dataStore((state) => ({ routes: state.routes, navbarOpen: state.navbarOpen }));
  let location = useLocation();

  return (
    <Container className='art-current-page' $navbarOpen={navbarOpen}>
      <span>{routes.find((r) => r.path === location.pathname)?.title}</span>
    </Container>
  );
};
export default NavbarCurrentPage;

const Container = styled.div`
  position: absolute;
  top: 200px;
  left: -62px;
  width: 200px;
  color: var(--c-font-1);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  overflow: hidden;
  opacity: ${({ $navbarOpen }) => $navbarOpen ? 0 : 1};
  transform: rotate(90deg);
  transition: 0.4s ease-in-out;
`;
