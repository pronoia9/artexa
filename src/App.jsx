import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import AnimatedCursor from 'react-animated-cursor';

import { dataStore } from './store/dataStore';
import { GlobalStyles } from './styles';
import { getTheme, systemThemeChangeHandler } from './utils';

export default function App() {
  const { theme, setTheme } = dataStore((state) => ({ theme: state.theme, setTheme: state.setTheme }));

  // EVENT LISTENER FOR SYSTEM THEME CHANGE
  useEffect(() => {
    const systemThemeWatcher = window.matchMedia('(prefers-color-scheme: dark)');
    systemThemeWatcher.addEventListener('change', (e) => systemThemeChangeHandler(e, setTheme));
    return () => { systemThemeWatcher.removeEventListener('change', systemThemeChangeHandler);};
  }, []);
  
  return (
    <ThemeProvider theme={getTheme(theme)}>
      <GlobalStyles />
      <AnimatedCursor
        innerSize={0}
        innerScale={0}
        outerSize={35}
        outerScale={2}
        outerAlpha={0}
        outerStyle={{
          border: '1px solid var(--c-cursor)',
        }}
        clickables={['a', 'button', '.link']}
      />
    </ThemeProvider>
  );
}
