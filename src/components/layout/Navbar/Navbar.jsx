import { NavbarButton, NavbarCurrentPage, NavbarList } from './';
import { dataStore } from '../../../store/dataStore';
import { styled } from 'styled-components';

const Navbar = () => {
  const { navbarOpen } = dataStore((state) => ({ navbarOpen: state.navbarOpen }));

  return (
    <Container className='art-menu-bar' $navbarOpen={navbarOpen}>
      <Wrapper id='art-menu-bar-frame' className='art-menu-bar-frame'>
        <NavbarButton />
        <NavbarCurrentPage />
        <NavbarList />
      </Wrapper>
    </Container>
  );
};
export default Navbar;

const Container = styled.div`
  position: absolute;
  top: 0;
  right: -150px;
  bottom: 0;
  width: 230px;
  height: calc(100vh - 30px);
  background: var(--c-font-4);
  box-shadow: 0 3px 8px 0 var(--c-box-shadow);
  z-index: 99;
  transform: ${({ $navbarOpen }) => $navbarOpen && 'translateX(-150px)'};
  transition: 0.55s ease-in-out;

  a {
    display: none;
    visibility: hidden;
    opacity: 0;

    &:first-child {
      visibility: visible;
      opacity: 1;
      display: block;
    }
  }

  @media (max-width: 920px) {
    position: absolute;
    right: -230px;
    width: 230px;
    height: 100vh;
    transform: ${({ open }) => open && 'translateX(-230px)'};
  }

  @media (max-width: 230px) {
    width: 100vw;
  }
`;

const Wrapper = styled.div`
  position: relative;
`;