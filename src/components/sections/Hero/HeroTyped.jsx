import { styled } from 'styled-components';

import { dataStore } from '../../../store/dataStore';

export const HeroTyped = () => {
  const data = dataStore((state) => state.hero.typed);

  return (
    <Container className='art-lg-text art-code mb-25'>
      &lt;<i>code</i>&gt;{' '}
      {/* <Typed
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
        />{' '} */}
      &lt;/<i>code</i>&gt;
    </Container>
  );
};

const Container = styled.div`
  font-family: var(--f-code);
  color: var(--c-accent-4);
  text-shadow: 1px 1px 5px var(--c-accent-4);

  i {
    font-style: normal;
    color: var(--c-accent-3);
    text-shadow: none;
  }

  span {
    color: var(--c-font-2);
    text-shadow: none;

    &:hover {
      font-style: italic;
      /* color: var(--c-accent-4); */
    }
  }

  @media (max-width: 920px) {
    min-height: 70px;
    margin-bottom: 0;
  }
`;
