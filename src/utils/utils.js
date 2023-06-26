// import anime from 'animejs/lib/anime.es.js';
// import SmoothScrollbar from 'smooth-scrollbar';
// import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import * as ProgressBar from 'progressbar.js';

import { themes, colors } from '../styles/Themes';

//------------------------------ THEME STUFF -----------------------------//
export const getSystemTheme = () => (window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

export const getThemeObject = (theme) => themes[theme] || colors[theme] || {};

export const getThemeFromStorage = (type) => {
  const storageKey = 'artexaSettings';
  const storedSettings = JSON.parse(localStorage.getItem(storageKey));
  if (storedSettings) {
    const settings = { theme: getSystemTheme(), accent: 'pastels' };
    localStorage.setItem(storageKey, JSON.stringify(settings));
    return settings[type] || {}
  }
  return storedSettings[type] || {};
};

export const isDarkTheme = (theme) => theme === 'dark';

//----------------------------- RANDOM UTILS -----------------------------//
export const lowerCase = (t) => `${t}`.toLowerCase();

export const rng = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const rem = (val) => `${parseInt(val) / 16}rem`;

export const rgbaToHex = (rgbaColor) => {
  // Extract the RGBA values
  const rgbaValues = rgbaColor.match(/(\d+(\.\d+)?)/g);
  const red = parseInt(rgbaValues[0]);
  const green = parseInt(rgbaValues[1]);
  const blue = parseInt(rgbaValues[2]);
  // Convert RGB to hex
  const hexValue = ((red << 16) | (green << 8) | blue).toString(16).padStart(6, '0');
  return '#' + hexValue;
}

//------------------------------- PRELOADER ------------------------------//
// function loading() {
//   // fade in animation
//   anime({
//     targets: '.art-preloader .art-preloader-content',
//     opacity: [0, 1],
//     delay: 200,
//     duration: 600,
//     easing: 'linear',
//     complete: (anim) => (document.getElementById('art-preloader').style = 'display: flex'),
//   });

//   // fade out animation
//   anime({
//     targets: '.art-preloader',
//     opacity: [1, 0],
//     delay: 2200,
//     duration: 400,
//     easing: 'linear',
//     complete: (anim) => (document.getElementById('art-preloader').style = 'display: none'),
//   });

//   // laoding bar animation
//   var bar = new ProgressBar.Line(
//     '#preloader',
//     {
//       strokeWidth: 1.7,
//       easing: 'easeInOut',
//       duration: 1400,
//       delay: 750,
//       trailWidth: 1.7,
//       svgStyle: {
//         width: '100%',
//         height: '100%',
//       },
//       step: (state, bar) => {
//         bar.setText(Math.round(bar.value() * 100) + ' %');
//       },
//     },
//     []
//   );
//   bar.animate(1);
// }

// ----------------------------- TRANSITION ----------------------------- //
// function transition() {
//   // since the transition-fade containers opacity changes after the first time this function is called
//   // reset it to 0 so it can go from 0-1 again, continuosly
//   try {
//     document.getElementById('transition-fade').style = 'opacity:0';

//     anime({
//       targets: '.transition-fade',
//       opacity: [0, 1],
//       delay: 400,
//       duration: 800,
//       easing: 'linear',
//     });
//   } catch (e) {
//     console.log(e);
//   }
// }

//-----------------------------  SCROLLBAR  ------------------------------//
// function scrollbarInit() {
//   SmoothScrollbar.use(OverscrollPlugin);
//   // content scroll (mid-section)
//   try {
//     SmoothScrollbar.init(document.getElementById('scrollbar'), {
//       plugins: {
//         effect: 'bounce',
//         damping: 0.2,
//         maxOverscroll: 150,
//         glowColor: '#222a2s',
//       },
//     });

//     // info bar scroll (left panel)
//     SmoothScrollbar.init(document.getElementById('sidebar-scrollbar'), {
//       plugins: {
//         effect: 'bounce',
//         damping: 0.2,
//         maxOverscroll: 150,
//         glowColor: '#222a2s',
//       },
//     });
//   } catch (e) {
//     console.log(e);
//   }
// }

//------------------------------  FANCYBOX  ------------------------------//


//----------------------------- PROGRESSBARS -----------------------------//
export const ProgressbarInstance = ({ type = 'circle', level, index }) => {
  switch (type) {
    case 'circle':
      return new ProgressBar.Circle(`#${type}prog${index}`, {
        strokeWidth: 7,
        easing: 'easeInOut',
        duration: 1400,
        delay: 2400 + Number(index) * 100,
        trailWidth: 7,
        step: (state, bar) => { bar.setText(level); },
      });
    case 'line':
      return new ProgressBar.Line(`#${type}prog${index}`, {
        strokeWidth: 1.72,
        easing: 'easeInOut',
        duration: 1400,
        delay: 2700 + Number(index) * 100,
        trailWidth: 7,
        svgStyle: { width: '100%', height: '100%' },
        step: (state, bar) => { bar.setText(level); },
      });
    default:
      return null;
  }
};

//------------------------------- COUNTERS -------------------------------//
// function counterAnimation() {
//   anime({
//     targets: '.art-counter-frame',
//     opacity: [0, 1],
//     duration: 800,
//     delay: 2300,
//     easing: 'linear',
//   });
// }

//--------------------------------- FORM ---------------------------------//
// submit button and form button animation
// function formButtonAnimation() {
//   var tl = anime.timeline({
//     easing: 'easeOutExpo',
//   });

//   tl.add({
//     targets: '.art-submit',
//     opacity: 0,
//     scale: 0.5,
//   }).add({
//     targets: '.art-success',
//     scale: 1,
//     height: '45px',
//   });
//   return true;
// }
