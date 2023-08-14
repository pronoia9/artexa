'use client';

import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import { ThemeProvider, styled } from 'styled-components';
import { motion } from 'framer-motion';

import { Footer, Navbar, Sidebar, Preloader, Background, SmoothScroll, Cursor } from '@/components';
import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyles } from '@/styles';
import { appMotion, pageWrapperMotion, getThemeObject, rem, dataStore } from '@/utils';

export default function RootLayout({ children }) {
  const loadTime = 0; //! TODO: TEMPORARILY DISABLED
  const { loading, setLoading, theme, accent, curtainEnabled, curtainClose } = dataStore((state) => ({
    loading: state.loading,
    setLoading: state.setLoading,
    theme: state.theme,
    accent: state.accent,
    curtainEnabled: state.curtainEnabled,
    curtainClose: state.curtainClose,
  }));

  // Disable loading after 7s maybe?
  useEffect(() => {
    const loader = setTimeout(() => {
      setLoading(false);
    }, loadTime);
    return () => clearTimeout(loader);
  }, []);

  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={getThemeObject(theme)}>
            <ThemeProvider theme={getThemeObject(accent)}>
              <GlobalStyles />

              <AppContainer key='app-appcontainer' className='art-app' {...appMotion.appContainer}>
                {loading ? (<Preloader />) : (
                  <>
                    <TopBar className='art-mobile-top-bar' />
                    
                    <Wrapper className='art-app-wrapper'>
                      <Container className='art-app-container'>
                        <Sidebar />

                        <PageWrapper className='art-content' $curtainEnabled={curtainEnabled} onClick={() => curtainClose()} {...pageWrapperMotion()}>
                          <Curtain className='art-curtain' $curtainEnabled={curtainEnabled} />
                          <Background />
                          <SmoothScroll>
                            {children}
                            <Footer />
                          </SmoothScroll>
                        </PageWrapper>

                        <Navbar />
                      </Container>
                    </Wrapper>
                  </>
                )}
              </AppContainer>

              <Cursor />
            </ThemeProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
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

const PageWrapper = styled(motion.div)`
  position: relative;
  width: 100vw;
  height: calc(100vh - ${rem(30)});
  /* padding-right: ${rem(80)}; */
  padding-right: ${rem(75)};
  overflow: hidden;
  transform: ${({ $curtainEnabled }) => $curtainEnabled && `translateX(${rem(-150)})`};
  transition: 0.55s ease-in-out;

  @media (max-width: ${rem(920)}) {
    position: relative;
    width: 100vw;
    height: 100vh;
    padding-right: 0;
    padding-top: ${rem(70)};
    transform: ${({ $curtainEnabled }) => $curtainEnabled && 'none'};
  }

  @media (max-width: 230px) {
    padding-right: 0;
  }
`;

const Curtain = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(30, 30, 40, 0.88);
  opacity: ${({ $curtainEnabled }) => ($curtainEnabled ? 0.7 : 0)};
  pointer-events: ${({ $curtainEnabled }) => ($curtainEnabled ? 'all' : 'none')};
  z-index: 9;
  transition: 0.55s ease-in-out;

  @media (max-width: ${rem(920)}) {
    pointer-events: ${({ $curtainEnabled }) => $curtainEnabled && 'all'};
    opacity: ${({ $curtainEnabled }) => $curtainEnabled && 1};
  }
`;
