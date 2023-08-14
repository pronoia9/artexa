import { styled } from 'styled-components';
import AnimatedCursor from 'react-animated-cursor';

// TODO: Fix hydration issue
export const Cursor = () => {
  const cursorOptions = {
    innerSize: 40,
    innerScale: 0.1,
    trailingSpeed: 1,
    outerSize: 40,
    outerScale: 2,
    outerAlpha: 0,
    hasBlendMode: true,
    innerStyle: { backgroundColor: 'var(--c-accent-5)' },
    outerStyle: { border: '3px solid var(--c-accent-5)' },
    clickables: [
      'a',
      'input[type="text"]',
      'input[type="email"]',
      'input[type="number"]',
      'input[type="submit"]',
      'input[type="image"]',
      'label[for]',
      'select',
      'textarea',
      'button',
      '.link',
      '.art-menu-bar-header',
      '.theme-button',
      '.art-strengths div',
      '.art-knowledge-list li',
      '.art-hard-skills-item',
      '.art-lang-skills-item',
      '.art-brand',
      '.hero-heading',
      '.art-available-lamp',
      '.art-avatar',
      '.acc',
    ],
  };

  return (
    <AnimatedCursorContainer className='animated-cursor'>
      <AnimatedCursor {...cursorOptions} />
    </AnimatedCursorContainer>
  );
};

const AnimatedCursorContainer = styled.div`
  position: relative;
  z-index: 99999999999999999999;
`;
