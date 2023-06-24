// import anime from 'animejs/lib/anime.es.js';
// import SmoothScrollbar from 'smooth-scrollbar';
// import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import * as ProgressBar from 'progressbar.js';

import { themes, colors } from '../styles/Themes';

//------------------------------ THEME STUFF -----------------------------//
export const getSystemTheme = () => (window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

export const getTheme = (theme) => themes[theme] || colors[theme] || {};

export const isDarkTheme = (theme) => theme === 'dark';

export const systemThemeChangeHandler = (e, setTheme) => { setTheme(e.matches ? 'dark' : 'light'); };

//----------------------------- RANDOM UTILS -----------------------------//
export const lowerCase = (t) => `${t}`.toLowerCase();

export const rem = (val) => `${parseInt(val) / 16}rem`;

export const rng = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

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
export const progressbarLine = (index, id, level) => {
  const bar = new ProgressBar.Line(`#${id}`, {
    strokeWidth: 1.72,
    easing: 'easeInOut',
    duration: 1400,
    // increase delay down the list (ie: 2800, 2900, 3000, 3100, 3200)
    delay: 2700 + Number(index) * 100,
    trailWidth: 1.72,
    svgStyle: {
      width: '100%',
      height: '100%',
    },
    step: (state, bar) => {
      bar.setText(level + ' %');
    },
  });
  bar.animate(level / 100);
  return bar.destroy();
}

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
