import { styled } from 'styled-components';

import { NavbarButton, NavbarCurrentPage, NavbarList } from './';
import { dataStore } from '../../../store/dataStore';
import { rem } from '../../../utils';

const Navbar = () => {
  const { navbarOpen } = dataStore((state) => ({ navbarOpen: state.navbarOpen }));

  return (
    <Container className='art-menu-bar' $navbarOpen={navbarOpen}>
      <Wrapper id='art-menu-bar-frame' className='art-menu-bar-frame'>
        <NavbarButton />
        <NavbarCurrentPage />
        <Frame className='art-scroll-frame'>
          <NavbarList />
        </Frame>
      </Wrapper>
    </Container>
  );
};
export default Navbar;

const Container = styled.div`
  position: absolute;
  top: 0;
  right: ${rem(-150)};
  bottom: 0;
  width: ${rem(230)};
  height: calc(100vh - ${rem(30)});
  background: var(--c-font-4);
  box-shadow: 0 ${rem(3)} ${rem(8)} 0 var(--c-box-shadow);
  z-index: 99;
  transform: ${({ $navbarOpen }) => $navbarOpen && `translateX(${rem(-150)})`};
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

  @media (max-width: ${rem(920)}) {
    position: absolute;
    right: ${rem(-230)};
    width: ${rem(230)};
    height: 100vh;
    transform: ${({ open }) => open && `translateX(${rem(-230)})`};
  }

  @media (max-width: ${rem(230)}) {
    width: 100vw;
  }
`;

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Frame = styled.div`
  height: auto;
  margin-bottom: ${rem(60)};
`;