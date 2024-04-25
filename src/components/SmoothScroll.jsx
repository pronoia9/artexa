'use client';

import { useRef, useEffect } from 'react';
import SmoothScrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import { styled } from 'styled-components';
// import { motion } from 'framer-motion';

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

    return () => { if (SmoothScrollbar) SmoothScrollbar.destroy(); };
  }, []);

  return (
    <Container data-scrollbar ref={content}>
      <Wrapper className='art-scroll-frame' {...props}>
        {children}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 25px);

  .scrollbar-track {
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
  }
`;

const Wrapper = styled.div.withConfig({ shouldForwardProp: (prop) => !['variants'].includes(prop) })`
  width: 100%;
  /* height: calc(100vh - 60px); */
  height: 100%;
  height: calc(100% - 30px);
  /* min-height: calc(100% - 30px); */
  min-height: calc(100vh - 30px);
  display: flex;
  flex-direction: column;
  justify-content: ${({ $justify }) => $justify || 'start'};

  @media (max-width: 920px) {
    /* height: 100vh; */
    /* min-height: calc(100% - 70px); */
    min-height: calc(100vh - 70px);
  }
`;
