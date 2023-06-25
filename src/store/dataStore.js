import { create } from 'zustand';

import { avatar, footer1, footer2, footer3, footer4 } from '../assets';
import { getSystemTheme } from '../utils';

export const dataStore = create((set) => ({
  // THEME
  theme: getSystemTheme(),
  setTheme: (theme) => set({ theme }),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
  themes: [
    { title: 'light', icon: 'far fa-sun' },
    { title: 'dark', icon: 'far fa-moon' },
  ],
  // ACCENT / COLORS
  accent: 'pastels',
  setAccent: (accent) => set({ accent }),

  // ROUTES
  routes: [
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
    { title: 'Courses', path: '/courses' },
    { title: 'History', path: '/history' },
    { title: 'Projects', path: '/projects' },
    { title: 'Technologies', path: '/technologies' },
    { title: 'Home', path: '/' },
    { title: 'NotFound', path: '' },
  ],

  // Sidebar / Navbar / Overlay
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

  // SIDEBAR
  sidebar: {
    profile: {
      name: 'Jay Ansin',
      nameLink: '/',
      subtitle: ['Full-Stack Developer,', 'Avid pet lover 🐶'],
      available: true,
      avatar,
    },

    about: [
      { id: 1, title: 'Nationality:', subtitle: 'U.S.' },
      { id: 2, title: 'Age', subtitle: new Date().getFullYear() - new Date('April 15, 1995').getFullYear() },
    ],

    languages: [
      { id: '1', language: 'English', level: 100 },
      { id: '2', language: 'French', level: 10 },
      { id: '3', language: 'Japanese', level: 5 },
    ],

    hardSkills: [
      { id: '1', skill: 'HTML5', level: 85 },
      { id: '2', skill: 'CSS3', level: 60 },
      { id: '3', skill: 'JavaScript', level: 80 },
      { id: '4', skill: 'ReactJS', level: 70 },
      { id: '5', skill: 'NodeJS', level: 50 },
    ],

    softSkills: ['Nextjs, Redux', 'MySQL, MongoDB, PostgresSQL', 'Blender, Threejs', 'Git, GitHub', 'Bash, Zsh', 'Photoshop, Excel'],

    strengths: [
      'Communicating',
      'Team oriented',
      'Organizational',
      'Logical thinking',
      'Detail oriented',
      'Flexible',
      'Caring',
      'Dedicated',
      'Punctual',
      'Focused',
      'Loyal',
      'Adaptable',
      'Tech savvy',
    ],

    resume: {
      title: 'Download Resume',
      url: '',
    },

    // TODO: Change non link socials with a hover info maybe
    social: [
      {
        id: 1,
        platform: 'github',
        favicon: 'fab fa-github-square',
        fancybox: null,
        url: 'https://github.com/pronoia9/',
      },
      {
        id: 2,
        platform: 'linkedin',
        favicon: 'fab fa-linkedin',
        fancybox: null,
        url: 'https://www.linkedin.com/in/jayansin/',
      },
      {
        id: 3,
        platform: 'facebook social-unavailable',
        favicon: 'fab fa-facebook-square',
        fancybox: null,
        url: 'https://www.facebook.com/',
      },
      {
        id: 4,
        platform: 'snapchat',
        favicon: 'fab fa-snapchat-square',
        fancybox: 'snapchat',
        url: '/images/bitmoji/snapchat.png',
      },
      {
        id: 5,
        platform: 'discord social-unavailable',
        favicon: 'fab fa-discord',
        fancybox: null,
        url: 'https://discordapp.com/',
      },
    ],
  },

  // NAVBAR
  navbar: [
    { id: 0, title: 'Home', path: '/' },
    {
      id: 1,
      title: 'Projects',
      path: '/projects',
      // submenu: [
      //   { id: 10, title: 'Projects', subtitle: '2', path: '/projects-2' },
      //   { id: 11, title: 'Projects', subtitle: '3', path: '/projects-3' },
      // ],
    },
    { id: 2, title: 'History', path: '/history' },
    { id: 3, title: 'Courses', path: '/courses' },
    {
      id: 4,
      title: 'Technologies',
      path: '/technologies',
      // submenu: [
      //   { id: 40, title: 'Technologies', subtitle: '2', path: '/technologies-2' },
      //   { id: 41, title: 'Technologies', subtitle: '3', path: '/technologies-3' },
      // ],
    },
    { id: 5, title: 'About', path: '/about' },
    { id: 6, title: 'Contact', path: '/contact' },
  ],

  // IFRAME BROWSER OVERLAY
  frameLink: '',
  setFrameLink: (link) => set({ frameLink: link }),

  // FOOTER
  footer: {
    logos: [footer1, footer2, footer3, footer4],
    text: ['© 2023 All Rights Reserved', 'Email: rainbows@sparkles.com'],
  },
}));
