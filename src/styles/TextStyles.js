import { styled } from 'styled-components';

import { rem } from '../utils';

export const GradientHeading = styled.div`
  transition: transform 0.5s ease-in-out;
  padding: 1rem 0;

  h1 {
    color: transparent;
    background-image: var(--c-gradient-9);
    background-size: 20%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -ms-background-clip: text;
    background-clip: text;
    line-height: 3rem;
  }

  &:hover {
    text-shadow: ${rem(0.1)} ${rem(0.1)} ${rem(2)} var(--c-accent-2);
    transform: scale(1.01);
  }

  @media (max-width: ${rem(1600)}) {
    font-size: ${rem(62)};
  }

  @media (max-width: ${rem(1400)}) {
    font-size: ${rem(56)};
  }

  @media (max-width: ${rem(700)}) {
    font-size: ${rem(46)};
  }
`;
