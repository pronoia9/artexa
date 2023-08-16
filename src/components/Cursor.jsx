'use client';

import { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
// import AnimatedCursor from 'react-animated-cursor';

// TODO: Fix hydration issue
export const Cursor = () => {
  const cursorRefs = useRef([]);

  // Event listener for animated cursor
  useEffect(() => {
    const handleMouseMove = (e) => { cursorRefs?.current?.forEach((c) => (c.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`)); };
    document.addEventListener('mousemove', handleMouseMove);
    return () => { document.removeEventListener('mousemove', handleMouseMove); };
  }, []);

  // const cursorOptions = {
  //   innerSize: 40,
  //   innerScale: 0.1,
  //   trailingSpeed: 1,
  //   outerSize: 40,
  //   outerScale: 2,
  //   outerAlpha: 0,
  //   hasBlendMode: true,
  //   innerStyle: { backgroundColor: 'var(--c-accent-5)' },
  //   outerStyle: { border: '3px solid var(--c-accent-5)' },
  //   clickables: [
  //     'a',
  //     'input[type="text"]',
  //     'input[type="email"]',
  //     'input[type="number"]',
  //     'input[type="submit"]',
  //     'input[type="image"]',
  //     'label[for]',
  //     'select',
  //     'textarea',
  //     'button',
  //     '.link',
  //     '.art-menu-bar-header',
  //     '.theme-button',
  //     '.art-strengths div',
  //     '.art-knowledge-list li',
  //     '.art-hard-skills-item',
  //     '.art-lang-skills-item',
  //     '.art-brand',
  //     '.hero-heading',
  //     '.art-available-lamp',
  //     '.art-avatar',
  //     '.acc',
  //   ],
  // };

  return (
    <AnimatedCursorContainer className='animated-cursor'>
      {/* <AnimatedCursor {...cursorOptions} /> */}
      <div ref={(ref) => (cursorRefs.current[0] = ref)} className='cursor' />
      <div ref={(ref) => (cursorRefs.current[1] = ref)} className='cursor cursor2' />
    </AnimatedCursorContainer>
  );
};

const AnimatedCursorContainer = styled.div`
  position: relative;
  z-index: 99999999999999999999;

  .cursor {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    --size: 40px;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    border: 1px solid var(--c-cursor);
    margin: calc(var(--size) * -0.5) 0 0 calc(var(--size) * -0.5);
    transition: transform 0.85s cubic-bezier(0, 0.02, 0, 1);
    display: none;
    pointer-events: none;

    @media (pointer: fine) {
      display: block;
    }
  }

  .cursor2 {
    --size: 3px;
    transition-duration: 0s;
  }
`;
