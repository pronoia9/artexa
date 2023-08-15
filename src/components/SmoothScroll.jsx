'use client';

import { useRef, useEffect } from 'react';
import SmoothScrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const SmoothScroll = ({ options, children, ...props }) => {
  const content = useRef(null);

  useEffect(() => {
    SmoothScrollbar.use(OverscrollPlugin);
    SmoothScrollbar.init(content.current, {
      // renderByPixels: false,
      damping: 0.5,
      // delegateTo: document,
      ...options,
    });

    return () => {
      if (SmoothScrollbar) SmoothScrollbar.destroy();
    };
  }, []);

  return (
    <Container data-scrollbar ref={content} className='art-scroll-frame' {...props}>
      <div>{children}</div>
    </Container>
  );
};

const Container = styled(motion.div)`
  width: 100%;
  height: calc(100vh - 30px);
`;
