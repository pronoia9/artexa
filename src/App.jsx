import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
// import Scrollbar from 'smooth-scrollbar';
// import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

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
  const scrollRef = useRef();

  // EVENT LISTENER FOR SYSTEM THEME CHANGE
  useEffect(() => {
    const systemThemeWatcher = window.matchMedia('(prefers-color-scheme: dark)');
    systemThemeWatcher.addEventListener('change', (e) => systemThemeChangeHandler(e, setTheme));
    return () => { systemThemeWatcher.removeEventListener('change', systemThemeChangeHandler); };
  }, []);

  // useLayoutEffect(() => {
  //   Scrollbar.use(OverscrollPlugin);
  //   scrollRef.current && Scrollbar.init(scrollRef.current, { damping: 0.5, plugins: {  } });
  // }, []);

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

              <div className={`art-content${overlay ? ' art-active' : ''}`} onClick={() => closeOverlay()}>
                <div className='art-curtain' />
                {/* <Background /> */}

                <div id='transition-fade' className='transition-fade'>
                  <div ref={scrollRef} id='scrollbar' className='art-scroll-frame' data-scrollbar='true' tabIndex='-1'>
                    <div className='scroll-content'>
                      <Routes />
                      <Footer />
                    </div>
                    <div className='scrollbar-track scrollbar-track-x'>
                      <div className='scrollbar-thumb scrollbar-thumb-x' />
                    </div>
                    <div className='scrollbar-track scrollbar-track-y'>
                      <div className='scrollbar-thumb scrollbar-thumb-y' />
                    </div>
                  </div>
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
