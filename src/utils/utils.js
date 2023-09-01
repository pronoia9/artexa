'use client';

import emailjs from '@emailjs/browser';
import { Fancybox } from '@fancyapps/ui';
import * as ProgressBar from 'progressbar.js';
import confetti from 'canvas-confetti';

import { themes, colors } from '@/styles/Themes';

const storageKey = 'artexaSettings';

//--------------------------- THEME STUFF START --------------------------//
// Get the system theme based on the user's OS preference
export const getSystemTheme = () => {
  if (typeof window !== 'undefined') return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

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
//---------------------------- THEME STUFF END ---------------------------//
//
//
//
//-------------------------- RANDOM UTILS START --------------------------//
// Convert a string to lowercase
export const lowerCase = (t) => `${t}`.toLowerCase();

// Generate a random number between min and max (inclusive)
export const rng = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const rngInRange = (min, max) => Math.random() * (max - min) + min;

export const rngPickRandom = (arr) => arr[rng(0, arr.length - 1)];

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
  if (typeof window !== 'undefined')
    return (window.innerWidth > 1020 ? cols : window.innerWidth > 768 ? Math.max(cols - 1, 2) : Math.max(cols - 1, 1)) * rows;
};
//--------------------------- RANDOM UTILS END ---------------------------//
//
//
//
//-------------------------- PROGRESSBARS START --------------------------//
export const ProgressbarInstance = ({ type = 'circle', level, index, hide, duration, delay }) => {
  const id = `#${type}prog${index}`;
  switch (type) {
    case 'circle':
      return new ProgressBar.Circle(id, {
        strokeWidth: 7,
        easing: 'easeInOut',
        duration: duration || 1400,
        delay: delay || 3400 + Number(index) * 100,
        trailWidth: 7,
        step: (state, bar) => {
          bar.setText(!hide ? `${level}%` : '');
        },
      });
    case 'line':
      return new ProgressBar.Line(id, {
        strokeWidth: 1.72,
        easing: 'easeInOut',
        duration: duration || 1400,
        delay: delay || 4700 + Number(index) * 100,
        trailWidth: 7,
        svgStyle: { width: '100%', height: '100%' },
        step: (state, bar) => {
          bar.setText(!hide ? `${level} %` : '');
        },
      });
    case 'preloader':
      return new ProgressBar.Line(id, {
        strokeWidth: 1.7,
        easing: 'easeInOut',
        duration: duration || 5000,
        delay: delay || 750,
        trailWidth: 1.7,
        svgStyle: { width: '100%', height: '100%' },
        step: (state, bar) => {
          bar.setText(Math.round(bar.value() * 100) + ' %');
        },
      });
    default:
      return null;
  }
};
//--------------------------- PROGRESSBARS END ---------------------------//
//
//
//
//------------------------------ FORM START ------------------------------//
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
//------------------------------- FORM END -------------------------------//
//
//
//
//---------------------------- FANCYBOX START ----------------------------//
export const openFancybox = (image) => {
  Fancybox.show([{ src: image, type: 'image' }]);
};
//----------------------------- FANCYBOX END -----------------------------//
//
//
//
//---------------------------- CONFETTI START ----------------------------//
// Basic Cannon
// The default mode... just your regular basic average blast of confetti. But it's still a little cool, right?
export const confettiBasicCannon = (myConfetti = confetti) => {
  myConfetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
};

// Random Direction
// Go crazy with some randomness. Shoot a random amount of confetti in random directions. (Go ahead... you know you want to click that button more than once.)
export const confettiRandomDirection = (myConfetti = confetti) => {
  myConfetti({
    angle: rngInRange(55, 125),
    spread: rngInRange(50, 70),
    particleCount: rngInRange(50, 100),
    origin: { y: 0.6 },
  });
};

// Realistic Look
// If you happened to get curious and changed the particle count to 400 or so, you saw something disappointing. An even "flattened cone" look to the confetti, making it look way too perfect and ruining the illusion. We can fix that by mixing a few effects together.
export const confettiRealisticLook = (myConfetti = confetti) => {
  let count = 200;
  let defaults = { origin: { y: 0.7 } };

  function fire(particleRatio, opts) {
    myConfetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      })
    );
  }

  fire(0.25, { spread: 26, startVelocity: 55 });
  fire(0.2, { spread: 60 });
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
  fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  fire(0.1, { spread: 120, startVelocity: 45 });
};

// Stars
// You can combine multiple calls to confetti with any settings in order to create a more complex effect. Go ahead, combine different shapes, sizes, etc. Stagger them for an extra boost of excitement.
// ✨ Celebrate with a burst of stars! ✨
export const confettiStars = (myConfetti = confetti) => {
  var defaults = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ['star'],
    colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8'],
  };

  function shoot() {
    myConfetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ['star'],
    });

    myConfetti({
      ...defaults,
      particleCount: 10,
      scalar: 0.75,
      shapes: ['circle'],
    });
  }

  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
};

// Fireworks
// Why click a button repeatedly when you can have code do it for you? Shoot some firework of confetti from the sides of page so you can still read the content in the center.
export const confettiFireworks = (myConfetti = confetti) => {
  let duration = 15 * 1000;
  let animationEnd = Date.now() + duration;
  let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  let interval = setInterval(function () {
    let timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) return clearInterval(interval);

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    myConfetti(Object.assign({}, defaults, { particleCount, origin: { x: rngInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
    myConfetti(Object.assign({}, defaults, { particleCount, origin: { x: rngInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
  }, 250);
};

// Snow
// The effect is not limited to crazy rapid fire of confetti though. You can create a wintery mood with gently falling particles across the entire page.
export const confettiSnow = (myConfetti = confetti) => {
  let duration = 15 * 1000;
  let animationEnd = Date.now() + duration;
  let skew = 1;

  (function frame() {
    let timeLeft = animationEnd - Date.now();
    let ticks = Math.max(200, 500 * (timeLeft / duration));
    skew = Math.max(0.8, skew - 0.001);

    myConfetti({
      particleCount: 1,
      startVelocity: 0,
      ticks: ticks,
      origin: {
        x: Math.random(),
        // since particles fall down, skew start toward the top
        y: Math.random() * skew - 0.2,
      },
      colors: ['#ffffff'],
      shapes: ['circle'],
      gravity: rngInRange(0.4, 0.6),
      scalar: rngInRange(0.4, 1),
      drift: rngInRange(-0.4, 0.4),
    });

    if (timeLeft > 0) requestAnimationFrame(frame);
  })();
};

// School Pride
// But if you are into crazy rapid fire of confetti, what could be a better use than to show everyone what you are all about? Tell people where you are from with two confetti cannons from either side of the page.
// 🌰 Go Buckeyes! 🌰
export const confettiSchoolPride = (myConfetti = confetti) => {
  let end = Date.now() + 15 * 1000;
  let colors = ['#bb0000', '#ffffff'];

  (function frame() {
    myConfetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
    myConfetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < end) requestAnimationFrame(frame);
  })();
};
//----------------------------- CONFETTI END -----------------------------//
//
//
//
//----------------------------- THREEJS START ----------------------------//
//------------------------------ THREEJS END -----------------------------//
