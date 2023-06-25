import { useEffect } from 'react';
import { ThemeProvider, styled } from 'styled-components';
import AnimatedCursor from 'react-animated-cursor';

import { Routes, Navbar, Sidebar } from './components';
import { dataStore } from './store/dataStore';
import { GlobalStyles } from './styles';
import { getTheme, systemThemeChangeHandler, rem } from './utils';

export default function App() {
  const { theme, setTheme, accent } = dataStore((state) => ({
    theme: state.theme,
    setTheme: state.setTheme,
    accent: state.accent,
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
              <Routes />
              <Navbar />
            </Container>
          </Wrapper>
        </AppContainer>

        <AnimatedCursor
          innerSize={40}
          innerScale={0}
          trailingSpeed={1}
          outerSize={40}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: 'var(--c-accent-5)',
          }}
          outerStyle={{
            border: '3px solid var(--c-accent-5)',
          }}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link',
          ]}
        />
      </ThemeProvider>
    </ThemeProvider>
  );
}

const AppContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;
  padding: ${rem(15)};
  background: var(--c-bg);
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
