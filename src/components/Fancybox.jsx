'use client';

import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { useRef, useEffect } from 'react';
import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { SVGs } from '@/components';
import { rem } from '@/utils';

export const Fancybox = (props) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || '[data-fancybox]';
    const options = props.options || {};

    NativeFancybox.bind(container, delegate, options);

    // ! Doesnt work at all if the return/cleanup is active
    // return () => {
    //   NativeFancybox.unbind(container);
    //   NativeFancybox.close();
    // };
  });

  return (
    <motion.div ref={containerRef} {...props}>
      {props.children}
    </motion.div>
  );
};

export const HoverExpand = () => {
  return (
    <Container className='art-item-hover'>
      <SVGs type='expand' height={9} />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  width: 27px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* color: var(--c-font-2); */
  /* font-size: ${rem(11)}; */
  /* font-weight: 700; */
  /* line-height: ${rem(30)}; */
  /* text-align: center; */
  background: var(--c-gradient-2);
  border-radius: 50%;
  box-shadow: 0 1px 4px 0 var(--c-box-shadow);
  opacity: 0;
  z-index: 10;

  &, svg {
    transition: 0.4s ease-in-out;
  }
  
  svg {
    fill: var(--c-font-2);
  }

  /* &.center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  } */

  &:hover {
    opacity: 1 !important;
    transform: scale(1.07);

    svg {
      transform: scale(1.2);
    }
  }
`;
