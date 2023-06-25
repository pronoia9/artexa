import { styled } from 'styled-components';

export const GradientHeading = styled.h1`
  padding: 1px 0;
  display: inline-block;
  color: transparent;
  background-image: var(--c-gradient-9);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -ms-background-clip: text;
  -o-background-clip: text;
  background-clip: text;
  transition: transform 0.5s;

  &:hover {
    /* text-shadow: 0.1px 0.1px 10px var(--c-accent-2); */
    transform: scale(1.01);
    transition: transform 0.5s;
  }

  @media (max-width: 1600px) {
    font-size: 42px;
  }

  @media (max-width: 1400px) {
    font-size: 36px;
  }

  @media (max-width: 700px) {
    font-size: 46px;
  }
`;
