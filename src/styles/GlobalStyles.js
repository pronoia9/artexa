import { createGlobalStyle } from 'styled-components';

import { normalize, reset } from '.';

const GlobalStyles = createGlobalStyle`
  /* ${normalize} */
  /* ${reset} */

  :root {
    /* COLORS */
    --c-background-1: ${({ theme }) => theme.background1};
    --c-background-2: #1e1e28e0;
    --c-background-fancybox: #20202afa;
    --c-background-swiper-pagination: ${({ theme }) => theme.backgroundSwiperPagination};
    --c-box-shadow: #0f0f1433;
    --c-font-shadow: #fafafc66;
    --c-timelineShadow: ${({ theme }) => theme.timelineShadow};
    --c-font: ${({ theme }) => theme.font};
    --c-font-1: ${({ theme }) => theme.font1};
    --c-font-2: ${({ theme }) => theme.font2};
    --c-font-3: ${({ theme }) => theme.font3};
    --c-font-4: #20202a;
    --c-font-5: #1e1e28;
    --c-font-6: ${({ theme }) => theme.font6};
    --c-accent-1: ${({ theme }) => theme.accent1};
    --c-accent-2: ${({ theme }) => theme.accent2};
    --c-accent-3: ${({ theme }) => theme.accent3};
    --c-accent-4: ${({ theme }) => theme.accent4};
    --c-accent-5: ${({ theme }) => theme.accent5};
    --c-gradient: linear-gradient(0.25turn, var(--c-primary-1), var(--c-primary-2), var(--c-primary-3), var(--c-primary-4));
    --c-gradient-1: ${({ theme }) => theme.gradient1};
    --c-gradient-2: ${({ theme }) => theme.gradient2};
    --c-gradient-3: ${({ theme }) => theme.gradient3};
    --c-gradient-4: ${({ theme }) => theme.gradient4};
    --c-gradient-5: ${({ theme }) => theme.gradient5};
    --c-gradient-6: ${({ theme }) => theme.gradient6};
    --c-gradient-7: ${({ theme }) => theme.gradient7};
    --c-gradient-8: ${({ theme }) => theme.gradient8};
    --c-gradient-9: ${({ theme }) => theme.gradient9};
    --c-gradient-10: ${({ theme }) => theme.gradient10};
    --c-cursor: ${({ theme }) => theme.accent - 1};
    /* FONTS */
    --f-primary: 'Poppins', sans-serif;
    --f-code: var(--f-code);
  }

  *::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export default GlobalStyles;
