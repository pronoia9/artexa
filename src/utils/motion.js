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
    variants: staggerContainer(2.5),
  },

  scrollContent: { variants: staggerContainer(0.5) },

  // Divider
  divider: (delay = 0) => ({ variants: slideIn({ type: 'tween', ease: 'linear', duration: 0.5, delay }, 'right', '100') }),

  sidebarSection: (staggerChildren = 0.25, delay = 0) => ({
    variants: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren, delay } },
    },
  }),

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
    subtitle: { variants: zoomIn() }
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
    frame: {
      variants: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { type: 'spring', staggerChildren: 0.25 } },
      },
    },
    check: {
      variants: {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring' } },
      },
    },
    item: {
      variants: {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { type: 'spring' } },
      },
    },
  },

  // Strengths
  strengths: {
    variants: {
      hidden: { opacity: 0, scale: 0 },
      visible: { opacity: 1, scale: 1, transition: { type: 'spring' } },
    },
  },

  // Resume
  resume: {
    frame: {},
    text: {
      variants: {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { type: 'tween', duration: 0.5, ease: 'linear' } },
      },
    },
    icon: {
      variants: {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring' } },
      },
    },
  },

  // Socials
  socials: (index = 1) => ({
    initial: 'hidden',
    animate: 'visible',
    variants: {
      hidden: { opacity: 0, scale: 0 },
      visible: { opacity: 1, scale: 1, transition: { type: 'spring', delay: 0.1 * index + (6.25 + 2.5) } },
    },
  }),
};

// Navbar
export const navbarMotion = {};

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

export function textVariant(transitionOptions = {}) {
  return {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', ...transitionOptions } },
  };
}

export function fadeIn(transitionOptions = {}, direction, amount) {
  const num = amount || 100;
  return {
    hidden: {
      x: direction === 'left' ? num : direction === 'right' ? -num : 0,
      y: direction === 'up' ? num : direction === 'down' ? -num : 0,
      opacity: 0,
    },
    visible: { x: 0, y: 0, opacity: 1, transition: { type: 'spring', ...transitionOptions } },
  };
}

export function zoomIn(transitionOptions = {}) {
  return {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring', ...transitionOptions } },
  };
}

export function slideIn(transitionOptions = {}, direction, amount) {
  const num = amount || '100%';
  return {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? `-${num}` : direction === 'right' ? `${num}` : 0,
      y: direction === 'up' ? `${num}` : direction === 'down' ? `-${num}` : 0,
    },
    visible: { opacity: 1, x: 0, y: 0, transition: { type: 'spring', ...transitionOptions } },
  };
}

export function staggerContainer(staggerChildren = 0.5, delayChildren = 0, transitionOptions = {}) {
  return {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren, delayChildren, ...transitionOptions } },
  };
}
