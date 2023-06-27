export const sceneMotion = () => ({
  initial: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5, delay: 5, ease: 'easeInOut' },
});

export const appContainerMotion = () => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, delay: 0.1, ease: 'easeInOut' },
});

export const pageWrapperMotion = {
  initial: 'hidden',
  animate: 'visible',
  varians: {
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
