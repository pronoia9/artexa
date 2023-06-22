import { create } from 'zustand';

import { footer1, footer2, footer3, footer4 } from '../assets';
import { getSystemTheme } from '../utils';

export const dataStore = create((set) => ({
  // THEME
  theme: getSystemTheme(),
  setTheme: (theme) => set({ theme }),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
  // ACCENT / COLORS
  accent: 'pastels',
  setAccent: (accent) => set({ accent }),

  // Sidebar/Navbar Overlay
  overlay: false,
  closeOverlay: () => set({ navbarOpen: false, sidebarOpen: false }),
  navbarOpen: false,
  setOverlay: (navbarOpen) => set({ navbarOpen }),
  sidebarOpen: false,
  setOverlay: (sidebarOpen) => set({ sidebarOpen }),

  // SIDEBAR

  // NAVBAR

  // IFRAME BROWSER OVERLAY
  frameLink: '',
  setFrameLink: (link) => set({ frameLink: link }),

  // FOOTER
  footer: { logos: [footer1, footer2, footer3, footer4] },
}));
