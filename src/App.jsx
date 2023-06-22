import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import SmoothScrollbar from 'smooth-scrollbar';
import Scrollbar from 'react-smooth-scrollbar';

import { Routes, Navbar, Sidebar, Footer } from './components';
import { dataStore } from './store/dataStore';
import { GlobalStyles } from './styles';
import { getTheme, systemThemeChangeHandler } from './utils';

export default function App() {
  const { theme, setTheme, accent, overlay, closeOverlay } = dataStore((state) => ({
    theme: state.theme,
    setTheme: state.setTheme,
    accent: state.accent,
    overlay: state.overlay,
    closeOverlay: state.closeOverlay,
  }));

  const scrollbarOptions = {
    damping: 0.5,
    thumbMinSize: 20,
    renderByPixels: true,
    alwaysShowTracks: false,
    continuousScrolling: true,
    plugins: { SmoothScrollbar },
  };

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
          <div className='art-app-wrapper'>
            <div className='art-app-container'>
              <Sidebar />
              <div className={`art-content${overlay && ' art-active'}`}>
                <div className='art-curtain' onClick={() => closeOverlay()} />
                {/* <Background /> */}
                <div id='transition-fade' className='transition-fade'>
                  {/* <Scrollbar className='content-scrollbar' {...scrollbarOptions}> */}
                    <div id='scrollbar' className='art-scroll-frame' data-scrollbar='true' tabIndex='-1'>
                      <div className='scroll-content'>
                        <Routes />
                        <Footer />
                      </div>
                    </div>
                  {/* </Scrollbar> */}
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
