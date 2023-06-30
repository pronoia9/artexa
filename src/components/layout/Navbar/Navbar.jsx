import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { NavbarButton, NavbarCurrentPage, NavbarList, ThemeButton } from '../..';
import { dataStore } from '../../../store/dataStore';
import { navbarMotion, rem } from '../../../utils';

export const Navbar = () => {
  const { navbarOpen } = dataStore((state) => ({ navbarOpen: state.navbarOpen }));

  return (
    <Container className='art-menu-bar' {...navbarMotion.navbar(navbarOpen)}>
      <Wrapper id='art-menu-bar-frame' className='art-menu-bar-frame'>
        <NavbarButton />
        <NavbarCurrentPage />
        <Frame className='art-scroll-frame'>
          <NavbarList />
          <ThemeButton />
        </Frame>
      </Wrapper>
    </Container>
  );
};

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  right: ${rem(-225)};
  bottom: 0;
  width: ${rem(300)};
  height: calc(100vh - ${rem(30)});
  background: var(--c-bg-menu-1);
  box-shadow: 0 ${rem(3)} ${rem(8)} 0 var(--c-box-shadow);
  z-index: 99;
  isolation: isolate;

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
    right: ${rem(-300)};
    height: 100vh;
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