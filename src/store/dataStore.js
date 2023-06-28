import { create } from 'zustand';

import { avatar, wave, footer1, footer2, footer3, footer4 } from '../assets';
import { getThemeFromStorage } from '../utils';
import { saveThemeToStorage } from '../utils/utils';

export const dataStore = create((set) => ({
  // LOADING (PRELOADER)
  loading: true,
  setLoading: (loading) => set({ loading }),

  // LAPTOP
  laptopOpen: false,
  setLaptopOpen: (laptopOpen) => set({ laptopOpen }),
  toggleLaptopOpen: () => set((state) => ({ laptopOpen: !state.laptopOpen })),
  laptopHover: false,
  setLaptopHover: (laptopHover) =>
    set((state) => {
      const [outer, inner] = document.querySelectorAll('.animated-cursor div');
      inner.style.width = laptopHover && !state.laptopOpen ? 0 : '40px';
      inner.style.height = laptopHover && !state.laptopOpen ? 0 : '40px';
      outer.style.width = laptopHover && !state.laptopOpen ? '80px' : '40px';
      outer.style.height = laptopHover && !state.laptopOpen ? '80px' : '40px';
      return { laptopHover };
    }),

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

  cursorOptions: {
    innerSize: 40,
    innerScale: 0,
    trailingSpeed: 1,
    outerSize: 40,
    outerScale: 2,
    outerAlpha: 0,
    hasBlendMode: true,
    innerStyle: {
      backgroundColor: 'var(--c-accent-5)',
    },
    outerStyle: {
      border: '3px solid var(--c-accent-5)',
    },
    clickables: [
      'a',
      'input[type="text"]',
      'input[type="email"]',
      'input[type="number"]',
      'input[type="submit"]',
      'input[type="image"]',
      'label[for]',
      'select',
      'textarea',
      'button',
      '.link',
      '.art-menu-bar-header',
      '.theme-button',
      '.art-strengths div',
      '.art-knowledge-list li',
      '.art-hard-skills-item',
      '.art-lang-skills-item',
      '.art-brand',
      '.hero-heading',
    ],
  },

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

    skills: {
      hard: [
        {
          title: 'HTML',
          description: `A weaver of the web's foundational tapestry, crafting structured elegance that dances across the digital realm, guiding users on a visual journey of enchantment.`,
          level: 85,
        },
        {
          title: 'CSS',
          description: `A virtuoso of style and form, fashioning the visual symphony that adorns the web's canvas, harmonizing colors, layouts, and animations to create an immersive experience.`,
          level: 70,
        },
        {
          title: 'JavaScript',
          description: `An alchemist of interactivity, infusing life into web applications with spells of dynamic functionality, casting spells that engage and captivate users at every turn.`,
          level: 90,
        },
        {
          title: 'React',
          description: `A maestro of user interfaces, conducting the orchestration of reusable components and state management, composing harmonies that resonate with seamless efficiency.`,
          level: 85,
        },
        {
          title: 'Three.js',
          description: `A magician of the third dimension, conjuring captivating realms of 3D wonder, where pixels transcend their flat nature and come alive in a dance of depth and immersion.`,
          level: 70,
        },
      ],

      soft: [
        [
          {
            title: 'Nextjs',
            description: ``,
            level: 0,
          },
          {
            title: 'Redux',
            description: ``,
            level: 0,
          },
          {
            title: 'Zustand',
            description: ``,
            level: 0,
          },
        ],
        [
          {
            title: 'Node.js',
            description: `A guardian of the server-side, standing steadfast as a sentinel, wielding the power of Node.js to build scalable and robust backends, ensuring a steady flow of mystical energy to power web applications.`,
            level: 60,
          },
          {
            title: 'MongoDB, PostgreSQL',
            description: `Keepers of digital knowledge, guardians of data's secrets, enabling the storage, retrieval, and manipulation of information that shapes the destiny of web applications.`,
            level: 60,
          },
        ],
        [
          {
            title: 'React Three Fiber',
            description: `A sorcerer of integration, seamlessly merging the realms of React and Three.js, casting spells that empower the creation of interactive and enchanting 3D web applications.`,
            level: 70,
          },
          {
            title: 'Blender',
            description: `A visionary artist, wielding the brush of creativity to mold digital clay into breathtaking 3D masterpieces, breathing life into virtual sculptures that transcend imagination.`,
            level: 60,
          },
        ],
        [
          {
            title: 'Git',
            description: `A sage of version control, guarding against chaos and confusion, allowing teams to collaborate in a synchronized dance, preserving the integrity of projects with each graceful commit.`,
            level: 60,
          },
          {
            title: 'Bash',
            description: ``,
            level: 0,
          },
        ],
        [
          {
            title: 'Photoshop',
            description: `A brush-wielding virtuoso, harnessing the power of pixels to shape digital realms, seamlessly blending artistry and technical prowess to create visually stunning masterpieces that captivate the senses.`,
            level: 20,
          },
          {
            title: 'Excel',
            description: ``,
            level: 0,
          },
        ],
      ],
    },

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

  // SECTIONS
  // Hero
  hero: {
    heading: ['hi.', 'welcome.'],
    avatar: wave,
    typed: [
      'Weaving pixels, lines, and a sprinkle of web magic to create jaw-dropping digital wonders.',
      "Turning caffeine-fueled ideas into mind-bending web experiences that leave users asking, 'How did they do that?'",
      "Bending the laws of web development like Neo bending spoons in 'The Matrix', but with more stylish CSS.",
      'Crafting web experiences so delightful, they make unicorns jealous.',
      "Mixing equal parts of coding finesse, design wizardry, and dad jokes for a web experience that's unforgettable and pun-tastic.",
      'Bringing web development prowess and a sense of humor that can make even JavaScript smile (almost).',
      'Building web applications with more flair than a magician pulling rabbits out of hats (although, ours are virtual rabbits).',
      'Infusing web development with a touch of whimsy, a dash of quirkiness, and just a hint of irreverence.',
      "Creating web experiences that are so addictive, users will keep refreshing the page hoping for more surprises (we don't recommend it, though).",
      'Unleashing a web development superpower: the ability to turn coffee into code, errors into laughter, and ideas into pixel-perfect reality.',
    ],
    button: { text: 'beam me up scotty', url: '' },
  },

  // Counters
  counters: [
    { id: 1, number: new Date().getFullYear() - new Date('2021').getFullYear(), text: 'Years Experience' },
    { id: 2, number: 3, text: 'Certificates' },
    { id: 3, number: 85, text: 'Completed Projects' },
  ],

  // Projects
  projects: {
    filter: [
      { id: 0, category: 'All Categories', dataFilter: null },
      { id: 1, category: 'Full', dataFilter: 'full' },
      { id: 2, category: 'Mini', dataFilter: 'mini' },
      { id: 3, category: 'React', dataFilter: 'react' },
      { id: 4, category: 'APIs', dataFilter: 'api' },
      { id: 5, category: 'CSS', dataFilter: 'css' },
    ],

    projects: [
      {
        id: 0,
        filters: ['full', 'react', 'database'],
        url: 'https://pronoia9.github.io/portfolio/',
        title: 'Portfolio',
        tags: ['React', 'HTML', 'CSS', 'Javascript', 'Database'],
        images: ['/images/projects/portfolio.png'],
        overview: '',
      },
      {
        id: 1,
        filters: ['mini', 'react', 'api'],
        url: 'https://pronoia9.github.io/ztmtcwd-robofriends/',
        title: 'Robofriends',
        tags: ['React', 'HTML', 'CSS', 'Javascript', 'APIs'],
        images: ['/images/projects/robofriends.png'],
        overview: '',
      },
      {
        id: 2,
        filters: ['mini', 'react', 'api'],
        url: 'https://pronoia9.github.io/westsum/',
        title: 'Westsum',
        tags: ['React', 'HTML', 'CSS', 'Javascript', 'APIs'],
        images: ['/images/projects/westsum1.png', '/images/projects/westsum2.png', '/images/projects/westsum3.png'],
        overview: '',
      },
      {
        id: 3,
        filters: ['full', 'react', 'database', 'api'],
        url: 'https://pronoia9.github.io/ztmtcwd-smartbrains/',
        title: 'Smartbrains',
        tags: ['React', 'HTML', 'CSS', 'Javascript', 'SQL', 'API'],
        images: ['/images/projects/smartbrains.png'],
        overview: '',
      },
      {
        id: 4,
        filters: ['mini', 'react', 'api'],
        url: 'https://pronoia9.github.io/advice_generator/',
        title: 'Advice Generator',
        tags: ['React', 'HTML', 'CSS', 'Javascript', 'APIs'],
        images: ['/images/projects/advice_generator.png'],
        overview:
          "The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.",
      },
      {
        id: 5,
        filters: ['mini', 'react'],
        url: 'https://pronoia9.github.io/time_tracking_dashboard',
        title: 'Time Tracking Dashboard',
        tags: ['React', 'HTML', 'CSS', 'Javascript'],
        images: ['/images/projects/time_tracking.jpg'],
        overview:
          'A perfect opportunity to practice your CSS Grid skills. For anyone wanting to take it up a notch, we provide a JSON data file to practice working with data.',
      },
      {
        id: 6,
        filters: ['mini', 'react'],
        url: 'https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX',
        title: 'Tip Calculator App',
        tags: ['React', 'HTML', 'CSS', 'Javascript'],
        images: ['/images/projects/tip_calculator.jpg'],
        overview: 'This small app is perfect for anyone starting to get to grips with JavaScript. The calculator functionality will be a nice test!',
      },
      {
        id: 7,
        filters: ['mini', 'react'],
        url: 'https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8',
        title: 'Interactive Pricing Component',
        tags: ['React', 'HTML', 'CSS', 'Javascript'],
        images: ['/images/projects/interactive_pricing.jpg'],
        overview:
          "In this project, you'll build out an interactive pricing component complete with custom range input slider and pricing toggle. A perfect way to test your JS skills!",
      },
      {
        id: 8,
        filters: ['mini', 'react'],
        url: 'https://www.frontendmentor.io/challenges/tic-tac-toe-game-Re7ZF_E2v',
        title: 'Tic Tac Toe Game',
        tags: ['React', 'HTML', 'CSS', 'Javascript'],
        images: ['/images/projects/tic-tac-toe.jpg'],
        overview:
          'This classic practice project for web developers is a great exercise to complete. It will test your HTML semantics, your grid layout skill, as well as your JS logic.',
      },
      {
        id: 9,
        filters: ['mini', 'react'],
        url: 'https://www.frontendmentor.io/challenges/inbrowser-markdown-editor-r16TrrQX9',
        title: 'Markdown Editor',
        tags: ['React', 'HTML', 'CSS', 'Javascript'],
        images: ['/images/projects/markdown_editor.jpg'],
        overview:
          "In this project, you'll build a fully-functional in-browser markdown editor application with a light/dark mode toggle. It's also perfect to build as a full-stack app!",
      },
      {
        id: 10,
        filters: ['mini', 'react'],
        url: 'https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29',
        title: 'Calculator App',
        tags: ['React', 'HTML', 'CSS', 'Javascript'],
        images: ['/images/projects/calculator.jpg'],
        overview:
          "This calculator app will be a great test of your CSS and JS skills especially. If you're wanting to practice using Grid, this challenge will be perfect for you!",
      },
      {
        id: 11,
        filters: ['mini', 'react'],
        url: 'https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-',
        title: 'Launch countdown timer',
        tags: ['React', 'HTML', 'CSS', 'JS'],
        images: ['/images/projects/cooldown-timer.jpg', '/images/projects/cooldown-timer_mobile.jpg'],
        overview:
          'This will be a fun one! Your challenge is to build this countdown timer. There are lots of small CSS tests in the design as well. So it should keep you busy!',
      },
      {
        id: 12,
        filters: ['mini', 'react'],
        url: 'https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW',
        title: 'Todo app',
        tags: ['HTML', 'CSS', 'ReactJS', 'NodeJS'],
        images: ['/images/projects/todo-list_1.jpg', '/images/projects/todo-list_mobile.jpg'],
        overview: '',
      },
      {
        id: 13,
        filters: ['mini', 'react'],
        url: 'https://www.frontendmentor.io/challenges/clock-app-LMFaxFwrM',
        title: 'Clock app',
        tags: ['HTML', 'CSS', 'JavaScript', 'API'],
        images: [
          '/images/projects/clock-app_1.jpg',
          '/images/projects/clock-app_2.jpg',
          '/images/projects/clock-app_mobile_1.jpg',
          '/images/projects/clock-app_mobile_2.jpg',
        ],
      },
      {
        id: 14,
        filters: ['mini', 'react'],
        url: 'https://www.frontendmentor.io/challenges/dine-restaurant-website-yAt7Vvxt7',
        title: 'Dine restaurant website',
        tags: ['HTML', 'CSS', 'JavaScript'],
        images: [
          '/images/projects/restaurant-website_1.jpg',
          '/images/projects/restaurant-website_2.jpg',
          '/images/projects/restaurant-website_mobile.jpg',
        ],
      },
      {
        id: 15,
        filters: ['mini', 'react'],
        url: 'https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0',
        title: 'IP Address Tracker',
        tags: ['HTML', 'CSS', 'JavaScript', 'API'],
        images: ['/images/projects/ip-address-tracker.jpg', '/images/projects/ip-address-tracker_mobile.jpg'],
        overview: '',
      },
      {
        id: 16,
        filters: ['mini', 'react'],
        url: 'https://www.frontendmentor.io/challenges/pomodoro-app-KBFnycJ6G',
        title: 'Pomodoro app',
        tags: ['HTML', 'CSS', 'JavaScript'],
        images: [
          '/images/projects/pomodoro_1.jpg',
          '/images/projects/pomodoro_2.jpg',
          '/images/projects/pomodoro_mobile_1.jpg',
          '/images/projects/pomodoro_mobile_1.jpg',
        ],
      },
      {
        id: 17,
        filters: ['mini', 'react'],
        url: 'https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH',
        title: 'Rock, Paper, Scissors game',
        tags: ['HTML', 'CSS', 'JavaScript'],
        images: [
          '/images/projects/rock-paper-scissors_1.jpg',
          '/images/projects/rock-paper-scissors_2.jpg',
          '/images/projects/rock-paper-scissors_mobile.jpg',
        ],
      },
      {
        id: 18,
        filters: ['mini', 'react'],
        url: 'https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca',
        title: 'REST Countries API with color theme switcher',
        tags: ['HTML', 'CSS', 'JavaScript', 'API'],
        images: ['/images/projects/rest-countries.jpg', '/images/projects/rest-countries_mobile.jpg'],
        overview: '',
      },
      {
        id: 19,
        filters: ['mini', 'react'],
        url: 'https://www.frontendmentor.io/challenges/devjobs-web-app-HuvC_LP4l',
        title: 'DevJobs API',
        tags: ['HTML', 'CSS', 'JavaScript', 'API'],
        images: ['/images/projects/github-jobs.jpg', '/images/projects/github-jobs_mobile.jpg'],
      },
    ],
  },
}));
