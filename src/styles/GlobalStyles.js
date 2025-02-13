'use client';

import { createGlobalStyle } from 'styled-components';

// import { rem } from '@/utils';

export const GlobalStyles = createGlobalStyle`
  @font-face { font-family: 'Caveat';         src: url('/fonts/Caveat/Caveat-VariableFont_wght.ttf')   format('truetype'); }
  @font-face { font-family: 'Caveat Brush';   src: url('/fonts/Caveat_Brush/CaveatBrush-Regular.ttf')  format('truetype'); }
  @font-face { font-family: 'Operator Mono';  src: url('/fonts/Operator_Mono/Operator Mono_Light Nerd_Font_Complete.otf'); }

  :root {
    --c-bg: ${({ theme }) => theme.bg};
    --c-bg-2: ${({ theme }) => theme.bg2};
    --c-bg-wrapper: ${({ theme }) => theme.bgWrapper};
    --c-bg-menu-1: ${({ theme }) => theme.bgMenu1};
    --c-bg-menu-2: ${({ theme }) => theme.bgMenu2};

    --c-bg-img-hover: ${({ theme }) => theme.bgImageHover}; /* the hover icon bg */
    --c-bg-card-overlay: ${({ theme }) => theme.bgCardOverlay};
    --c-box-shadow: rgba(15, 15, 20, 0.2);
    --c-font-shadow: rgba(250, 250, 252, 0.4);

    --c-font-1: ${({ theme }) => theme.font1};
    --c-font-2: ${({ theme }) => theme.font2};
    --c-font-3: ${({ theme }) => theme.font3};
    --c-font-dark: #20202a;
    --c-font-light: #efefef;

    --c-accent-1: ${({ theme }) => theme.accent1};
    --c-accent-2: ${({ theme }) => theme.accent2};
    --c-accent-3: ${({ theme }) => theme.accent3};
    --c-accent-4: ${({ theme }) => theme.accent4};
    --c-accent-5: ${({ theme }) => theme.accent5};

    --c-gradient-1: ${({ theme }) => theme.gradient1};
    --c-gradient-2: ${({ theme }) => theme.gradient2};
    --c-gradient-accent-1: linear-gradient(0.25turn, var(--c-accent-2), var(--c-accent-3), var(--c-accent-4), var(--c-accent-5));
    --c-gradient-accent-2: linear-gradient(45deg, var(--c-accent-1), var(--c-accent-2), var(--c-accent-3), var(--c-accent-4), var(--c-accent-5));

    --c-cursor: var(--c-accent-1);
    
    --f-primary: 'Poppins';
    --f-secondary: 'Caveat';
    --f-tertiary: 'Caveat Brush';
    --f-code: 'Operator Mono', monospace;
  }

  html, body, #root {
    width: 100vw;
    min-width: 100vw;
    height: 10vh;
    min-height: 100vh;
    background: var(--c-bg);
  }

  html, body {
    font-family: var(--f-primary);
    color: var(--c-font-1);
    font-size: 13px;
    line-height: 1.7;
    font-weight: 400;
    letter-spacing: .25px;
    ${'' /* font-smooth: subpixel-antialiased; */}
    font-smooth: antialiased;
    -webkit-font-smoothing: antialiased;
  }

  * {
      ${'' /* transition:  */}
      ${'' /* background-color 0.6s ease-in-out,  */}
      ${'' /* background 0.6s ease-in-out,  */}
      ${'' /* color 0.6s ease-in-out !important; */}
    cursor: none !important;

    &::-webkit-scrollbar {
      display: none;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  }

  body > canvas {
    z-index: 1 !important;
  }

/* ----------------------------- Author: Nazar Miller ----------------------------- */
                                                                                    /*-
1. common
      - fonts
      - text defaults
      - title defaults
      - text config
      - container
      - buttons frame
      - suptitle
      - divider
      - image defaults
      - link defaults
      - table
      - quote
      - list
2. link
3. buttons
4. space
5. app marcup
      - top background
      - preloader
      - scroll frame
      - app
      - mobile top bar
      - info bar
      - content
      - menu bar
      - marcup media queries
6. info bar
      - header
      - name
      - language skills
      - hard skills
      - knowledge
      - info bar links
      - social links
      - progresbar color
7. menu bar
      - main menu
      - current page title
8. content
      - section title
      - card
      - banner
      - typing code
      - counters
      - timeline
      - contact form
      - blog
      - pagination
      - logos
9. portfolio
      - filter
      - portfolio items
      - touch device querie
      - single project
      - fancybox customization
10. media queries
11. burger button
12. transitions
      - in animation
      - out animation 
                                                                                    -*/

/* ------------------------------ common ------------------------------ */
/* ----- title defaults ----- */

h1, h2, h3, h4, h5, h6 {
  margin-bottom: 0;
  color: var(--c-font-2);
  font-family: var(--f-secondary);
  font-weight: 700;
}

h1 {
  font-size: 52px;
  font-weight: 800;
}

h4 {
  font-size: 17px;
  font-weight: 600;
}

h5 {
  font-size: 14px;
  font-weight: 600;
}

h6 {
  font-size: 12px;
  font-weight: 400;
}

svg {
  fill: var(--c-font-1);

  &:hover {
    text-shadow: 0 0 3px var(--c-font-shadow);
    fill: var(--c-accent-1);
  }
}


/* ----- text config ----- */

.art-sm-text {
  font-size: 11px;
}

.art-lg-text {
  font-size: 16px;
}

.art-white {
  color: var(--c-font-2);
}

.art-accent {
  color: var(--c-accent-1);
}

/* ----- buttons frame ----- */

.art-buttons-frame a {
  margin-right: 15px;
}

/* ----- suptitle ----- */

.art-el-suptitle {
  margin-top: 5px;
  color: var(--c-font-3);
  font-style: italic;
  font-size: 11px;
}

/* ----- divider ----- */

.art-ls-divider {
  background: var(--c-font-3);
  width: 100%;
  height: 1px;
  opacity: 0.3;
}

/* ----- image defaults ----- */

.art-img-default {
  width: 100%;
  box-shadow: 0 3px 8px 0 var(--c-box-shadow);
}

/* ----- link defaults ----- */

a {
  text-decoration: none;
  color: var(--c-font-1);

  &:hover {
    text-decoration: none;
    color: var(--c-font-2);
  }

  &:focus {
    outline: inherit;
  }
}

/* ----- table ----- */

.art-table {
  color: var(--c-font-1);

  ul {
    padding: 0;
    margin: 0;

    li {
      list-style-type: none;
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

/* ----- quote ----- */

blockquote {
  margin-top: 30px;
  margin-bottom: 30px;
  background: var(--c-accent-1);
  color: rgb(25, 25, 35);
  padding: 30px;
  padding-left: 35px;
  font-weight: 400;
  font-style: italic;
  font-size: 14px;
  box-shadow: 0 1px 4px 0 var(--c-box-shadow);
  position: relative;

  i:first-child {
    position: absolute;
    top: 5px;
    left: 9px;
    color: var(--c-font-2);
    font-size: 18px;
    font-weight: 900;
    opacity: 0.5;
  }

  i:last-child {
    position: absolute;
    bottom: 5px;
    right: 9px;
    color: var(--c-font-2);
    font-weight: 900;
    font-size: 18px;
    opacity: 0.5;
    transform: rotate(180deg);
  }
}

/* ----- list ----- */

.art-custom-list {
  padding-left: 25px;

  li {
    position: relative;
    list-style-type: none;
    color: var(--c-font-2);
    margin-bottom: 5px;

    &:before {
      content: '';
      position: absolute;
      top: 4px;
      left: -25px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: solid 2px var(--c-accent-1);
      background: transparent;
      box-shadow: 0 3px 8px 0 var(--c-box-shadow);
    }
  }
}

/* ------------------------------ link ------------------------------ */

.art-link {
  position: relative;
  margin-right: 15px;
  margin-bottom: 10px;
  display: inline-block;
  color: var(--c-font-1);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.4s ease-in-out;

  svg {
    fill: var(--c-font-1);
  }

  &:hover {
    color: var(--c-font-2);
    text-shadow: 0 0 3px var(--c-font-shadow);

    svg {
      fill: var(--c-font-2);
      text-shadow: 0 0 3px var(--c-font-shadow);
    }
  }

  &.art-white-link {
    color: var(--c-font-2);

    svg {
      fill: var(--c-font-2);
    }

    &:hover {
      color: var(--c-font-2);
      text-shadow: 0 0 3px var(--c-font-shadow);
      transform: translateX(5px);

      svg {
        fill: var(--c-font-2);
        text-shadow: 0 0 3px var(--c-font-shadow);
      }
    }
  }

  &.art-color-link {
    color: var(--c-accent-1);

    svg {
      fill: var(--c-accent-1)
    }

    &:hover {
      color: var(--c-accent-2);
      text-shadow: 0 0 3px var(--c-font-shadow);
      transform: translateX(5px);

      svg {
        fill: var(--c-accent-2);
        text-shadow: 0 0 3px var(--c-font-shadow);
      }
    }
  }

  &.art-w-chevron {
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;

    i, svg {
      font-weight: 900;
      font-style: normal;
      font-variant: normal;
      text-rendering: auto;
      font-size: 9px;
      transform: translateX(5px);
      transition: 0.4s ease-in-out;
    }

    &:hover {
      transform: translateX(0);

      i, svg {
        text-shadow: 0 0 3px var(--c-font-shadow);
        transform: translateX(10px);
        fill: var(--c-accent-2);
      }
    }
  }
}

/* ------------------------------ button ------------------------------ */

button {
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  background: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }
}

.btn-v2 {
  cursor: pointer;
}

/* ------------------------------ space ------------------------------ */

.p-30-0  { padding-top:   30px;   padding-bottom: 0; }
.p-0-30  { padding-top:      0;   padding-bottom: 30px; }
.p-30-30 { padding-top:   30px;   padding-bottom: 30px; }
.p-30-15 { padding-top:   30px;   padding-bottom: 15px; }
.p-15-15 { padding-top:   15px;   padding-bottom: 15px; }
.p-15-0  { padding-top:   15px;   padding-bottom: 0; }
.p-60-0  { padding-top:   60px;   padding-bottom: 0; }
.p-230-0 { padding-top:  230px;   padding-bottom: 0; }
.mb-10   { margin-bottom: 10px; }
.mb-15   { margin-bottom: 15px; }
.mb-25   { margin-bottom: 25px; }
.mb-30   { margin-bottom: 30px; }

@media (max-width: 1400px) {
  .p-lg-30-0 { padding-top: 30px; padding-bottom: 0; }
}

@media (max-width: 920px) {
  .p-md-15-0 { padding-top: 15px; padding-bottom: 0; }
}

/* ------------------------------ animation ------------------------------ */
@keyframes puls {
  0% {
    transform: scale(0.6);
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 0;
  }
}

/* ------------------------------ content ------------------------------ */

.art-card {
  padding: 30px;
  background: var(--c-bg-card-overlay);
  box-shadow: 0 3px 8px 0 var(--c-box-shadow);
}

*:has(& > .art-item-hover) {
  &:hover {
    .art-item-hover {
      opacity: 0.7;

      &:hover {
        opacity: 1;
        transform: scale(1.07);
      }
    }
  }
}

/* ------------------------------ portfolio ------------------------------ */

.art-portfolio-item-frame, .art-hobbies-item-frame {
  display: block;
  width: 100%;
  outline: inherit;
  overflow: hidden;
  box-shadow: 0 3px 8px 0 var(--c-box-shadow);
  position: relative;
  padding-bottom: 60%;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    object-position: center;
    filter: brightness(85%) blur(0);
    transition: 0.4s ease-in-out;
  }

  &:hover { 
    img {
      transform: scale(1.07);
      filter: brightness(100%) blur(0);
    }
  }
}

/* ----- touch device ----- */
/* @media (pointer: coarse) {
  .art-grid .art-grid-item {
    .art-item-description {
      position: relative;
      left: 0;
      width: 100%;
      transform: translateY(0);
    }

    &:hover .art-item-description {
      transform: none;
    }
  }
} */

/* .art-project-category {
  color: var(--c-font-3);
  margin-left: auto;
  display: inline;
  background: var(--c-bg);
  padding: 5px 15px;
  border-radius: 15px;
  box-shadow: inset 0 3px 8px 0 var(--c-box-shadow);
  font-size: 10px;
} *

/* ------------------------------ fancybox ------------------------------ */

.fancybox__container {
  /* margin: 15px; */
  /* width: calc(100vw - 30px); */
  /* height: calc(100vh - 30px); */
  border: 15px solid var(--c-bg);
  overflow: hidden;
  
  .fancybox__backdrop {
    background: #20202afa;
  }

  .fancybox__is-open .fancybox__bg {
    opacity: 1;
  }

  .fancybox__toolbar {
    background: var(--c-bg-img-hover);
    display: flex;
    /* width: calc(100vw - 30px); */
    justify-content: flex-end;
    align-items: center;
    height: 70px;
    box-shadow: 0 3px 8px 0 var(--c-box-shadow);
    z-index: 999999;
    padding: 0 17px;
    transition: 0.55s ease-in-out;
  }

  .f-button {
    background: transparent;
    color: var(--c-font-1);

    &:hover {
      color: var(--c-font-2);
    }

    svg {
      width: 20px;
    }
  }

  .fancybox__slide {
    padding: 130px 0 60px;
  }

  .fancybox__navigation .fancybox__button {
    background-color: transparent;
    margin: 0 15px;
  }

  .fancybox__infobar {
    top: 0;
    left: 0;
    font-size: 11px;
    margin-left: 5px;
    z-index: 9999999999999;
    height: 70px;
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    color: var(--c-font-1);
  }

  .fancybox__progress {
    background: var(--c-accent-1);
    z-index: 999999999999999999;
  }

  .fancybox__content .fancybox__image {
    box-shadow: 0 3px 8px 0 var(--c-box-shadow);
  }

  .fancybox__thumbs {
    background: var(--c-bg-card-overlay);
    box-shadow: 0 3px 8px 0 var(--c-box-shadow);
    z-index: 999999;
  }

  .fancybox__thumbs__list a:before {
    border-color: var(--c-accent-1);
    transition: 0.4s ease-in-out;
  }

  .fancybox__button[disabled] {
    transform: scale(0);
    pointer-events: none;
    transition: 0.4s ease-in-out;
  }
}

/* ------------------------------ content (after 1200px) ------------------------------ */

/* ------------------------------ content (after 920px) ------------------------------ */
@media (max-width: 920px) {
  .art-banner .art-banner-overlay {
    .art-buttons-frame {
      text-align: center;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;

      &, * {
        max-width: 200px;
        margin: 0 auto;

        &:first-child {
          margin-bottom: 15px;
        }
      }
    }
  }

  .fancybox__container {
    margin: 0;
    width: 100vw;
    height: 100vh;
  }

  .fancybox__toolbar {
    width: 100vw;
  }

  .fancybox__navigation {
    width: 100%;
    position: absolute;
    bottom: 35px;
  }
}

/* ------------------------------ transitions ------------------------------ */

.art-a {
  transition: 0.55s ease-in-out;
}
`;
