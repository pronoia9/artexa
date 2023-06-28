import { styled } from 'styled-components';

import { rem } from '../utils';

export const GradientHeading = styled.div`
  transition: transform 0.5s ease-in-out;
  padding: 1rem 0;

  * {
    color: transparent;
    background-image: var(--c-gradient-accent-1);
    background-size: 20%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -ms-background-clip: text;
    background-clip: text;
    line-height: 3rem;
  }
`;
