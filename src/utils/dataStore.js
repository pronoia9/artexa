'use client';

import { create } from 'zustand';

import { getThemeFromStorage, saveThemeToStorage } from '@/utils/utils';

export const dataStore = create((set) => ({
  // LOADING (PRELOADER)
  loading: true,
  setLoading: (loading) => set({ loading }),

  // THEME
  theme: getThemeFromStorage('theme'),
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      saveThemeToStorage('theme', newTheme);
      return { theme: newTheme };
    }),
  themes: [
    { title: 'light', icon: 'sun' },
    { title: 'dark', icon: 'moon' },
  ],
  // ACCENT / COLORS
  accent: getThemeFromStorage('accent'),
  setAccent: (accent) =>
    set(() => {
      saveThemeToStorage('accent', accent);
      return { accent };
    }),

  // SIDEBAR / NAVBAR / OVERLAY
  curtainEnabled: false,
  curtainClose: () => set({ navbarOpen: false, sidebarOpen: false, curtainEnabled: false }),
  
  navbarOpen: false,
  openNavbar: () => set({ navbarOpen: true, sidebarOpen: false, curtainEnabled: true }),
  closeNavbar: () => set({ navbarOpen: false, curtainEnabled: false }),
  toggleNavbar: () =>
    set((state) => ({
      navbarOpen: !state.navbarOpen,
      sidebarOpen: state.sidebarOpen && !state.navbarOpen ? false : state.sidebarOpen,
      curtainEnabled: !state.navbarOpen,
    })),
  
  sidebarOpen: false,
  openSidebar: () => set({ navbarOpen: false, sidebarOpen: true, curtainEnabled: true }),
  closeSidebar: () => set({ sidebarOpen: false, curtainEnabled: false }),
  toggleSidebar: () =>
    set((state) => ({
      navbarOpen: state.navbarOpen && !state.sidebarOpen ? false : state.navbarOpen,
      sidebarOpen: !state.sidebarOpen,
      curtainEnabled: !state.sidebarOpen,
    })),

  projects: {
    filterKey: '',
    setFilterKey: (filterKey) => set((state) => ({ projects: { ...state.projects, filterKey: filterKey } })),
    defaults: { rows: 3, cols: 2 },
    rows: 3,
    setRows: (rows) => set((state) => ({ projects: { ...state.projects, rows: rows } })),
    cols: 2,
    setCols: (cols) => set((state) => ({ projects: { ...state.projects, cols: cols } })),
    count: 6,
    setCount: (count) => set((state) => ({ projects: { ...state.projects, count: count } })),
  },

  technologies: {
    defaults: { rows: 3, cols: 3 },
    rows: 3,
    setRows: (rows) => set((state) => ({ technologies: { ...state.technologies, rows: rows } })),
    cols: 3,
    setCols: (cols) => set((state) => ({ technologies: { ...state.technologies, cols: cols } })),
    count: 6,
    setCount: (count) => set((state) => ({ technologies: { ...state.technologies, count: count } })),
  },
}));
