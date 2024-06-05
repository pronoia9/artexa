'use client';

import { themes, colors } from '@/styles/Themes';

const storageKey = 'artexaSettings';

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
