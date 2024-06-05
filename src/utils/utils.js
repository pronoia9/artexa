'use client';

// Convert a string to lowercase
export const lowerCase = (t) => `${t}`.toLowerCase();

// Generate a random number between min and max (inclusive)
export const rng = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const rngInRange = (min, max) => Math.random() * (max - min) + min;

export const rngPickRandom = (arr) => arr[rng(0, arr.length - 1)];

// TODO: fix rem
// Convert a pixel value to rem
// export const rem = (val) => `${parseFloat(val) / 16}rem`;
export const rem = (val) => `${val}px`;

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

//----------------------------- THREEJS START ----------------------------//
// export const objectsUpdateResponsive = (offset) => {
//   const width = window.innerWidth;
//   switch (true) {
//     case width < 350:  return { room: 0.3 , camera: offset > 0.75 ? 2.025 : 0 };
//     case width < 425:  return { room: 0.35, camera: offset > 0.75 ? 1.9 : 0 };
//     case width < 550:  return { room: 0.4 , camera: offset > 0.75 ? 1.8 : 0 };
//     case width < 700:  return { room: 0.55, camera: offset > 0.75 ? 1.425 : 0 };
//     case width < 900:  return { room: 0.7 , camera: offset > 0.75 ? 1.045 : 0 };
//     case width < 1100: return { room: 0.85, camera: offset > 0.75 ? 0.675 : 0 };
//     default:           return { room: 1,    camera: offset > 0.75 ? 0.3 : 0, cube: 0.25, };
//   }
// };
//------------------------------ THREEJS END -----------------------------//
