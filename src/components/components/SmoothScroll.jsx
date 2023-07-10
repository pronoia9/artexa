import { useRef, useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import { motion } from 'framer-motion';

export const SmoothScroll = (props) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    Scrollbar.use(OverscrollPlugin);
    Scrollbar.init(scrollRef.current, { damping: 0.5 });
  });

  return (
    <motion.div
      ref={scrollRef}
      className='art-scroll-frame'
      damping={0.5}
      plugins={{ overscroll: { effect: 'bounce' } }}
      {...props}
    >
      {props.children}
    </motion.div>
  );
};
