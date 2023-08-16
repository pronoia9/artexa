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

export const HoverExpand = ({ center }) => {
  return (
    <Container className='art-item-hover' $center={center}>
      <SVGs type='expand' height={9} />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: ${({ $center }) => ($center ? 'calc(50% - 15px)' : rem(30))};
  left: ${({ $center }) => ($center ? 'calc(50% - 15px)' : rem(30))};
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

  &:hover {
    opacity: 1 !important;
    transform: scale(1.07);

    svg {
      transform: scale(1.2);
    }
  }
`;
