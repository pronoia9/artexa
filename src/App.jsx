import { useState, useEffect } from 'react';
import AnimatedCursor from 'react-animated-cursor';
import { ThemeProvider, styled } from 'styled-components';
import { motion } from 'framer-motion';

import { PageRoutes, Navbar, Sidebar, Scene, Preloader } from './components';
import { dataStore } from './store/dataStore';
import { GlobalStyles } from './styles';
import { appMotion, getThemeObject, rem } from './utils';

export default function App() {
  const [show, setShow] = useState(false);
  const { loading, setLoading, theme, accent, cursorOptions, laptopOpen } = dataStore((state) => ({
    loading: state.loading,
    setLoading: state.setLoading,
    theme: state.theme,
    accent: state.accent,
    cursorOptions: state.cursorOptions,
    laptopOpen: state.laptopOpen,
  }));

  useEffect(() => {
    if (laptopOpen)
      setTimeout(() => {
        setShow(laptopOpen);
      }, 5000);
    else setShow(laptopOpen);
  }, [laptopOpen, show]);

  // Disable loading after 5s + 2s
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 7000);
    return () => clearTimeout();
  }, []);

  return (
    <ThemeProvider theme={getThemeObject(theme)}>
      <ThemeProvider theme={getThemeObject(accent)}>
        <GlobalStyles />

        {'!loading' && show && (
          <AppContainer key='app-appcontainer' className='art-app' {...appMotion.appContainer}>
            {/* {loading && <Preloader />} */}
            <TopBar className='art-mobile-top-bar' />
            <Wrapper className='art-app-wrapper'>
              <Container className='art-app-container'>
                <Sidebar />
                <PageRoutes />
                <Navbar />
              </Container>
            </Wrapper>
          </AppContainer>
        )}

        {/* {!loading && !show && <Scene />} */}
        <Scene />

        <AnimatedCursorContainer className='animated-cursor'>
          <AnimatedCursor {...cursorOptions} />
        </AnimatedCursorContainer>
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

const Container = styled(motion.div)`
  position: relative;
  display: flex;
  flex-wrap: nowrap;

  @media (max-width: ${rem(920)}) {
    width: 100%;
  }
`;

const AnimatedCursorContainer = styled.div`
  position: relative;
  z-index: 99999999999999999999;
`;
