import { useLayoutEffect, useRef } from 'react';
import Typed from 'typed.js';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { dataStore } from '../../../store/dataStore';
import { heroMotion, rem } from '../../../utils';

export const HeroTyped = () => {
  const data = dataStore((state) => state.hero.typed);
  const typedRef = useRef();

  useLayoutEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [...data],
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
    <Container className='art-lg-text art-code' {...heroMotion.typed}>
      <code>
        &lt;<i>code</i>&gt; <span ref={typedRef} /> &lt;/<i>code</i>&gt;
      </code>
    </Container>
  );
};

const Container = styled(motion.div)`
  max-width: 75%;
  min-height: ${rem(82)}; /* 3 lines */
  /* margin-bottom: ${rem(25)}; */
  margin: 0;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */

  code {
    font-family: var(--f-code);
    color: #e5c07b;
    text-shadow: 1px 1px 5px var(--c-accent-4);
    filter: ${({ theme }) => theme.typedFilter && 'saturate(50) brightness(100)'};

    i {
      color: #ef596e;
      font-style: normal;
      text-shadow: none;
    }

    span {
      color: var(--c-font-2);
      text-shadow: none;
    }
  }

  @media (max-width: 1150px) { min-height: ${rem(109)}; /* 4 lines */ }
  @media (max-width: 1110px) { min-height: ${rem(136)}; /* 5 lines */ }

  @media (max-width: 921px) {
    margin-bottom: 0;
    min-height: ${rem(82)}; /* 3 lines */
  }

  @media (max-width: 700px) {
    max-width: 100%;
  }

  @media (max-width: 519px) { min-height: ${rem(109)}; /* 4 lines */ }
  @media (max-width: 408px) { min-height: ${rem(136)}; /* 5 lines */ }
  @media (max-width: 352px) { min-height: ${rem(164)}; /* 6 lines */ }
  @media (max-width: 328px) { min-height: ${rem(191)}; /* 7 lines */ }
`;
