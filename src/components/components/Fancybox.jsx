import { useRef, useEffect } from 'react';
import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { rem } from '../../utils';

export const Fancybox = ({ styles, ...props }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || '[data-fancybox]';
    const options = props.options || {};

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  });

  return (
    <motion.div ref={containerRef} {...props}>
      {props.children}
      <i className='fas fa-expand' />
    </motion.div>
  );
};
