/*
    1. App
    2. 3D
    3. HOC
    4. Layout
    5. Pages
    6. Sections
    7. Components
    8. Utils
*/

/**********************  1. App Start  **********************/
export const appMotion = {
  appContainer: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, delay: 0.1, ease: 'easeInOut' },
  },
  wrapper: {},
};
/***********************  1. App End  ***********************/
/*


*/
/**********************  2. 3D Start  **********************/
export const sceneMotion = () => ({
  initial: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5, delay: 5, ease: 'easeInOut' },
});

export const laptopMotion = (laptopOpen) => ({
  container: {
    animate: laptopOpen ? 'open' : 'close',
  },
  elevate: {
    variants: {
      initial: { y: 0 },
      close: { y: -4, transition: { type: 'spring' } },
      open: { y: -5.5, transition: { type: 'spring' } },
    },
  },
  display: {
    variants: {
      close: { rotateX: 0 },
      open: { rotateX: -Math.PI / 2 },
    },
    transition: { duration: 1.5 },
  },
});
/***********************  2. 3D End  ***********************/
/*


*/
/**********************  3. HOC Start  **********************/
export const pageWrapperMotion = (staggerChildren = 0.5, delayChildren = 0) => ({
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden',
  variants: {
    hidden: { opacity: 0, transition: { when: 'afterChildren' } },
    visible: { opacity: 1, transition: { when: 'beforeChildren', staggerChildren, delayChildren } },
  },
});

export const sectionWrapperMotion = (staggerChildren = 0.25, delayChildren = 0) => ({
  variants: {
    hidden: { opacity: 0, y: 250, when: 'afterChildren' },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', when: 'beforeChildren', staggerChildren, delayChildren } },
  },
});
/***********************  3. HOC End  ***********************/
/*


*/
/**********************  4. Layout Start  **********************/
// Sidebar
export const sidebarMotion = {
  sidebar: {
    initial: 'hidden',
    animate: 'visible',
    variants: {
      hidden: { opacity: 0, x: -200 },
      visible: { opacity: 1, x: 0, y: 0, transition: { staggerChildren: 0.25, when: 'beforeChildren', delayChildren: 0.5 } },
    },
  },
  scrollContent: { variants: staggerContainer(0.5) },
  // Divider
  divider: (delay = 0) => ({ variants: fadeIn({ type: 'tween', ease: 'linear', duration: 0.5, delay }, 'right', '100') }),
  // Profile
  profile: {
    container: { variants: staggerContainer(0.25) },
    avatarContainer: { variants: staggerContainer(1) },
    avatarItem: { variants: zoomIn() },
    texts: { variants: staggerContainer(0.5, 1.5) },
    posts: { variants: staggerContainer(0.5) },
  },
  // Info
  info: {
    container: { variants: staggerContainer(1) },
    item: { variants: staggerContainer(0.5) },
    subtitle: { variants: zoomIn() },
  },
  // Languages
  languages: {
    container: { variants: staggerContainer(0.25) },
    item: { variants: staggerContainer(0.25) },
    bar: { variants: zoomIn() },
  },
  // Hard Skills
  hardSkills: {
    container: { variants: staggerContainer(0.1) },
    item: { variants: slideIn({ staggerChildren: 0.33 }, 'down') },
    items: { variants: fadeIn() },
  },
  // Soft Skills
  softSkills: {
    container: { variants: staggerContainer(0.25) },
    item: { variants: staggerContainer(0.25) },
    check: { variants: zoomIn() },
    line: { variants: fadeIn({}, 'left') },
  },
  // Strengths
  strengths: {
    container: { variants: staggerContainer(0.1, 1) },
    item: { variants: zoomIn() },
  },
  // Resume
  resume: {
    container: { variants: staggerContainer(0.5, 2) },
    text: { variants: fadeIn({ type: 'tween', duration: 0.5, ease: 'linear' }, 'up', '100') },
    icon: { variants: zoomIn() },
  },
  // Socials
  socials: {
    container: { variants: staggerContainer(0.1, 7.5) },
    item: { variants: zoomIn() },
  },
};

// Navbar
export const navbarMotion = {
  navbar: (navbarOpen) => ({
    initial: 'hidden',
    animate: navbarOpen ? 'visible' : 'hidden',
    transition: { type: 'tween', duration: navbarOpen ? 0.55 : 0.75, ease: 'easeInOut' },
    variants: {
      hidden: { x: 0, staggerChildren: 0, when: 'afterChildren' },
      visible: { x: -225, staggerChildren: 0 },
    },
  }),
  button: {
    path1: {
      variants: {
        hidden: { d: 'M 2 2.5 L 20 2.5' },
        visible: { d: 'M 3 16.5 L 17 2.5' },
      },
    },
    path2: {
      variants: {
        hidden: { opacity: 1 },
        visible: { opacity: 0 },
      },
      transition: { duration: 0.1 },
    },
    path3: {
      variants: {
        hidden: { d: 'M 2 16.346 L 20 16.346' },
        visible: { d: 'M 3 2.5 L 17 16.346' },
      },
    },
  },
  list: {
    variants: {
      hidden: { transition: { staggerChildren: 0.05 } },
      visible: { transition: { staggerChildren: 0.05 } },
    },
  },
  item: {
    transition: { type: 'tween', duration: 0.55, ease: 'easeInOut' },
    variants: {
      hidden: { opacity: 1, x: 60 },
      visible: { opacity: 1, x: 0 },
    },
  },
  themeContainer: { variants: staggerContainerMirror(0.5) },
  theme: { variants: {} },
  accentContainer: { variants: staggerContainerMirror(0.05) },
  accent: { variants: slideIn({}, 'right', '60px') },
};

// Footer
export const footerMotion = {};
/***********************  4. Layout End  ***********************/
/*


*/
/**********************  5. Pages Start  **********************/
/***********************  5. Pages End  ***********************/
/*


*/
/**********************  6. Sections Start  **********************/
/*************  Home Page Start  *************/
// HERO
export const heroMotion = {
  container: (stagger, delay) => ({ ...motionStates(), variants: staggerContainer(stagger, delay) }),
  heading: { variants: staggerContainer(0.5) },
  typed: { variants: fadeIn({}, 'down') },
  button: { variants: zoomIn({ type: 'tween', duration: 0.5 }) },
};

// COUNTERS
export const countersMotion = {
  container: (stagger, delay) => ({ variants: staggerContainer(stagger, delay) }),
  frame: { variants: staggerContainer(0.05) },
  contents: { variants: zoomIn() },
};

// SERVICES
export const servicesMotion = {
  container: (stagger, delay) => ({ variants: staggerContainer(stagger, delay) }),
  card: { variants: zoomIn({ staggerChildren: 0.25 }) },
  item: { variants: fadeIn() },
};

// PROJECTS
export const projectsMotion = {
  container: (stagger, delay) => ({ variants: staggerContainer(stagger, delay) }),
  filters: { variants: staggerContainer(0.15) },
  filter: { variants: zoomIn({ type: 'tween', duration: 0.1, ease: 'easeIn' }) },
  grid: { variants: staggerContainerMirror(0.1) },
  button: { variants: zoomIn({ type: 'tween', delay: 5, duration: 1, ease: 'easeIn' }) },
  card: { variants: zoomIn({ type: 'tween', duration: 0.01, ease: 'linear', staggerChildren: 0.1 }) },
  swiper: { variants: fadeIn() },
  navigation: { variants: fadeIn({ delay: 6.25 }) },
};

// HISTORY
export const historyMotion = {
  container: (stagger, delay) => ({ variants: staggerContainer(stagger, delay) }),
  column: (i) => ({ variants: slideIn({ staggerChildren: 0.5 }, i ? 'right' : 'left') }),
  cards: { variants: staggerContainer(0.1) },
  card: { variants: zoomIn() },
};

// TECHNOLOGIES
export const technologiesMotion = {
  container: (stagger, delay) => ({ variants: staggerContainer(stagger, delay) }),
  grid: { variants: staggerContainerMirror(0.1) },
  button: { variants: zoomIn() },
  card: { variants: zoomIn() },
  swiper: { variants: fadeIn() },
  navigation: { variants: fadeIn() },
};

// CONTACT
export const contactMotion = {
  container: (stagger, delay) => ({ variants: staggerContainer(stagger, delay) }),
};
/**************  Home Page End  **************/
/***********************  6. Sections End  ***********************/
/*


*/
/**********************  7. Components Start  **********************/
// PRELOADER
export const preloaderMotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.2, duration: 0.6 } },
  exit: { opacity: 0, transition: { delay: 2.2, duration: 0.4 } },
};

// CARD
export const cardMotion = {
  container: (index) => ({
    initial: 'hidden',
    animate: 'visible',
    exit: 'hidden',
    variants: {
      hidden: { opacity: 0, scale: 0, transition: { staggerChildren: 0.25 } },
      visible: { opacity: 1, scale: 1, transition: { type: 'tween', delay: 4.5 + 0.25 * index, duration: 0.25, ease: 'easeIn' } },
    },
    transition: { type: 'tween', delay: 0.1 * index, duration: 0.25, ease: 'easeInOut' },
  }),
};

// BUTTONS
export const buttonMotion = {
  gradient: {
    whileHover: { backgroundPosition: '100% 100%', scale: 1.15, transition: { ease: 'easeOut', duration: 0.1 } },
    variants: fadeIn({ type: 'tween', ease: 'easeIn', duration: 2 }),
  },
};
/***********************  7. Components End  ***********************/
/*


*/
/**********************  8. Utils Start  **********************/
export function motionStates() {
  return {
    initial: 'hidden',
    animate: 'visible',
    exit: 'hidden',
    hover: 'hover',
  };
}

export const textType = {
  text: (speed) => ({ variants: staggerContainer(speed || 0.05) }),
  char: { variants: textVariant() },
};

export function textVariant(transitionOptions = {}) {
  return {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', ...transitionOptions } },
  };
}

export function zoomIn(transitionOptions = {}) {
  return {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring', ...transitionOptions } },
  };
}

export function fadeIn(transitionOptions = {}, direction, amount) {
  const num = amount || 100;
  return {
    hidden: {
      x: direction === 'left' ? -num : direction === 'right' ? num : 0,
      y: direction === 'up' ? num : direction === 'down' ? -num : 0,
      opacity: 0,
    },
    visible: { x: 0, y: 0, opacity: 1, transition: { type: 'spring', ...transitionOptions } },
  };
}

export function slideIn(transitionOptions = {}, direction, amount) {
  const num = amount || '100%';
  return {
    hidden: {
      x: direction === 'left' ? `-${num}` : direction === 'right' ? `${num}` : 0,
      y: direction === 'up' ? `${num}` : direction === 'down' ? `-${num}` : 0,
    },
    visible: { x: 0, y: 0, transition: { type: 'spring', ...transitionOptions } },
  };
}

export function staggerContainer(staggerChildren = 0.25, delayChildren = 0, transitionOptions = {}) {
  return {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren, delayChildren, ...transitionOptions } },
  };
}

export function staggerContainerMirror(staggerChildren = 0.25, delayChildren = 0, transitionOptions = {}, hidden = {}, visible = {}) {
  return {
    hidden: { opacity: 0, transition: { staggerChildren, delayChildren, ...transitionOptions, ...hidden } },
    visible: { opacity: 1, transition: { staggerChildren, delayChildren, ...transitionOptions, ...visible } },
  };
}
/***********************  8. Utils End  ***********************/
