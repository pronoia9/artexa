import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Scrollbar } from 'smooth-scrollbar-react';

import { Routes, Navbar, Sidebar, Footer } from './components';
import { dataStore } from './store/dataStore';
import { GlobalStyles } from './styles';
import { getTheme, systemThemeChangeHandler } from './utils';

export default function App() {
  const { theme, setTheme, accent, sideMenusOpen, closeSideMenus } = dataStore((state) => ({
    theme: state.theme,
    setTheme: state.setTheme,
    accent: state.accent,
    sideMenusOpen: state.sideMenusOpen,
    closeSideMenus: state.closeSideMenus,
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
        <div className='art-app'>
          <div className='art-mobile-top-bar' />
          {/* <Preloader /> */}

          <div className='art-app-wrapper'>
            <div className='art-app-container'>
              <Sidebar />

              <div className={`art-content${sideMenusOpen ? ' art-active' : ''}`} onClick={() => closeSideMenus()}>
                <div className='art-curtain' />
                {/* <Background /> */}

                <div id='transition-fade' className='transition-fade'>
                  <Scrollbar id='scrollbar' className='art-scroll-frame' damping={0.5} plugins={{ overscroll: { effect: 'bounce' } }}>
                    <div className='scroll-content'>
                      <Routes />
                      <Footer />
                    </div>
                  </Scrollbar>
                </div>
              </div>

              <Navbar />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </ThemeProvider>
  );
}
