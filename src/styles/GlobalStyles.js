import { createGlobalStyle } from 'styled-components';

import { normalize, reset } from '.';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${reset}

  :root {
    /* COLORS */
    --c-background-0: ${({ theme }) => theme.background0};
    --c-background-1: ${({ theme }) => theme.background1};
    --c-box-shadow-0: ${({ theme }) => theme.boxShadow0};
    --c-font-shadow-0: ${({ theme }) => theme.fontShadow0};
    --c-font-0: ${({ theme }) => theme.font0};
    --c-font-1: ${({ theme }) => theme.font1};
    --c-font-2: ${({ theme }) => theme.font2};
    --c-font-3: ${({ theme }) => theme.font3};
    --c-font-4: ${({ theme }) => theme.font4};
    --c-font-5: ${({ theme }) => theme.font5};
    --c-accent-1: ${({ theme }) => theme.accent1};
    --c-accent-2: ${({ theme }) => theme.accent2};
    --c-accent-3: ${({ theme }) => theme.accent3};
    --c-accent-4: ${({ theme }) => theme.accent4};
    --c-accent-5: ${({ theme }) => theme.accent5};
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
    --c-gradient-11: ${({ theme }) => theme.gradient11};
    --c-cursor: ${({ theme }) => theme.accent};
    /* FONTS */
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
        - footer
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
  /* ----- text defaults ----- */

  body {
    color: var(--c-text-1);
    font-size: 12px;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    letter-spacing: 0.5px;
    font-smooth: subpixel-antialiased;
  }

  /* ----- title defaults ----- */

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    color: var(--c-text-0);
    margin-bottom: 0;
    font-family: 'Poppins', sans-serif;
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
    color: var(--c-text-0);
  }

  /* ----- container ----- */

  .container-fluid {
    overflow: hidden;
    padding: 0 30px;
    position: relative;
  }

  /* ----- buttons frame ----- */

  .art-buttons-frame a {
    margin-right: 15px;
  }

  /* ----- suptitle ----- */

  .art-el-suptitle {
    margin-top: 5px;
    color: var(--c-text-2);
    font-style: italic;
    font-size: 11px;
  }

  /* ----- divider ----- */

  .art-ls-divider {
    background: var(--c-text-2);
    width: 100%;
    height: 1px;
    opacity: 0.3;
  }

  /* ----- image defaults ----- */

  .art-img-default {
    width: 100%;
    box-shadow: 0 3px 8px 0 var(--c-box-shadow-0);
  }

  /* ----- link defaults ----- */

  a {
    text-decoration: none;
    color: var(--c-text-1);

    &:hover {
      text-decoration: none;
      color: var(--c-text-0);
    }

    &:focus {
      outline: inherit;
    }
  }

  /* ----- table ----- */

  .art-table {
    color: var(--c-text-1);

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
    color: var(--c-background-0);
    padding: 30px;
    padding-left: 35px;
    font-weight: 400;
    font-style: italic;
    font-size: 14px;
    box-shadow: 0 1px 4px 0 var(--c-box-shadow-0);
    position: relative;

    &:before {
      position: absolute;
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      content: '\f10d';
      font-size: 18px;
      opacity: 0.5;
      top: 5px;
      left: 9px;
      color: var(--c-text-0);
    }

    &:after {
      position: absolute;
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      content: '\f10d';
      font-size: 18px;
      opacity: 0.5;
      bottom: 5px;
      right: 9px;
      color: var(--c-text-0);
      transform: rotate(180deg);
    }
  }

  /* ----- list ----- */

  .art-custom-list {
    padding-left: 25px;

    li {
      position: relative;
      list-style-type: none;
      color: var(--c-text-0);
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
        box-shadow: 0 3px 8px 0 var(--c-box-shadow-0);
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
    color: var(--c-text-1);
    transition: 0.4s ease-in-out;
    cursor: pointer;

    &:hover {
      color: var(--c-text-0);
      text-shadow: 0 0 3px var(--c-text-shadow-0);
    }

    &.art-white-link {
      color: var(--c-text-0) !important;

      &:hover {
        color: var(--c-text-0) !important;
        text-shadow: 0 0 3px var(--c-text-shadow-0);
        transform: translateX(5px);
      }
    }

    &.art-color-link {
      color: var(--c-accent-1) !important;

      &:hover {
        color: var(--c-accent-2) !important;
        text-shadow: 0 0 3px var(--c-text-shadow-0);
        transform: translateX(5px);
      }
    }

    &.art-w-chevron {
      padding-right: 10px;

      &:after {
        position: absolute;
        font-family: 'Font Awesome 5 free';
        content: '\f054';
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
          content: '\f053';
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
    box-shadow: 0 1px 4px 0 var(--c-box-shadow-0);
    color: var(--c-text-3);
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
      color: var(--c-text-4);
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
  /* ----- top background ----- */

  .art-top-bg {
    overflow: hidden;
    position: absolute;
    width: 100%;
    top: 0;
    background-position: center;
    height: 400px;
    background-size: cover;

    .art-top-bg-overlay {
      position: relative;
      height: 100%;
      width: 100%;
      background-image: var(--c-gradient-1);
    }
  }

  /* ----- preloader ----- */

  .art-preloader {
    margin: 15px;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100vw - 30px);
    height: calc(100vh - 30px);
    background: var(--c-text-3);
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
          color: var(--c-text-1) !important;
          height: 300px;
          line-height: 350px;
        }
      }
    }
  }

  .art-preloader-load path {
    &:first-child {
      stroke: var(--c-background-0);
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

  /* ----- app ----- */

  .art-app {
    padding: 15px;
    background: var(--c-background-0);
    width: 100vw;
    height: 100%;
    position: relative;
    overflow: hidden;

    /* ----- mobile top bar ----- */

    * {
      scrollbar-width: none;
    }

    ::-webkit-scrollbar {
      display: none;
    }

    .art-mobile-top-bar {
      position: fixed;
      z-index: 99;
      width: 100%;
      height: 70px;
      background: var(--c-text-3);
      box-shadow: 0 3px 8px 0 var(--c-box-shadow-0);
      padding: 0 30px;
      display: none;
      justify-content: space-between;
      align-items: center;
    }

    .art-app-wrapper {
      max-width: 1440px;
      margin-left: auto;
      margin-right: auto;
      background: var(--c-text-4);
      background-size: cover;
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
      box-shadow: 0 3px 8px 0 var(--c-box-shadow-0);

      .art-app-container {
        position: relative;
        display: flex;
        flex-wrap: nowrap;

        /* ----- info bar ----- */
        /* ----- content ----- */
        /* ----- menu bar ----- */

        .art-info-bar {
          background: var(--c-text-3);
          width: 290px;
          min-width: 290px;
          height: calc(100vh - 30px);
          position: relative;
          z-index: 999;
          box-shadow: 0 3px 8px 0 var(--c-box-shadow-0);
          transition: 0.55s ease-in-out;

          .art-info-bar-frame {
            padding: 0 15px;

            .art-info-bar-header {
              width: 100%;
              height: 70px;
              justify-content: flex-start;
              align-items: center;
              position: absolute;
              left: 0;
              top: 0;
              z-index: 999999999999;
              display: none;

              .art-info-bar-btn {
                margin-left: auto;
                pointer-events: all;
                font-size: 14px;
                padding: 30px;

                &.art-disabled {
                  opacity: 0;
                  pointer-events: none;
                }
              }
            }

            .art-scroll-frame .scroll-content {
              padding: 240px 0 50px;
            }
          }
        }

        .art-content {
          position: relative;
          overflow: hidden;
          width: 100vw;
          height: calc(100vh - 30px);
          padding-right: 80px;
          transition: 0.55s ease-in-out;

          .art-curtain {
            background: var(--c-background-1);
            position: absolute;
            z-index: 9;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            opacity: 0;
            transition: 0.55s ease-in-out;
          }

          &.art-active {
            transform: translateX(-150px);

            .art-curtain {
              pointer-events: all;
              opacity: 0.7;
            }
          }
        }

        .art-menu-bar {
          background: var(--c-text-3);
          width: 230px;
          height: calc(100vh - 30px);
          position: absolute;
          z-index: 99;
          right: -150px;
          top: 0;
          bottom: 0;
          box-shadow: 0 3px 8px 0 var(--c-box-shadow-0);
          transition: 0.55s ease-in-out;

          .art-menu-bar-frame {
            position: relative;

            .art-menu-bar-header {
              width: 100%;
              height: 70px;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              position: absolute;
              top: 0;
              left: 0;
              z-index: 9;
              box-shadow: 0 1px 4px 0 var(--c-box-shadow-0);
              background: var(--c-gradient-2);

              .art-menu-bar-btn {
                pointer-events: all;

                &.art-disabled {
                  opacity: 0;
                  pointer-events: none;
                }
              }
            }
          }

          &.art-active {
            transform: translateX(-150px);
          }
        }
      }
    }
  }

  /* ------------------------------ app marcup (after 920px) ------------------------------ */
  @media (max-width: 920px) {
    /* ----- container ----- */

    .container-fluid {
      padding-left: 15px;
      padding-right: 15px;
    }

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

    .art-app {
      padding: 0;

      /* ----- mobile top bar ----- */

      .art-mobile-top-bar {
        display: flex;
      }

      .art-app-wrapper {
        border-radius: 0;
        height: 100vh;

        .art-app-container {
          width: 100%;

          /* ----- info bar ----- */
          /* ----- content ----- */
          /* ----- menu bar ----- */

          .art-info-bar {
            position: absolute;
            left: -290px;
            width: 290px;
            height: 100vh;

            &.art-active {
              transform: translateX(290px);
            }

            .art-info-bar-frame .art-info-bar-header {
              display: flex;

              .art-info-bar-btn {
                transform: translateX(70px);
                transition: 0.4s ease-in-out;
              }
            }

            &.art-active .art-info-bar-frame .art-info-bar-btn {
              transform: translateX(0);
            }
          }

          .art-content {
            position: relative;
            width: 100vw;
            height: 100vh;
            padding-right: 0;
            padding-top: 70px;

            .art-scroll-frame {
              height: calc(100vh - 70px);
            }

            &.art-active {
              transform: none;

              .art-curtain {
                pointer-events: all;
                opacity: 1;
              }
            }
          }

          .art-menu-bar {
            position: absolute;
            right: -230px;
            width: 230px;
            height: 100vh;

            &.art-active {
              transform: translateX(-230px);
            }

            .art-menu-bar-btn {
              transform: translateX(-80px);
              transition: 0.4s ease-in-out;
            }

            &.art-active .art-menu-bar-btn {
              transform: translateX(0);
            }
          }
        }
      }
    }
  }

  /* ------------------------------ app marcup (after 290px) ------------------------------ */
  @media (max-width: 290px) {
    .art-app {
      /* ----- info bar ----- */

      .art-info-bar {
        width: 100vw;
      }
    }
  }

  /* ------------------------------ app marcup (after 230px) ------------------------------ */
  @media (max-width: 230px) {
    .art-app {
      /* ----- menu bar ----- */

      .art-menu-bar {
        width: 100vw;
      }
    }
  }

  .art-app-onepage .art-app-wrapper .art-app-container .art-content {
    padding-right: 0;
  }

  /* ------------------------------ info bar ------------------------------ */

  .art-info-bar {
    padding: 0 15px;

    /* ----- header ----- */
    /* ----- name ----- */
    /* ----- language skills ----- */
    /* ----- hard skills ----- */
    /* ----- knowledge ----- */
    /* ----- strengths ----- */
    /* ----- info bar links ----- */
    /* ----- social links ----- */

    .scroll-content {
      padding-top: 80px !important;
    }

    .art-header {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 99999;
      width: 100%;
      padding: 30px;
      height: 235px;
      background: var(--c-gradient-3);
      text-align: center;
      box-shadow: 0 1px 4px 0 var(--c-box-shadow-0);

      .art-avatar {
        width: 90px;
        height: 90px;
        margin: 0 auto;
        border-radius: 50%;
        position: relative;
        margin-bottom: 15px;

        .art-avatar-curtain {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          outline: inherit;
          transition: 0.2s ease-in-out;
          z-index: 0;

          i {
            background: var(--c-gradient-4);
            width: 30px;
            height: 30px;
            text-align: center;
            align-self: center;
            font-weight: 700;
            font-size: 11px;
            line-height: 30px;
            color: var(--c-text-0);
            border-radius: 50%;
            opacity: 0;
            z-index: 1;
            transition: 0.4s ease-in-out;
          }

          img {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
            z-index: 0;
          }

          &:hover {
            opacity: 1;
            transition: 0.2s ease-in-out;
            outline: inherit;

            i {
              opacity: 0.7;

              &:hover {
                opacity: 1;
                transform: scale(1.07);
              }
            }
          }
        }

        .art-lamp-light {
          z-index: 2;

          &:before {
            content: '';
            position: absolute;
            bottom: -1px;
            right: 1px;
            background: var(--c-text-0);
            height: 23px;
            width: 23px;
            border-radius: 50%;
            animation: puls 1s infinite;
          }

          .art-available-lamp {
            position: absolute;
            bottom: 3px;
            right: 5px;
            height: 15px;
            width: 15px;
            background: greenyellow;
            border-radius: 50%;
            z-index: 0;
            transition: 0.4s ease-in-out;

            &:after {
              position: relative;
              content: "I'm available for hire";
              width: 115px;
              display: block;
              padding: 5px 10px;
              top: -10px;
              left: 28px;
              font-size: 10px;
              font-weight: 200;
              color: var(--c-text-1);
              box-shadow: 0 1px 4px 0 var(--c-box-shadow-0);
              background: var(--c-background-0);
              opacity: 0;
              pointer-events: none;
              transform: translateX(20px);
              transition: 0.4s ease-in-out;
              text-align: left;
            }

            &:before {
              content: '';
              position: absolute;
              height: 5px;
              width: 5px;
              right: -15px;
              top: 5px;
              opacity: 0;
              background: var(--c-background-0);
              pointer-events: none;
              transform: translateX(20px) rotate(45deg);
              transition: 0.4s ease-in-out;
              z-index: 99;
            }

            &:hover {
              transform: scale(1);

              &:after {
                opacity: 1;
                transform: translateX(0);
              }

              &:before {
                opacity: 1;
                transform: translateX(0) rotate(45deg);
              }
            }
          }

          &.art-not-available {
            &:before {
              opacity: 0;
              animation: none;
            }

            .art-available-lamp {
              background: red;

              &:after {
                content: "Sorry, I'm no longer available.";
              }
            }
          }
        }
      }
    }

    .art-name {
      color: var(--c-text-0);
      transition: 0.4s ease-in-out;

      a {
        color: var(--c-text-0);
        transition: 0.4s ease-in-out;
      }

      &:hover a {
        color: var(--c-accent-1);
      }
    }

    .art-lang-skills {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .art-lang-skills-item {
        width: 33.33333%;
        text-align: center;
        margin-bottom: 15px;

        .art-circle-progress {
          width: 65%;
          margin: 0 auto 15px;

          .progressbar-text {
            font-size: 11px;
            color: var(--c-text-1) !important;
            position: relative;
            left: 45% !important;

            &:after {
              content: '%';
              position: absolute;
              right: -7px;
            }
          }
        }
      }
    }

    .art-hard-skills .art-hard-skills-item {
      margin-bottom: 15px;
      position: relative;

      .art-skill-heading {
        display: flex;
        justify-content: space-between;
      }

      .art-line-progress {
        width: 100%;

        .progressbar-text {
          width: 100%;
          text-align: right;
          top: -6px !important;
          font-size: 11px;
          color: var(--c-text-1) !important;
        }
      }
    }

    .art-knowledge-list {
      padding-left: 0;

      li {
        list-style-type: none;
        margin-bottom: 5px;
        color: var(--c-text-1);

        &:last-child {
          margin-bottom: 0;
        }

        &:before {
          font-family: 'Font Awesome 5 Free';
          font-weight: 900;
          content: '\f00c';
          margin-right: 5px;
          font-size: 9px;
          color: var(--c-accent-1);
          margin-right: 10px;
        }

        &:hover::before {
          color: var(--c-accent-3);
        }
      }
    }

    .art-links-frame {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }

    .art-ls-social {
      font-size: 1.15rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 35px;
      height: 50px;
      background: var(--c-gradient-5);
      position: absolute;
      bottom: 0;
      box-shadow: 0 1px 4px 0 var(--c-box-shadow-0);
      left: 0;
      width: 100%;
      z-index: 999;

      a {
        color: var(--c-text-1);
        transition: 0.2s ease-in-out;

        &:hover {
          text-shadow: 0 0 3px var(--c-text-shadow-0);
          color: var(--c-accent-1);
        }

        &.social-unavailable:hover {
          text-shadow: 0 0 3px var(--c-text-shadow-0);
          color: var(--c-text-0);
        }
      }
    }
  }

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

  /* ----- progresbar color ----- */

  .art-line-progress {
    path {
      &:first-child {
        stroke: var(--c-background-0);
      }

      &:last-child {
        stroke: var(--c-accent-1);
      }
    }

    &:hover path:last-child {
      transform: scale(1.01);
      transition: right ease-in-out 1s;
      stroke: var(--c-accent-2);
    }
  }

  .art-circle-progress {
    path {
      &:first-child {
        stroke: var(--c-background-0);
      }

      &:last-child {
        stroke: var(--c-accent-1);
      }
    }

    &:hover path:last-child {
      transform: scale(1.01);
      transform-origin: center;
      transition: transform 0.5s;
      stroke: var(--c-accent-2);
    }
  }

  .art-info-bar .art-strengths p {
    display: inline-block;
    color: var(--c-text-1);
    background: var(--c-text-5);
    padding: 3px 10px;
    border-radius: 15px;
    box-shadow: inset 0 3px 8px 0 var(--c-box-shadow-0);
    font-size: 10px;
    margin: auto 3px 5px auto;

    &:hover {
      color: var(--c-accent-3);
    }
  }

  /* ------------------------------ menu bar ------------------------------ */

  .art-menu-bar {
    /* ----- main menu  ----- */
    /* ----- language change  ----- */
    /* ----- current page title ----- */

    nav {
      display: flex;
      align-items: center;
      height: 100%;
      position: relative;

      .main-menu {
        width: 100%;
        padding: 0;
        margin: 0;
        position: relative;
        bottom: -5%;

        .menu-item {
          width: 100%;
          list-style-type: none;
          transition: 0.55s ease-in-out;
          opacity: 0;
          transform: translateX(60px);
          transition: 0.55s ease-in-out;

          &:nth-child(1) {
            transition-delay: 0.05s;
          }

          &:nth-child(2) {
            transition-delay: 0.1s;
          }

          &:nth-child(3) {
            transition-delay: 0.15s;
          }

          &:nth-child(4) {
            transition-delay: 0.2s;
          }

          &:nth-child(5) {
            transition-delay: 0.25s;
          }

          &:nth-child(6) {
            transition-delay: 0.3s;
          }

          &:nth-child(7) {
            transition-delay: 0.35s;
          }

          &:nth-child(8) {
            transition-delay: 0.4s;
          }

          &:nth-child(9) {
            transition-delay: 0.45s;
          }

          &:nth-child(10) {
            transition-delay: 0.5s;
          }

          a,         p {
            padding: 7px 30px;
            display: inline-block;
            width: 100%;
            text-transform: uppercase;
            font-size: 11px;
            letter-spacing: 1px;
            font-weight: 500;
            color: var(--c-text-1);
            transition: 0.2s ease-in-out;
            margin-bottom: 0;
            cursor: pointer;
          }

          a:hover,         p:hover {
            color: var(--c-text-0);
            text-shadow: 0 0 3px var(--c-text-shadow-0);
          }

          &.current_page {
            color: var(--c-text-0);
            a {
              color: var(--c-text-0) !important;
              span {
                color: var(--c-text-0) !important;
              }
            }
          }

          &.menu-item-has-children {
            padding-left: 0;
            padding-right: 0;

            &:after {
              position: absolute;
              font-family: 'Font Awesome 5 free';
              content: '\f054';
              font-weight: 900;
              display: inline-block;
              font-style: normal;
              font-variant: normal;
              text-rendering: auto;
              font-size: 9px;
              top: 6px;
              right: 30px;
              transform: translateX(5px);
              transition: 0.4s ease-in-out;
            }
          }

          .sub-menu {
            padding-left: 0;
            width: 100%;
            display: block;
            position: relative;
            overflow: hidden;
            pointer-events: none;
            box-shadow: inset 0 3px 8px 0 var(--c-box-shadow-0);
            background: var(--c-text-3);
            filter: brightness(95%);
            max-height: 0;
            transition: max-height 0.6s ease-in-out;

            .menu-item {
              position: relative;
              opacity: 0;
              transition: 0.55s ease-in-out;

              a {
                padding: 7px 30px;
                font-weight: 400;
                font-size: 10px;
              }

              .sub-menu {
                margin: 0;
                max-height: 0;
                transition: max-height 1s ease-in-out;
              }

              &:hover {
                &.menu-item-has-children:after {
                  transform: rotate(90deg);
                }

                .sub-menu {
                  max-height: 500px;
                }
              }

              &:first-child {
                margin-top: 15px;
              }

              &:last-child {
                margin-bottom: 15px;
              }
            }

            &.art-active {
              pointer-events: all;
              max-height: 500px;

              .menu-item {
                opacity: 1;
              }
            }
          }

          &:hover.menu-item-has-children:after {
            transform: rotate(90deg);
          }

          &.current-menu-item {
            a:first-child,           p:first-child {
              color: var(--c-text-0);
              text-shadow: 0 0 3px var(--c-text-shadow-0);
            }

            .sub-menu .menu-item a {
              color: var(--c-text-1);
              text-shadow: none;

              &:hover {
                color: var(--c-text-0);
                text-shadow: 0 0 3px var(--c-text-shadow-0);
              }
            }
          }
        }
      }
    }

    &.art-active nav .menu-item {
      opacity: 1;
      transform: translateX(0);
    }

    .art-current-page {
      width: 200px;
      transform: rotate(90deg);
      color: var(--c-text-0);
      position: absolute;
      overflow: hidden;
      top: 200px;
      opacity: 1;
      left: -62px;
      text-transform: uppercase;
      font-size: 11px;
      opacity: 1;
      letter-spacing: 1px;
      font-weight: 500;
      transition: 0.4s ease-in-out;
    }

    a {
      display: none;
      visibility: hidden;
      opacity: 0;

      &:first-child {
        visibility: visible;
        opacity: 1;
        display: block;
      }
    }

    &.art-active .art-current-page {
      opacity: 0;
    }
  }

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
    background: var(--c-gradient-6);
    box-shadow: 0 3px 8px 0 var(--c-box-shadow-0);
    padding: 30px;
    margin-bottom: 30px;

    &.art-fluid-card {
      height: calc(100% - 30px);
    }
  }

  /* ----- banner ----- */

  .art-banner-back {
    content: '';
    position: absolute;
    z-index: 0;
    top: -30px;
    width: 90%;
    height: 30px;
    margin-left: 5%;
    box-shadow: 0 3px 8px 0 var(--c-box-shadow-0);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background: var(--c-background-1);
  }

  .art-banner {
    transition: 0.55s ease-in-out;
    background-size: cover;
    background-position: center;
    position: relative;
    box-shadow: 0 3px 8px 0 var(--c-box-shadow-0);
    z-index: 999;

    .art-banner-overlay {
      position: relative;
      display: flex;
      padding: 60px;
      width: 100%;
      background-image: var(--c-gradient-7);

      &.art-side-overlay {
        background-image: var(--c-gradient-7);
      }

      .art-banner-title {
        width: 100%;
        align-self: center;

        h1 {
          padding: 1px 0;
          display: inline-block;
          color: transparent;
          background-image: var(--c-gradient-8);
          background-size: 100%;
          -webkit-background-clip: text;
          -moz-background-clip: text;
          -ms-background-clip: text;
          -o-background-clip: text;
          background-clip: text;
          background-clip: text;
          transition: transform 0.5s;

          &:hover {
            /* text-shadow: 0.1px 0.1px 10px var(--c-accent-2); */
            transform: scale(1.01);
            transition: transform 0.5s;
          }
        }
      }

      .art-banner-photo {
        width: 390px;
        position: absolute;
        right: 0;
        bottom: 0;
        transition: all 0.5s;

        &:hover {
          transform: scale(1.15);
          transform-origin: right bottom;
          transition: transform 0.5s;
        }
      }
    }
  }

  /* ----- typing code ----- */

  .art-code {
    font-family: 'Courier Prime', monospace;
    color: var(--c-accent-1);
    text-shadow: 1px 1px 5px var(--c-accent-2);

    i {
      font-style: normal;
      color: var(--c-accent-5);
      text-shadow: none;
    }

    span {
      color: var(--c-text-0);
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
        font-family: 'Poppins', sans-serif;
        font-size: 22px;
      }

      .art-counter-plus {
        margin-left: 3px;
        color: var(--c-accent-1);
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
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
      background: var(--c-background-0);
    }

    .art-timeline-item {
      position: relative;

      .art-timeline-mark-light {
        background: var(--c-text-0);
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
        background: var(--c-text-4);
        box-shadow: 0 3px 8px 0 var(--c-box-shadow-0);
      }

      &:hover .art-timeline-mark-light {
        animation: puls 1s infinite;
      }
    }

    .art-timeline-content {
      position: relative;
      margin-right: 45px;
      background: var(--c-gradient-6);
      padding: 30px;
      margin-bottom: 30px;
      box-shadow: 0 3px 8px 0 var(--c-box-shadow-0);
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
            color: var(--c-text-2);
            margin-left: auto;
            background: var(--c-text-3);
            padding: 5px 15px;
            border-radius: 15px;
            box-shadow: inset 0 3px 8px 0 var(--c-box-shadow-0);
            font-size: 10px;
          }
        }
      }
    }
  }

  /* ----- contact form ----- */

  .art-form-field {
    input,   textarea {
      height: 50px;
      width: 100%;
      background: var(--c-gradient-9);
      border: none;
      color: var(--c-text-0);
      padding-left: 65px;
      padding-right: 15px;
      box-shadow: inset 0 1px 4px 0 var(--c-box-shadow-0);
      margin-bottom: 0;
      transition: 0.4s ease-in-out;
    }
  }

  ::placeholder {
    color: var(--c-text-2);
  }

  .art-form-field {
    textarea {
      padding-left: 15px;
      padding-top: 15px;
      height: 150px;
      border-left: solid 50px var(--c-text-3);

      &.art-active,     &:focus {
        border-color: var(--c-accent-1);
      }
    }

    .art-input:focus {
      outline: none;
    }
  }

  .art-input {
    &.art-active + label,   &:focus + label {
      background: var(--c-accent-1);
      color: var(--c-text-3);
    }
  }

  .art-form-field {
    position: relative;
    margin-bottom: 0;

    label {
      text-align: center;
      color: var(--c-text-1);
      position: absolute;
      height: 50px;
      width: 50px;
      background: var(--c-text-3);
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
    color: var(--c-text-0);
    background: var(--c-text-3);
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
    box-shadow: 0 3px 8px 0 var(--c-box-shadow-0);
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
      background: var(--c-gradient-6);
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
    box-shadow: 0 3px 8px 0 var(--c-box-shadow-0);
    padding: 30px 30px 25px;
    background: var(--c-gradient-6);
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

  /* ----- footer ----- */

  footer {
    width: 100%;
    padding: 17px 30px 7px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background: var(--c-gradient-6);
    box-shadow: 0 1px 4px 0 var(--c-box-shadow-0);
    font-size: 11px;
    color: var(--c-text-1);
    transition: 0.55s ease-in-out;
    z-index: 9;

    div {
      margin-bottom: 10px;
    }

    a {
      transition: 0.2s ease-in-out;

      &:hover {
        color: var(--c-text-0);
      }
    }
  }

  /* ------------------------------ portfolio ------------------------------ */
  /* ----- filter ----- */

  .art-filter .art-link {
    color: var(--c-text-1);
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
    box-shadow: 0 3px 8px 0 var(--c-box-shadow-0);
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
    box-shadow: 0 1px 4px 0 var(--c-box-shadow-0);
    border-radius: 50%;
    position: absolute;
    color: var(--c-text-0);
    top: 30px;
    left: 30px;
    background: var(--c-gradient-10);
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
    background: var(--c-gradient-11);
    box-shadow: 0 3px 8px 0 var(--c-box-shadow-0);
    transform: translateY(100%);
    transition: 0.55s ease-in-out;
  }

  .art-grid .art-grid-item:hover .art-item-description, .art-grid-item:hover .art-item-description {
    transform: translateY(0);
  }

  .art-grid .art-grid-item .art-item-description p.art-tag, .art-grid-item .art-item-description p.art-tag {
    display: inline-block;
    color: var(--c-text-1);
    background: var(--c-text-3);
    padding: 3px 12px;
    border-radius: 15px;
    box-shadow: inset 0 3px 8px 0 var(--c-box-shadow-0);
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
    color: var(--c-text-2);
    margin-left: auto;
    display: inline;
    background: var(--c-text-3);
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
    background: var(--c-gradient-10);
    display: flex;
    width: calc(100vw - 30px);
    justify-content: flex-end;
    align-items: center;
    height: 70px;
    box-shadow: 0 3px 8px 0 var(--c-box-shadow-0);
    z-index: 999999;
    padding: 0 17px;
    transition: 0.55s ease-in-out;

    .fancybox-button {
      background: transparent;
      color: var(--c-text-1);

      &:hover {
        color: var(--c-text-0);
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
    color: var(--c-text-1);
  }

  .fancybox-progress {
    background: var(--c-accent-1);
    z-index: 999999999999999999;
  }

  .fancybox-content .fancybox-image {
    box-shadow: 0 3px 8px 0 var(--c-box-shadow-0);
  }

  .fancybox-thumbs {
    background: var(--c-gradient-6);
    box-shadow: 0 3px 8px 0 var(--c-box-shadow-0);
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
  @media (max-width: 1600px) {
    .art-banner .art-banner-overlay {
      .art-banner-title h1 {
        font-size: 42px;
      }

      .art-banner-photo {
        width: 360px;
      }
    }
  }

  /* ------------------------------ content (after 1400px) ------------------------------ */
  @media (max-width: 1400px) {
    .art-banner-back {
      display: none;
    }

    .art-banner .art-banner-overlay {
      .art-banner-title h1 {
        font-size: 36px;
      }

      .art-banner-photo {
        width: 320px;
      }
    }
  }

  /* ------------------------------ content (after 1200px) ------------------------------ */
  @media (max-width: 1200px) {
    .art-banner .art-banner-overlay .art-banner-photo {
      display: none;
    }

    .art-grid {
      &.art-grid-2-col .art-grid-item,     &.art-grid-3-col .art-grid-item {
        width: 50%;
      }
    }
  }

  /* ------------------------------ content (after 920px) ------------------------------ */
  @media (max-width: 920px) {
    .art-banner .art-banner-overlay {
      padding: 60px 30px;

      .art-banner-title {
        text-align: center;

        h1 {
          font-size: 46px;
        }

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
      &.art-grid-2-col .art-grid-item,     &.art-grid-3-col .art-grid-item {
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
      &.art-grid-2-col .art-grid-item,     &.art-grid-3-col .art-grid-item {
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

  /* ------------------------------ burger button ------------------------------ */

  .art-menu-bar-btn {
    margin-top: -10px;
    display: inline-block;
    width: 15px;
    height: 12px;
    padding: 30px;

    span {
      content: '';
      display: block;
      width: 15px;
      height: 3px;
      border-radius: 1px;
      background: var(--c-text-1);
      transition: 0.4s ease-in-out;
      backface-visibility: hidden;

      &:after,     &:before {
        content: '';
        display: block;
        width: 15px;
        height: 3px;
        border-radius: 1px;
        background: var(--c-text-1);
        transition: 0.4s ease-in-out;
        backface-visibility: hidden;
      }

      position: relative;
      margin: 5px 0 0;

      &:after {
        position: absolute;
      }

      &:before {
        position: absolute;
        top: -5px;
      }

      &:after {
        top: 5px;
      }
    }

    &.art-active span {
      transform: rotate(45deg);

      &:before {
        transform: translate(0px, 5px) rotate(-90deg);
      }

      &:after {
        transform: translate(0px, -5px) rotate(-90deg);
      }
    }

    &:hover span {
      background: var(--c-text-0);

      &:after,     &:before {
        background: var(--c-text-0);
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

    .art-a,   .art-current-page {
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
