/*
    1. App
    2. 3D
    3. HOC
    4. Pages
    5. Sections
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
export const pageWrapperMotion = {
  initial: 'hidden',
  animate: 'visible',
  variants: {
    hidden: { opacity: 0, transition: { when: 'afterChildren' } },
    visible: { opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.1 } },
  },
};

export const sectionWrapperMotion = {
  variants: {
    hidden: { opacity: 0, y: 250, when: 'afterChildren' },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', when: 'beforeChildren', staggerChildren: 0.1 } },
  },
};
/***********************  3. HOC End  ***********************/
/*

*/
/**********************  4. Pages Start  **********************/
/***********************  4. Pages End  ***********************/
/*

*/
/**********************  4. Layout Start  **********************/
// Sidebar
export const sidebarMotion = {
  sidebar: { initial: 'hidden', animate: 'visible', variants: staggerContainer(2.5) },
  scrollContent: { variants: staggerContainer(0.5) },
  // Divider
  divider: (delay = 0) => ({ variants: fadeIn({ type: 'tween', ease: 'linear', duration: 0.5, delay }, 'right', '100') }),
  // Profile
  profile: {
    container: { variants: staggerContainer(0.25) },
    avatarContainer: { variants: staggerContainer(1) },
    avatarItem: { variants: zoomIn() },
    textContainer: { variants: staggerContainer(1) },
    nameContainer: { variants: staggerContainer(0.1) },
    postContainer: { variants: staggerContainer(1) },
    postLine: { variants: staggerContainer(0.05) },
    text: { variants: zoomIn() },
  },
  // Info
  info: {
    container: { variants: staggerContainer(0.25) },
    item: { variants: staggerContainer(0.5) },
    title: { variants: staggerContainer(0.05) },
    char: { variants: zoomIn() },
    subtitle: { variants: zoomIn() },
  },
  // Languages
  languages: {
    container: { variants: staggerContainer(0.25) },
    item: { variants: staggerContainer(0.25) },
    bar: { variants: zoomIn() },
    text: { variants: staggerContainer(0.05) },
    char: { variants: zoomIn() },
  },
  // Hard Skills
  hardSkills: {
    container: { variants: staggerContainer(0.1) },
    item: { variants: slideIn({ staggerChildren: 0.33 }, 'down') },
    items: { variants: fadeIn() },
  },
  // Soft Skills
  softSkills: {
    container: { variants: staggerContainer(0.5) },
    item: { variants: staggerContainer(0.25) },
    check: { variants: zoomIn() },
    text: { variants: staggerContainer(0.01) },
    char: { variants: textVariant() },
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
    container: { variants: staggerContainer(0.1, 3.5) },
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
/**********************  5. Sections Start  **********************/
// HERO
export const heroMotion = {
  button: {
    whileHover: { backgroundPosition: '100% 100%', scale: 1.05 },
  },
};

// COUNTERS
export const countersMotion = {
  frame: { variants: staggerContainer(0.1) },
  contents: { variants: zoomIn() },
};
/***********************  5. Sections End  ***********************/
/*

*/
/**********************  5. Components Start  **********************/
export const preloaderMotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.2, duration: 0.6 } },
  exit: { opacity: 0, transition: { delay: 2.2, duration: 0.4 } },
};
/***********************  5. Components End  ***********************/

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

export function staggerContainer(staggerChildren = 0.5, delayChildren = 0, transitionOptions = {}) {
  return {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren, delayChildren, ...transitionOptions } },
  };
}

export function staggerContainerMirror(staggerChildren = 0.5, delayChildren = 0, transitionOptions = {}) {
  return {
    hidden: { opacity: 0, transition: { staggerChildren, delayChildren, ...transitionOptions } },
    visible: { opacity: 1, transition: { staggerChildren, delayChildren, ...transitionOptions } },
  };
}
