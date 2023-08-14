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
    { title: 'light', icon: 'far fa-sun' },
    { title: 'dark', icon: 'far fa-moon' },
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

  // TODO: IFRAME BROWSER OVERLAY
  frameLink: '',
  setFrameLink: (link) => set({ frameLink: link }),
}));
