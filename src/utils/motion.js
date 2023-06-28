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
  sidebar: {
    initial: 'hidden',
    animate: 'visible',
    variants: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 1 } },
    },
  },
  sidebarSection: {
    variants: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
    },
  },
  // Languages
  languages: {
    frame: {
      variants: {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring', staggerChildren: 0.25 } },
      },
    },
    items: {
      variants: {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring' } },
      },
    },
  },
  // Hard Skills
  hardSkills: {
    container: {
      variants: {
        hidden: { opacity: 0, transition: { when: 'beforeChildren' } },
        visible: { opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.25 } },
      },
    },
    frame: {
      variants: {
        hidden: { opacity: 0, y: 200 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', staggerChildren: 0.25 } },
      },
    },
    items: {
      variants: {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring' } },
      },
    },
  },
};
// Navbar
export const navbarMotion = {};
// Footer
export const footerMotion = {};
/***********************  4. Layouy End  ***********************/
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
  frame: {
    variants: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { type: 'spring', when: 'beforeChildren', staggerChildren: 0.1 } },
    },
  },
  contents: {
    variants: {
      hidden: { opacity: 0, scale: 0 },
      visible: { opacity: 1, scale: 1 },
    },
  },
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
