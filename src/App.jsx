import { useState, useEffect } from 'react';
import AnimatedCursor from 'react-animated-cursor';
import { ThemeProvider, styled } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import { PageRoutes, Navbar, Sidebar, Scene } from './components';
import { dataStore } from './store/dataStore';
import { GlobalStyles } from './styles';
import { appContainerMotion, getThemeObject, rem } from './utils';

export default function App() {
  const [show, setShow] = useState(false);
  const { theme, accent, cursorOptions, laptopOpen } = dataStore((state) => ({
    theme: state.theme,
    accent: state.accent,
    cursorOptions: state.cursorOptions,
    laptopOpen: state.laptopOpen,
  }));

  useEffect(() => {
    if (laptopOpen) setTimeout(() => { setShow(laptopOpen); }, 3000);
    else setShow(laptopOpen);
  }, [laptopOpen, show]);

  return (
    <ThemeProvider theme={getThemeObject(theme)}>
      <ThemeProvider theme={getThemeObject(accent)}>
        <GlobalStyles />

        <AnimatePresence>
          {show !== 'enable temp' && (
            <AppContainer key={`app-appcontainer-${show}`} className='art-app' {...appContainerMotion()}>
              <TopBar className='art-mobile-top-bar' />
              {/* <Preloader /> */}
              <Wrapper className='art-app-wrapper'>
                <Container className='art-app-container'>
                  <Sidebar />
                  <PageRoutes />
                  <Navbar />
                </Container>
              </Wrapper>
            </AppContainer>
          )}
          {!show === 'disable temp' && <Scene />}
        </AnimatePresence>

        <div className='animated-cursor'>
          <AnimatedCursor {...cursorOptions} />
        </div>
      </ThemeProvider>
    </ThemeProvider>
  );
}

const AppContainer = styled(motion.div)`
  position: relative;
  width: 100vw;
  height: 100%;
  padding: ${rem(15)};
  background: var(--c-bg);
  overflow: hidden;
  z-index: 1;

  @media (max-width: ${rem(920)}) {
    padding: 0;
  }
`;

const TopBar = styled.div`
  position: fixed;
  width: 100%;
  height: ${rem(70)};
  padding: 0 ${rem(30)};
  display: none;
  background: var(--c-bg-menu-1);
  box-shadow: 0 ${rem(3)} ${rem(8)} 0 var(--c-box-shadow);
  z-index: 99;

  @media (max-width: ${rem(920)}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: ${rem(1440)};
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  background: var(--c-bg-wrapper);
  background-size: cover;
  box-shadow: 0 ${rem(3)} ${rem(8)} 0 var(--c-box-shadow);
  overflow: hidden;

  @media (max-width: ${rem(920)}) {
    border-radius: 0;
    height: 100vh;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;

  @media (max-width: ${rem(920)}) {
    width: 100%;
  }
`;
