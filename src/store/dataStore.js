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

  // Sidebar / Navbar / Overlay
  overlay: false,
  closeOverlay: () => set({ navbarOpen: false, sidebarOpen: false }),
  navbarOpen: false,
  openNavbar: () => set({ navbarOpen: true, sidebarOpen: false }),
  sidebarOpen: true,
  openSidebar: () => set({ navbarOpen: false, sidebarOpen: true }),
  toggleSidebar: () => set((state) => ({
    navbarOpen: navbarOpen && !sidebarOpen ? false : state.navbarOpen,
    sidebarOpen: !state.sidebarOpen,
  })),
  
  // SIDEBAR

  // NAVBAR

  // IFRAME BROWSER OVERLAY
  frameLink: '',
  setFrameLink: (link) => set({ frameLink: link }),

  // FOOTER
  footer: {
    logos: [footer1, footer2, footer3, footer4],
    text: ['© 2023 All Rights Reserved', 'Email: rainbows@sparkles.com'],
  },
}));
