/*
    1. App
    2. 3D
    3. HOC
    4. Pages
    5. Sections
*/

/**********************  1. App Start  **********************/
export const appContainerMotion = () => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, delay: 0.1, ease: 'easeInOut' },
});

export const preloaderMotion = ({
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.2, duration: 0.6 } },
  exit: { opacity: 0, transition: { delay: 2.2, duration: 0.4 } },
});
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
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  },
};

export const sectionWrapperMotion = (framerDelay = 1) => ({
  initial: 'hidden',
  animate: 'visible',
  variants: {
    visible: { opacity: 1, y: 0, transition: { delay: framerDelay || 1 * 0.1 } },
    hidden: { opacity: 0, y: 250 },
  },
});
/***********************  3. HOC End  ***********************/
/*

*/
/**********************  4. Pages Start  **********************/
/***********************  4. Pages End  ***********************/
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
export const counterMotion = (index) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8, delay: 2.3 + (index * 0.2), ease: 'linear' } }
});
/***********************  5. Sections End  ***********************/
