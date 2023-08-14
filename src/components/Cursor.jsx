

import { styled } from 'styled-components';
import AnimatedCursor from 'react-animated-cursor';
import { cursorOptions } from '@/utils';
import { Suspense } from 'react';


export const Cursor = () => {
  return (
    <Suspense fallback={null}>
      <AnimatedCursorContainer className='animated-cursor'>
        <AnimatedCursor {...cursorOptions} />
      </AnimatedCursorContainer>
    </Suspense>
  );
};

const AnimatedCursorContainer = styled.div`
  position: relative;
  z-index: 99999999999999999999;
`;