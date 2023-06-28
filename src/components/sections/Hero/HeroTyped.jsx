import { useEffect, useLayoutEffect, useRef } from 'react';
import Typed from 'typed.js';
import { styled } from 'styled-components';

import { dataStore } from '../../../store/dataStore';

export const HeroTyped = () => {
  const data = dataStore((state) => state.hero.typed);
  const typedRef = useRef();

  useLayoutEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [...data],
      typeSpeed: 100,
      backSpeed: 25,
      smartBackspace: true,
      startDelay: 2000,
      backDelay: 1000,
      loop: true,
      loopCount: Infinity,
    });
    return () => { typed.destroy(); };
  }, []);

  return (
    <Container className='art-lg-text art-code mb-25'>
      <code>
        &lt;<i>code</i>&gt; <span ref={typedRef} /> &lt;/<i>code</i>&gt;
      </code>
    </Container>
  );
};

const Container = styled.div`
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

  @media (max-width: 920px) {
    min-height: 70px;
    margin-bottom: 0;
  }
`;
