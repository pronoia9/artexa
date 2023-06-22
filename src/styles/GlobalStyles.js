import { createGlobalStyle } from 'styled-components';

import { normalize, reset, stylesheet } from '.';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${reset}
  ${stylesheet}

  :root {
    --c-background: ${({ theme }) => theme.background};
    --c-background2: ${({ theme }) => theme.background2};
    --c-font: ${({ theme }) => theme.font};
    --c-accent: ${({ theme }) => theme.accent};
    --c-cursor: ${({ theme }) => theme.accent};
    --f-primary: '';
    --f-secondary: '';
    --f-tertiary: '';
    --f-code: '';
  }

  *::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  html {
    background: var(--c-background);
    transition: background 0.5s ease-in-out;
  }

  body, #root {
    width: 100%;
    min-width: 100vw;
    height: 100%;
    min-height: 100vh;
    color: var(--c-font);
    overflow-x: hidden;
    transition: color 0.5s ease-in-out;
  }
`;

export default GlobalStyles;
