'use client';

import { useLayoutEffect, useRef } from 'react';
import Typed from 'typed.js';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { rem, hero as data } from '@/utils';

export const HeroTyped = (props) => {
  const typedRef = useRef();

  useLayoutEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [...data.typed],
      typeSpeed: 25,
      backSpeed: 10,
      smartBackspace: true,
      startDelay: 2500,
      backDelay: 1000,
      loop: true,
      loopCount: Infinity,
    });
    return () => { typed.destroy(); };
  }, []);

  return (
    <Container className='art-lg-text art-code' {...props}>
      <code>
        &lt;<i>code</i>&gt; <span ref={typedRef} /> &lt;/<i>code</i>&gt;
      </code>
    </Container>
  );
};

const Container = styled(motion.div)`
  max-width: 75%;
  min-height: calc(17px * 1.7 * 3); /* 3 lines */
  margin: 0;
  
  code {
    font-family: var(--f-code);
    color: #e5c07b;
    text-shadow: 1px 1px 5px var(--c-accent-4);
    
    i {
      filter: ${({ theme }) => theme.typedFilter && 'saturate(40) brightness(100)'};
      color: #ef596e;
      font-style: normal;
      text-shadow: none;
    }

    span {
      color: var(--c-font-2);
      text-shadow: none;
    }
  }

  @media (max-width: 1150px) { min-height: calc(17px * 1.7 * 4); /* 4 lines */ }
  @media (max-width: 1110px) { min-height: calc(17px * 1.7 * 5); /* 5 lines */ }
  @media (max-width: 921px)  { min-height: calc(17px * 1.7 * 3); /* 3 lines */ }
  @media (max-width: 700px)  { max-width: 100%; }
  @media (max-width: 519px)  { min-height: calc(17px * 1.7 * 4); /* 4 lines */ }
  @media (max-width: 408px)  { min-height: calc(17px * 1.7 * 5); /* 5 lines */ }
  @media (max-width: 352px)  { min-height: calc(17px * 1.7 * 6); /* 6 lines */ }
  @media (max-width: 328px)  { min-height: calc(17px * 1.7 * 7); /* 7 lines */ }
`;
