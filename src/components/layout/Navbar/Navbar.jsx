import { NavbarButton, NavbarCurrentPage, NavbarList } from './';
import { dataStore } from '../../../store/dataStore';
import { styled } from 'styled-components';

const Navbar = () => {
  const { navbarOpen } = dataStore((state) => ({ navbarOpen: state.navbarOpen }));

  return (
    <Container className={`art-menu-bar${navbarOpen ? ' art-active' : ''}`} active={`${navbarOpen}`}>
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
  transition: 0.55s ease-in-out;
`;

const Wrapper = styled.div`
  position: relative;
`;