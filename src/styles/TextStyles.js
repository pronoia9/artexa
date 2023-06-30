import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { rem } from '../utils';

export const GradientHeading = styled(motion.div)`
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

export const Tooltip = styled(motion.div)`
  position: relative;

  &:after {
    content: "A weaver of the web's foundational tapestry, crafting structured elegance that dances across the digital realm, guiding users on a visual journey of enchantment.";
    position: absolute;
    padding: ${rem(5)} ${rem(10)};
    display: block;
    color: var(--c-font-1);
    font-size: ${rem(10)};
    font-weight: 200;
    text-align: left;
    background: var(--c-bg);
    box-shadow: 0 ${rem(1)} ${rem(4)} 0 var(--c-box-shadow);
    opacity: 0;
    pointer-events: none;
    transform: translateX(${rem(20)});
    transition: 0.4s ease-in-out;
  }

  &:before {
    content: '';
    position: absolute;
    background: var(--c-bg);
    pointer-events: none;
    opacity: 0;
    z-index: 99;
    transform: translateX(${rem(20)}) rotate(45deg);
    transition: 0.4s ease-in-out;
    animation: none !important;
  }

  &:hover {
    transform: scale(1);

    &:after {
      opacity: 1;
      transform: translateX(0);
    }

    &:before {
      opacity: 1;
      transform: translateX(0) rotate(45deg);
    }
  }
`;

export const Tag = styled(motion.p)`
  display: inline-block;
  margin: 0 5px 5px 0;
  padding: 3px 12px;
  color: var(--c-font-1);
  font-family: var(--f-tertiary);
  font-size: 10px;
  background: var(--c-bg);
  border-radius: 15px;
  box-shadow: inset 0 3px 8px 0 var(--c-box-shadow);
`;