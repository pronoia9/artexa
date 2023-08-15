'use client';

import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { useRef, useEffect } from 'react';
import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import { motion } from 'framer-motion';

import { SVGs } from '@/components';

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
  return <>
    <SVGs type='expand' />
  </>
}