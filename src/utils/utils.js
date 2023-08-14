import emailjs from '@emailjs/browser';
import { Fancybox } from '@fancyapps/ui';
import * as ProgressBar from 'progressbar.js';

import { themes, colors } from '@/styles/Themes';

const storageKey = 'artexaSettings';

//------------------------------ THEME STUFF -----------------------------//

// Get the system theme based on the user's OS preference
export const getSystemTheme = () => {
  if (typeof window !== 'undefined') return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Get the theme object based on the provided theme name
export const getThemeObject = (theme) => themes[theme] || colors[theme] || {};

// Get the stored settings object from local storage
export const getStoredSettings = () => {
  if (typeof window !== 'undefined') return JSON.parse(localStorage.getItem(storageKey));
};

// Set the provided settings object in local storage
export const setStoredSettings = (settings) => {
  if (typeof window !== 'undefined') localStorage.setItem(storageKey, JSON.stringify(settings));
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

export const getProjectsCount = (rows = 3, cols = 2) => {
  if (typeof window !== 'undefined') return (window.innerWidth > 1020 ? cols : window.innerWidth > 768 ? Math.max(cols - 1, 2) : Math.max(cols - 1, 1)) * rows;
}

//----------------------------- PROGRESSBARS -----------------------------//
export const ProgressbarInstance = ({ type = 'circle', level, index, hide, duration = 5000, delay = 750 }) => {
  const id = `#${type}prog${index}`;
  switch (type) {
    case 'circle':
      return new ProgressBar.Circle(id, {
        strokeWidth: 7,
        easing: 'easeInOut',
        duration: 1400,
        delay: 3400 + Number(index) * 100,
        trailWidth: 7,
        step: (state, bar) => { bar.setText(!hide ? `${level}%`: ''); },
      });
    case 'line':
      return new ProgressBar.Line(id, {
        strokeWidth: 1.72,
        easing: 'easeInOut',
        duration: 1400,
        delay: 4700 + Number(index) * 100,
        trailWidth: 7,
        svgStyle: { width: '100%', height: '100%' },
        step: (state, bar) => { bar.setText(!hide ? `${level} %` : ''); },
      });
    case 'preloader':
      return new ProgressBar.Line(id, {
        strokeWidth: 1.7,
        easing: 'easeInOut',
        duration,
        delay,
        trailWidth: 1.7,
        svgStyle: { width: '100%', height: '100%' },
        step: (state, bar) => { bar.setText(Math.round(bar.value() * 100) + ' %'); },
      });
    default:
      return null;
  }
};

//--------------------------------- FORM ---------------------------------//
export const handleFormSubmit = (values, { setSubmitting, resetForm }, setSuccess) => {
  emailjs
    .send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, values, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
    .then(
      (result) => {
        setSuccess(true);
        setTimeout(() => {
          resetForm();
          setSuccess(false);
        }, 5000);
      },
      (error) => {
        console.log('Error sending message.', error.text);
      }
    );
};

//------------------------------- FANCYBOX -------------------------------//

export const openFancybox = (image) => {
  Fancybox.show([{ src: image, type: 'image' }]);
};
