'use client';

import { useState, useEffect } from 'react';
import AnimatedCursor from 'react-animated-cursor';
import { ThemeProvider, styled } from 'styled-components';
import { motion } from 'framer-motion';

// import { Navbar, Sidebar, Scene, Preloader } from '@/components';
import StyledComponentsRegistry from '@/lib/registry';
// import { dataStore } from '@/store/dataStore';
import { GlobalStyles } from '@/styles';
import { cursorOptions, appMotion, getThemeObject, rem } from '@/utils';

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('dark');
  const [accent, setAccent] = useState('pastels');

  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={getThemeObject(theme)}>
            <ThemeProvider theme={getThemeObject(accent)}>
              <GlobalStyles />
              {children}
              <AnimatedCursorContainer className='animated-cursor'>
                <AnimatedCursor {...cursorOptions} />
              </AnimatedCursorContainer>
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

const AnimatedCursorContainer = styled.div`
  position: relative;
  z-index: 99999999999999999999;
`;
