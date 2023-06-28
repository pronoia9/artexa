// import anime from 'animejs/lib/anime.es.js';
import * as ProgressBar from 'progressbar.js';

import { themes, colors } from '../styles/Themes';

const storageKey = 'artexaSettings';

//------------------------------ THEME STUFF -----------------------------//

// Get the system theme based on the user's OS preference
export const getSystemTheme = () => (window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

// Get the theme object based on the provided theme name
export const getThemeObject = (theme) => themes[theme] || colors[theme] || {};

// Get the stored settings object from local storage
export const getStoredSettings = () => JSON.parse(localStorage.getItem(storageKey));

// Set the provided settings object in local storage
export const setStoredSettings = (settings) => {
  localStorage.setItem(storageKey, JSON.stringify(settings));
};

// Get the theme or accent object from local storage based on the provided type
export const getThemeFromStorage = (type) => {
  const storedSettings = getStoredSettings();
  if (!storedSettings) {
    // If no settings found in local storage, set the default settings and return the requested type
    const settings = { theme: getSystemTheme(), accent: 'pastels' };
    setStoredSettings(settings);
    return settings[type] || {};
  }
  return storedSettings[type] || {};
};

// Save the theme or accent value to local storage based on the provided type
export const saveThemeToStorage = (type, value) => {
  const storedSettings = getStoredSettings();
  setStoredSettings({ ...storedSettings, [type]: value });
};

// Check if the theme is dark
export const isDarkTheme = (theme) => theme === 'dark';

//----------------------------- RANDOM UTILS -----------------------------//

// Convert a string to lowercase
export const lowerCase = (t) => `${t}`.toLowerCase();

// Generate a random number between min and max (inclusive)
export const rng = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Convert a pixel value to rem
export const rem = (val) => `${parseInt(val) / 16}rem`;

// Convert an RGBA color to hex format
export const rgbaToHex = (rgbaColor) => {
  // Extract the RGBA values
  const rgbaValues = rgbaColor.match(/(\d+(\.\d+)?)/g);
  const red = parseInt(rgbaValues[0]);
  const green = parseInt(rgbaValues[1]);
  const blue = parseInt(rgbaValues[2]);
  // Convert RGB to hex
  const hexValue = ((red << 16) | (green << 8) | blue).toString(16).padStart(6, '0');
  return '#' + hexValue;
};

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

//----------------------------- PROGRESSBARS -----------------------------//
export const ProgressbarInstance = ({ type = 'circle', level, index, hide }) => {
  const id = `#${type}prog${index}`;
  switch (type) {
    case 'circle':
      return new ProgressBar.Circle(id, {
        strokeWidth: 7,
        easing: 'easeInOut',
        duration: 1400,
        delay: 2400 + Number(index) * 100,
        trailWidth: 7,
        step: (state, bar) => { bar.setText(`${level}%`); },
      });
    case 'line':
      return new ProgressBar.Line(id, {
        strokeWidth: 1.72,
        easing: 'easeInOut',
        duration: 1400,
        delay: 2700 + Number(index) * 100,
        trailWidth: 7,
        svgStyle: { width: '100%', height: '100%' },
        step: (state, bar) => { bar.setText(!hide ? `${level} %`: ''); },
      });
    case 'preloader':
      return new ProgressBar.Line(id, {
        strokeWidth: 1.7,
        easing: 'easeInOut',
        duration: 5000,
        delay: 750,
        trailWidth: 1.7,
        svgStyle: { width: '100%', height: '100%', },
        step: (state, bar) => { bar.setText(Math.round(bar.value() * 100) + ' %'); },
      });
    default:
      return null;
  }
};

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
