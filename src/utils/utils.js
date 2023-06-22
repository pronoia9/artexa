import { themes, colors } from '../styles/Themes';

// THEME RELATED
export const getSystemTheme = () => (window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

export const getTheme = (theme) => (theme === 'light' ? themes.light : themes.dark);

export const isDarkTheme = (theme) => theme === 'dark';

export const systemThemeChangeHandler = (e, setTheme) => { setTheme(e.matches ? 'dark' : 'light'); };

// GENETAL UTILS
export const lowerCase = (t) => `${t}`.toLowerCase();

export const rem = (val) => `${parseInt(val) / 16}rem`;
