import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

import { dataStore } from '../../../store/dataStore';
import { rem } from '../../../utils';

export const NavbarCurrentPage = () => {
  const { routes, navbarOpen } = dataStore((state) => ({ routes: state.routes, navbarOpen: state.navbarOpen }));
  let location = useLocation();

  return (
    <Container className='art-current-page' $navbarOpen={navbarOpen}>
      <span>{routes.find((r) => r.path === location.pathname)?.title}</span>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: ${rem(200)};
  left: ${rem(-62)};
  width: ${rem(200)};
  color: var(--c-font-2);
  font-size: ${rem(11)};
  font-weight: 500;
  letter-spacing: ${rem(1)};
  text-transform: uppercase;
  overflow: hidden;
  opacity: ${({ $navbarOpen }) => $navbarOpen ? 0 : 1};
  transform: rotate(90deg);
  transition: 0.4s ease-in-out;
`;
