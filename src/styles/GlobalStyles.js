import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face { font-family: 'Caveat'; src: url('src/assets/fonts/Caveat/Caveat-VariableFont_wght.ttf'); }
  @font-face { font-family: 'Caveat Brush'; src: url('src/assets/fonts/Caveat_Brush/CaveatBrush-Regular.ttf'); }
  @font-face { font-family: 'Jost'; src: url('src/assets/fonts/Jost/Jost-VariableFont_wght.ttf'); }
  @font-face { font-family: 'Operator Mono'; src: url('src/assets/fonts/Operator_Mono/Operator Mono_Light Nerd_Font_Complete.otf'); }

  :root {
    --c-bg: ${({ theme }) => theme.bg};

    --c-bg-wrapper: ${({ theme }) => theme.bgWrapper};
    --c-bg-banner-back: ${({ theme }) => theme.bgBannerBack};

    --c-bg-menu-1: ${({ theme }) => theme.bgMenu1};
    --c-bg-menu-2: ${({ theme }) => theme.bgMenu2};
    --c-bg-img-hover: ${({ theme }) => theme.bgImageHover};
    --c-bg-background-overlay: ${({ theme }) => theme.bgBackgroundOverlay};

    --c-bg-fancybox: rgba(32, 32, 42, 0.98);
    --c-bg-pagination: ${({ theme }) => theme.bgSwiperPagination};
    
    --c-box-shadow: rgba(15, 15, 20, 0.2);
    --c-font-shadow: rgba(250, 250, 252, 0.4);
    --c-timelineShadow: ${({ theme }) => theme.timelineShadow};

    --c-font-1: ${({ theme }) => theme.font1};
    --c-font-2: ${({ theme }) => theme.font2};
    --c-font-3: ${({ theme }) => theme.font3};
    --c-font-dark: #20202a;

    --c-accent-1: ${({ theme }) => theme.accent1};
    --c-accent-2: ${({ theme }) => theme.accent2};
    --c-accent-3: ${({ theme }) => theme.accent3};
    --c-accent-4: ${({ theme }) => theme.accent4};
    --c-accent-5: ${({ theme }) => theme.accent5};

    --c-gradient-2: ${({ theme }) => theme.gradient2};
    --c-gradient-3: ${({ theme }) => theme.gradient4};
    --c-gradient-4: ${({ theme }) => theme.gradient5};
    --c-gradient-5: ${({ theme }) => theme.gradient6};
    --c-gradient-6: ${({ theme }) => theme.gradient7};
    --c-gradient-7: ${({ theme }) => theme.gradient8};
    --c-gradient-8: ${({ theme }) => theme.gradient10};
    --c-gradient-9: linear-gradient(0.25turn, var(--c-accent-2), var(--c-accent-3), var(--c-accent-4), var(--c-accent-5));

    --c-cursor: ${({ theme }) => theme.accent - 1};
    --f-primary: 'Jost';
    --f-secondary: 'Caveat';
    --f-tertiary: 'Caveat Brush';
    --f-code: 'Operator Mono', monospace;
  }

  *::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  body {
    color: var(--c-font-1);
    font-size: 13px;
    line-height: 1.7;
    font-family: var(--f-primary);
    font-weight: 400;
    letter-spacing: .25px;
    font-smooth: subpixel-antialiased
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

  &:before {
    position: absolute;
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    ${'' /* content: '\f10d'; */}
    font-size: 18px;
    opacity: 0.5;
    top: 5px;
    left: 9px;
    color: var(--c-font-2);
  }

  &:after {
    position: absolute;
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    ${'' /* content: '\f10d'; */}
    font-size: 18px;
    opacity: 0.5;
    bottom: 5px;
    right: 9px;
    color: var(--c-font-2);
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
  text-transform: uppercase;
  font-size: 10px;
  display: inline-block;
  letter-spacing: 1.5px;
  font-weight: 600;
  margin-right: 15px;
  margin-bottom: 10px;
  color: var(--c-font-1);
  transition: 0.4s ease-in-out;
  cursor: pointer;

  &:hover {
    color: var(--c-font-2);
    text-shadow: 0 0 3px var(--c-font-shadow);
  }

  &.art-white-link {
    color: var(--c-font-2) !important;

    &:hover {
      color: var(--c-font-2) !important;
      text-shadow: 0 0 3px var(--c-font-shadow);
      transform: translateX(5px);
    }
  }

  &.art-color-link {
    color: var(--c-accent-1) !important;

    &:hover {
      color: var(--c-accent-2) !important;
      text-shadow: 0 0 3px var(--c-font-shadow);
      transform: translateX(5px);
    }
  }

  &.art-w-chevron {
    padding-right: 10px;

    &:after {
      position: absolute;
      font-family: 'Font Awesome 5 free';
      ${'' /* content: '\f054'; */}
      font-weight: 900;
      display: inline-block;
      font-style: normal;
      font-variant: normal;
      text-rendering: auto;
      font-size: 9px;
      top: 0.3px;
      transform: translateX(5px);
      transition: 0.4s ease-in-out;
    }

    &:hover {
      transform: translateX(0);

      &:after {
        transform: translateX(10px);
      }
    }
  }

  &:last-child {
    margin-bottom: 0;
    margin-right: 0;
  }

  i {
    font-size: 9px;
    margin-left: 3px;
  }

  &.art-left-link {
    padding-left: 10px;
    padding-right: 0;

    &.art-w-chevron {
      &:after {
        ${'' /* content: '\f053'; */}
        left: 0;
        transform: translateX(0);
      }

      &:hover:after {
        transform: translateX(-5px);
      }
    }
  }
}

/* ------------------------------ button ------------------------------ */

.art-btn {
  text-transform: uppercase;
  box-shadow: 0 1px 4px 0 var(--c-box-shadow);
  color: var(--c-font-4);
  background: var(--c-accent-1);
  letter-spacing: 1.5px;
  font-weight: 600;
  display: inline-flex;
  justify-content: center;
  align-content: center;
  border: none;
  transition: 0.4s ease-in-out;

  &:hover {
    background-color: var(--c-accent-3);
  }

  span {
    align-self: center;
    transition: 0.2s ease-in-out;
  }

  &.art-btn-md {
    height: 45px;
    font-size: 11px;
    padding: 0 35px;
  }

  &.art-btn-sm {
    height: 40px;
    font-size: 11px;
    padding: 0 30px;
  }

  &:hover {
    transform: translateY(-2px);
    color: var(--c-font-5);
  }
}

.btn-v2 {
  cursor: pointer;
}

/* ------------------------------ space ------------------------------ */

.p-30-0 {
  padding-top: 30px;
  padding-bottom: 0;
}

.p-0-30 {
  padding-top: 0;
  padding-bottom: 30px;
}

.p-30-30 {
  padding-top: 30px;
  padding-bottom: 30px;
}

.p-30-15 {
  padding-top: 30px;
  padding-bottom: 15px;
}

.p-15-15 {
  padding-top: 15px;
  padding-bottom: 15px;
}

.p-15-0 {
  padding-top: 15px;
  padding-bottom: 0;
}

.p-60-0 {
  padding-top: 60px;
  padding-bottom: 0;
}

.p-230-0 {
  padding-top: 230px;
  padding-bottom: 0;
}

.mb-10 {
  margin-bottom: 10px;
}

.mb-15 {
  margin-bottom: 15px;
}

.mb-25, .mb-30 {
  margin-bottom: 25px;
}

@media (max-width: 1400px) {
  .p-lg-30-0 {
    padding-top: 30px;
    padding-bottom: 0;
  }
}

@media (max-width: 920px) {
  .p-md-15-0 {
    padding-top: 15px;
    padding-bottom: 0;
  }
}

/* ------------------------------ app marcup ------------------------------ */
/* ----- preloader ----- */

.art-preloader {
  margin: 15px;
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100vw - 30px);
  height: calc(100vh - 30px);
  background: var(--c-font-4);
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;

  .art-preloader-content {
    margin-bottom: 15px;
    text-align: center;

    .art-preloader-load {
      margin-top: 5px;
      width: 200px;

      .progressbar-text {
        position: relative;
        font-size: 14px;
        font-weight: 400 !important;
        color: var(--c-font-1) !important;
        height: 300px;
        line-height: 350px;
      }
    }
  }
}

.art-preloader-load path {
  &:first-child {
    stroke: rgb(25, 25, 35);
  }

  &:last-child {
    stroke: var(--c-accent-1);
  }
}

/* ----- scroll frame ----- */

.art-scroll-frame {
  width: 100%;
  height: calc(100vh - 60px);
}

.scrollbar-track {
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
}


/* ------------------------------ app marcup (after 920px) ------------------------------ */
@media (max-width: 920px) {
  /* ----- preloader ----- */

  .art-preloader {
    margin: 0;
    width: 100vw;
    height: 100vh;
  }

  /* ----- scroll frame ----- */

  .art-scroll-frame {
    height: 100vh;
  }
}

/* ------------------------------ info bar ------------------------------ */
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

/* ------------------------------ menu bar ------------------------------ */

/* ------------------------------ content ------------------------------ */
/* ----- section title ----- */

.art-section-title {
  display: flex;
  justify-content: space-between;

  .art-title-frame {
    align-self: center;
    position: relative;
    margin-bottom: 30px;
  }

  .art-right-frame {
    padding-bottom: 30px;
  }
}

/* ----- card ----- */

.art-card {
  background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
  box-shadow: 0 3px 8px 0 var(--c-box-shadow);
  padding: 30px;
  margin-bottom: 30px;

  &.art-fluid-card {
    height: calc(100% - 30px);
  }
}

/* ----- typing code ----- */

.art-code {
  font-family: var(--f-code);
  color: var(--c-accent-1);
  text-shadow: 1px 1px 5px var(--c-accent-2);

  i {
    font-style: normal;
    color: var(--c-accent-5);
    text-shadow: none;
  }

  span {
    color: var(--c-font-2);
    text-shadow: none;

    &:hover {
      font-style: italic;

      /* color: var(--c-accent-4); */
    }
  }
}

/* ----- counters ----- */

.art-counter-frame {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  padding-left: 12.5%;
  opacity: 0;
  position: relative;

  .art-counter-box {
    min-width: 60px;

    .art-counter {
      color: var(--c-accent-1);
      font-weight: 600;
      font-size: 22px;
    }

    .art-counter-plus {
      margin-left: 3px;
      color: var(--c-accent-1);
      font-weight: 600;
      font-size: 22px;
    }
  }
}

/* ----- timeline ----- */

.art-timeline {
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    right: 5px;
    height: calc(100% - 10px);
    width: 5px;
    background: rgb(25, 25, 35);
  }

  .art-timeline-item {
    position: relative;

    .art-timeline-mark-light {
      background: var(--c-font-2);
      position: absolute;
      top: 4px;
      right: -4px;
      width: 23px;
      height: 23px;
      opacity: 0;
      border-radius: 50%;
      transition: 0.4s ease-in-out;
    }

    .art-timeline-mark {
      position: absolute;
      top: 8px;
      right: 0;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border: solid 3px var(--c-accent-1);
      background: var(--c-font-5);
      box-shadow: 0 3px 8px 0 var(--c-box-shadow);
    }

    &:hover .art-timeline-mark-light {
      animation: puls 1s infinite;
    }
  }

  .art-timeline-content {
    position: relative;
    margin-right: 45px;
    background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
    padding: 30px;
    margin-bottom: 30px;
    box-shadow: 0 3px 8px 0 var(--c-box-shadow);
    transition: 0.5s ease-in-out;

    &:hover {
      opacity: 0.9;
      transform: scale(1.01);
      transform-origin: right top;
      transition: transform 0.5s ease-in-out;
    }

    &:after {
      height: 10px;
      width: 10px;
      background-color: #2b2b35fa;
      transform: rotate(-135deg);
      content: '';
      position: absolute;
      top: 11px;
      right: -5px;
      border-top-right-radius: 50%;
    }

    .art-card-header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .art-right-side {
        margin-bottom: 15px;

        .art-date {
          color: var(--c-font-3);
          margin-left: auto;
          background: var(--c-font-4);
          padding: 5px 15px;
          border-radius: 15px;
          box-shadow: inset 0 3px 8px 0 var(--c-box-shadow);
          font-size: 10px;
        }
      }
    }
  }
}

/* ----- contact form ----- */

.art-form-field {
  input, textarea {
    height: 50px;
    width: 100%;
    background: linear-gradient(159deg, #252532 0%, #23232d 100%);
    border: none;
    color: var(--c-font-2);
    padding-left: 65px;
    padding-right: 15px;
    box-shadow: inset 0 1px 4px 0 var(--c-box-shadow);
    margin-bottom: 0;
    transition: 0.4s ease-in-out;
  }
}

::placeholder {
  color: var(--c-font-3);
}

.art-form-field {
  textarea {
    padding-left: 15px;
    padding-top: 15px;
    height: 150px;
    border-left: solid 50px var(--c-font-4);

    &.art-active, &:focus {
      border-color: var(--c-accent-1);
    }
  }

  .art-input:focus {
    outline: none;
  }
}

.art-input {
  &.art-active + label, &:focus + label {
    background: var(--c-accent-1);
    color: var(--c-font-4);
  }
}

.art-form-field {
  position: relative;
  margin-bottom: 0;

  label {
    text-align: center;
    color: var(--c-font-1);
    position: absolute;
    height: 50px;
    width: 50px;
    background: var(--c-font-4);
    top: 0;
    left: 0;
    padding: 0 15px;
    text-transform: uppercase;
    font-size: 11px;
    line-height: 50px;
    letter-spacing: 1px;
    font-weight: 500;
    transition: 0.4s ease-in-out;
    cursor: text;
  }

  .art-validation-warning {
    height: 30px;
    padding: 7px;

    /* text-align: center; */

    &.art-message-validation {
      padding-top: 1px;
    }

    span {
      color: var(--c-accent-5);
      margin-left: 50px;
    }
  }
}

.art-submit-frame {
  position: relative;
  height: 45px;

  .art-submit {
    margin: 0;
    overflow: hidden;
    position: relative;
    z-index: 999;

    &:focus {
      outline: inherit;
    }
  }
}

.art-success {
  position: absolute;
  top: 0;
  left: 0;
  margin-top: -15px;
  overflow: hidden;
  max-width: 150px;
  transform: scale(0);
  text-transform: uppercase;
  color: var(--c-font-2);
  background: var(--c-font-4);
  letter-spacing: 1.5px;
  font-weight: 600;
  justify-content: center;
  align-content: center;
  border: none;
  height: 0;
  font-size: 11px;
  padding: 15px 35px 0;
  margin: 0;
}

/* ----- blog ----- */

.art-blog-card, .art-project-card {
  position: relative;
  overflow: hidden;
  box-shadow: 0 3px 8px 0 var(--c-box-shadow);
  margin-bottom: 30px;
}

.art-blog-card {
  .art-port-cover {
    position: relative;
    padding-bottom: 60%;
    display: block;

    img {
      width: 100%;
      height: 100%;
      position: absolute;
      object-fit: cover;
      object-position: center;
      transition: 0.4s ease-in-out;
    }
  }

  .art-post-description {
    background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
    padding: 30px;
    position: relative;
    bottom: 0;
  }

  &:hover .art-port-cover img {
    transform: scale(1.07);
  }
}

.art-blog-slider .art-blog-card {
  margin-bottom: 0;
}

/* ----- navigation/pagination ----- */

.art-slider-navigation {
  padding: 15px 0 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;

  .swiper-pagination-bullet {
    margin-right: 10px;
    background-color: #8c8c8e;
    border-radius: 5px;
    opacity: 0.5;
    height: 4px;
    -webkit-transition: 0.4s ease-in-out;
    transition: 0.4s ease-in-out;

    &:focus {
      outline: inherit;
    }

    &.swiper-pagination-bullet-active {
      width: 20px;
      background-color: #ffc107;
      opacity: 1;
    }
  }

  .art-slider-nav-frame {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    .art-slider-nav {
      margin-left: 15px;
      cursor: pointer;
      -webkit-transition: 0.4s ease-in-out;
      transition: 0.4s ease-in-out;

      &.swiper-button-disabled {
        opacity: 0.2;
        cursor: not-allowed;
      }

      &:focus {
        outline: inherit;
      }
    }
  }
}

.art-pagination {
  box-shadow: 0 3px 8px 0 var(--c-box-shadow);
  padding: 30px 30px 25px;
  background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
  justify-content: space-between;
  display: flex;

  .art-pagination-center {
    text-align: center;
    position: absolute;
    width: 200px;
    left: 50%;
    top: 25px;
    margin-left: -100px;

    a {
      transition: 0.4s ease-in-out;
      padding: 0 5px;

      &.art-active-pag {
        color: var(--c-accent-1);
      }
    }
  }

  .art-link {
    margin: 0;
  }
}

/* ----- hobbies ----- */

.art-hobbies-item-frame {
  height: 100px;
  width: 100px;
  padding-bottom: 0;
  box-shadow: none !important;

  img {
    object-fit: scale-down !important;
  }
}

.hobbies-container {
  padding: 0;
}

/* ----- logos ----- */

.art-brand {
  width: 120px;
  height: 120px;
  margin: 0 auto;
  margin-top: 30px;
  padding: 1.5rem;
  display: block;
  margin-bottom: 30px;
  opacity: 0.6;
  transition: 0.4s ease-in-out;

  &:hover {
    opacity: 1;
  }
}

/* ------------------------------ portfolio ------------------------------ */
/* ----- filter ----- */

.art-filter .art-link {
  color: var(--c-font-1);
  margin-bottom: 0;
  cursor: pointer;
}

.art-link:last-child {
  margin-right: 15px;
}

.art-filter .art-link.art-current {
  color: var(--c-accent-1);
}

/* ----- portfolio items ----- */

.art-portfolio-item-frame, .art-hobbies-item-frame {
  display: block;
  width: 100%;
  outline: inherit;
  overflow: hidden;
  box-shadow: 0 3px 8px 0 var(--c-box-shadow);
  position: relative;
  padding-bottom: 60%;
}

.art-portfolio-item-frame img, .art-hobbies-item-frame img {
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

.art-portfolio-item-frame .art-item-hover, .art-hobbies-item-frame .art-item-hover {
  width: 27px;
  height: 27px;
  box-shadow: 0 1px 4px 0 var(--c-box-shadow);
  border-radius: 50%;
  position: absolute;
  color: var(--c-font-2);
  top: 30px;
  left: 30px;
  background: linear-gradient(159deg, #2d2d3ae0 0%, #2b2b35e0 100%);
  font-size: 11px;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s ease-in-out;
}

.art-portfolio-item-frame:hover .art-item-hover, .art-hobbies-item-frame:hover .art-item-hover {
  opacity: 0.5;
}

.art-portfolio-item-frame:hover .art-item-hover:hover, .art-hobbies-item-frame:hover .art-item-hover:hover {
  opacity: 1;
  transform: scale(1.07);
}

.art-portfolio-item-frame:hover img, .art-hobbies-item-frame:hover img {
  transform: scale(1.07);
  filter: brightness(100%) blur(0);
}

.art-grid {
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(33%, 1fr));
  grid-template-rows: masonry; */
  transition: 0.55s ease-in-out;
  width: 100%;

  /* clear fix */

  &:after {
    content: '';
    display: block;
    clear: both;
  }

  .art-grid-item {
    float: left;
    margin-bottom: 30px;
    overflow: hidden;
    position: relative;
    height: auto;
    padding: 0 15px;
  }
}

.art-grid-item {
  float: left;
  margin-bottom: 30px;
  overflow: hidden;
  position: relative;
  height: auto;
  padding: 0 15px;
}

.art-grid .art-grid-item .art-item-description, .art-grid-item .art-item-description {
  position: absolute;
  z-index: 9;
  bottom: 0;
  left: 15px;
  width: calc(100% - 29px);
  padding: 30px;
  background: linear-gradient(159deg, #2d2d3afa 0%, #2b2b35fa 100%);
  box-shadow: 0 3px 8px 0 var(--c-box-shadow);
  transform: translateY(100%);
  transition: 0.55s ease-in-out;
}

.art-grid .art-grid-item:hover .art-item-description, .art-grid-item:hover .art-item-description {
  transform: translateY(0);
}

.art-grid .art-grid-item .art-item-description p.art-tag, .art-grid-item .art-item-description p.art-tag {
  display: inline-block;
  color: var(--c-font-1);
  background: var(--c-font-4);
  padding: 3px 12px;
  border-radius: 15px;
  box-shadow: inset 0 3px 8px 0 var(--c-box-shadow);
  font-size: 10px;
  margin: 0 5px 5px 0;
}

.art-grid .art-grid-item .art-item-description p.art-tag:hover, .art-grid-item .art-item-description p.art-tag:hover {
  color: var(--c-accent-3);
}

.art-grid {
  &.art-grid-2-col .art-grid-item {
    width: 50%;

    .art-portfolio-item-frame {
      &.art-horizontal {
        padding-bottom: 66.7%;
      }

      &.art-vertical {
        padding-bottom: 140%;
      }

      &.art-square {
        padding-bottom: 90%;
      }
    }
  }

  &.art-grid-3-col .art-grid-item {
    width: 33.3333%;

    .art-portfolio-item-frame {
      &.art-horizontal {
        padding-bottom: 65%;
      }

      &.art-vertical {
        padding-bottom: 140%;
      }

      &.art-square {
        padding-bottom: 90%;
      }
    }
  }
}

.art-project-swiper-card {
  width: 100% !important;
  padding: 0 !important;

  .art-item-description {
    left: 0 !important;
    width: 100% !important;
  }
}

/* ----- touch device ----- */
@media (pointer: coarse) {
  .art-portfolio-item-frame .art-item-hover {
    opacity: 0.5;
  }

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
}

/* ----- single project ----- */

.art-project-cover {
  position: relative;
  overflow: hidden;
  box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
  margin-bottom: 30px;

  .art-portfolio-item-frame {
    padding-bottom: 50%;
  }
}

.art-project-category {
  color: var(--c-font-3);
  margin-left: auto;
  display: inline;
  background: var(--c-font-4);
  padding: 5px 15px;
  border-radius: 15px;
  box-shadow: inset 0 3px 8px 0 rgba(15, 15, 20, 0.2);
  font-size: 10px;
}

/* ----- fancybox customization ----- */

.fancybox-container {
  margin: 15px;
  width: calc(100vw - 30px);
  height: calc(100vh - 30px);

  .fancybox-bg {
    background: #20202afa;
  }
}

.fancybox-is-open .fancybox-bg {
  opacity: 1;
}

.fancybox-toolbar {
  background: linear-gradient(159deg, #2d2d3ae0 0%, #2b2b35e0 100%);
  display: flex;
  width: calc(100vw - 30px);
  justify-content: flex-end;
  align-items: center;
  height: 70px;
  box-shadow: 0 3px 8px 0 var(--c-box-shadow);
  z-index: 999999;
  padding: 0 17px;
  transition: 0.55s ease-in-out;

  .fancybox-button {
    background: transparent;
    color: var(--c-font-1);

    &:hover {
      color: var(--c-font-2);
    }

    svg {
      width: 20px;
    }
  }
}

.fancybox-slide--image {
  padding: 130px 0 60px;
}

.fancybox-navigation .fancybox-button {
  background-color: transparent;
  margin: 0 15px;
}

.fancybox-infobar {
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

.fancybox-progress {
  background: var(--c-accent-1);
  z-index: 999999999999999999;
}

.fancybox-content .fancybox-image {
  box-shadow: 0 3px 8px 0 var(--c-box-shadow);
}

.fancybox-thumbs {
  background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
  box-shadow: 0 3px 8px 0 var(--c-box-shadow);
}

.fancybox-thumbs__list a:before {
  border-color: var(--c-accent-1);
  transition: 0.4s ease-in-out;
}

.fancybox-button[disabled] {
  transform: scale(0);
  pointer-events: none;
  transition: 0.4s ease-in-out;
}

.art-recomendation-popup {
  background-color: transparent;
  max-width: 50%;
}

/* ------------------------------ content (after 1600px) ------------------------------ */


/* ------------------------------ content (after 1400px) ------------------------------ */

/* ------------------------------ content (after 1200px) ------------------------------ */
@media (max-width: 1200px) {
  .art-grid {
    &.art-grid-2-col .art-grid-item, &.art-grid-3-col .art-grid-item {
      width: 50%;
    }
  }
}

/* ------------------------------ content (after 920px) ------------------------------ */
@media (max-width: 920px) {
  .art-banner .art-banner-overlay {
    .art-banner-title {
      .art-buttons-frame {
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;

        a {
          max-width: 200px;
          margin: 0 auto;

          &:first-child {
            margin-bottom: 15px;
          }
        }
      }
    }
  }

  .art-code {
    min-height: 70px;
    margin-bottom: 0;
  }

  .art-timeline .art-timeline-content {
    margin-right: 30px;
  }

  .art-counter-frame {
    padding-left: 5%;
  }

  .fancybox-container {
    margin: 0;
    width: 100vw;
    height: 100vh;
  }

  .fancybox-toolbar {
    width: 100vw;
  }

  .fancybox-navigation {
    width: 100%;
    position: absolute;
    bottom: 35px;
  }
}

/* ------------------------------ content (after 768px) ------------------------------ */
@media (max-width: 768px) {
  .art-section-title {
    flex-direction: column;

    .art-right-frame {
      margin-left: auto;
      margin-right: auto;
    }
  }

  .art-grid {
    &.art-grid-2-col .art-grid-item, &.art-grid-3-col .art-grid-item {
      width: 100%;
    }
  }

  .art-filter {
    text-align: center;
    display: flex;
    flex-direction: column;

    a {
      margin: 0 0 10px;
    }
  }

  .art-m-hidden {
    display: none;
  }

  .art-counter-frame {
    padding-left: 15%;
  }
}

/* ------------------------------ content (after 500px) ------------------------------ */
@media (max-width: 500px) {
  .art-section-title {
    flex-direction: column;

    .art-right-frame {
      margin-left: auto;
      margin-right: auto;
    }
  }

  .art-grid {
    &.art-grid-2-col .art-grid-item, &.art-grid-3-col .art-grid-item {
      width: 100%;
    }
  }

  .art-counter-frame {
    padding-left: 10%;

    .art-counter-box {
      min-width: 30px;
    }
  }
}

/* ------------------------------ transitions ------------------------------ */

.art-a {
  transition: 0.55s ease-in-out;
}

/* ----- in animation ----- */

.transition-fade {
  /* transition: 0.55s ease-in-out; */
  opacity: 1;

  .art-a {
    transform: scale(1);
    opacity: 1;
  }

  .art-price.art-popular-price {
    transform: scale(1.03);
  }
}

/* ----- out animation ----- */

html.is-animating {
  .transition-fade {
    opacity: 0;

    .art-a {
      transform: scale(0.93);
      opacity: 0;
    }
  }

  .art-a, .art-current-page {
    opacity: 0;
  }
}

/* ----- in animation ----- */

.fade-right {
  transform: translateX(0);
  opacity: 1;
}

/* ----- out animation ----- */

html.is-animating .fade-right {
  transform: translateX(-60px);
  opacity: 0;
}

/* ----- in animation ----- */

.fade-left {
  transform: translateX(0);
  opacity: 1;
}

/* ----- out animation ----- */

html.is-animating .fade-left {
  transform: translateX(60px);
  opacity: 0;
}

@media (max-width: 920px) {
  .transition-fade .art-price.art-popular-price {
    transform: scale(1);
  }
}
`;

export default GlobalStyles;
