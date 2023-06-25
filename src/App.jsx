import { useEffect } from 'react';
import { ThemeProvider, styled } from 'styled-components';
import { Scrollbar } from 'smooth-scrollbar-react';

import { Routes, Background, Navbar, Sidebar, Footer } from './components';
import { dataStore } from './store/dataStore';
import { GlobalStyles } from './styles';
import { getTheme, systemThemeChangeHandler, rem } from './utils';

export default function App() {
  const { theme, setTheme, accent, curtainEnabled, curtainClose } = dataStore((state) => ({
    theme: state.theme,
    setTheme: state.setTheme,
    accent: state.accent,
    curtainEnabled: state.curtainEnabled,
    curtainClose: state.curtainClose,
  }));

  // EVENT LISTENER FOR SYSTEM THEME CHANGE
  useEffect(() => {
    const systemThemeWatcher = window.matchMedia('(prefers-color-scheme: dark)');
    systemThemeWatcher.addEventListener('change', (e) => systemThemeChangeHandler(e, setTheme));
    return () => { systemThemeWatcher.removeEventListener('change', systemThemeChangeHandler); };
  }, []);

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <ThemeProvider theme={getTheme(accent)}>
        <GlobalStyles />
        <AppContainer className='art-app'>
          <TopBar className='art-mobile-top-bar' />
          {/* <Preloader /> */}

          <Wrapper className='art-app-wrapper'>
            <Container className='art-app-container'>
              <Sidebar />

              <Content className='art-content' $curtainEnabled={curtainEnabled} onClick={() => curtainClose()}>
                <Curtain className='art-curtain' $curtainEnabled={curtainEnabled} />
                <Background />

                <div id='transition-fade' className='transition-fade'>
                  <Scrollbar id='scrollbar' className='art-scroll-frame' damping={0.5} plugins={{ overscroll: { effect: 'bounce' } }}>
                    <div className='scroll-content'>
                      <Routes />
                      <Footer />
                    </div>
                  </Scrollbar>
                </div>
              </Content>

              <Navbar />
            </Container>
          </Wrapper>
        </AppContainer>
      </ThemeProvider>
    </ThemeProvider>
  );
}

const AppContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;
  padding: ${rem(15)};
  background: var(--c-bg-1);
  overflow: hidden;

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

const Content = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - ${rem(30)});
  padding-right: ${rem(80)};
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

    .art-scroll-frame {
      height: calc(100vh - ${rem(70)});
    }
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
