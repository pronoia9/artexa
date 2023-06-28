import { useRef } from 'react';
import { styled } from 'styled-components';

import { dataStore } from '../../../store/dataStore';

export const HeroTyped = () => {
  const data = dataStore((state) => state.hero.typed);
  const typedRef = useRef();

  return (
    <Container className='art-lg-text art-code mb-25'>
      <code>
        &lt;<i>code</i>&gt; <span ref={typedRef}>asfafag</span> &lt;/<i>code</i>&gt;
      </code>
    </Container>
  );
};
{
  /* <Typed
    loop
    typeSpeed={100}
    backSpeed={25}
    strings={props.typed}
    smartBackspace
    shuffle={false}
    backDelay={1}
    fadeOut={false}
    fadeOutDelay={100}
    loopCount={0}
    showCursor
    cursorChar='|'
  />{' '} */
}

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
