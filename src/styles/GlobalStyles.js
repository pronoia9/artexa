import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
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
    --f-primary: 'Poppins', sans-serif;
    --f-code: var(--f-code);
    --color-text-0: #fafafc;
	  --color-text-1: #8c8c8e;
	  --color-text-2: #646466;
	  --color-text-3: #20202a;
	  --color-text-4: #1e1e28;
	  --color-text-5: #121217;
	  --color-background-0: #191923;
	  --color-background-1: #1e1e28e0;
	  --color-box-shadow-0: #0f0f1433;
	  --color-text-shadow-0: #fafafc66;
	  --color-gradient-1-1: #1e1e28ed;
	  --color-gradient-1-2: #1e1e28f5;
	  --color-gradient-1-3: #1e1e28fc;
	  --color-gradient-1-4: #1e1e28;
	  --color-gradient-2-1: #252532fa;
	  --color-gradient-2-2: #23232dfa;
  }

  *::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export default GlobalStyles;
