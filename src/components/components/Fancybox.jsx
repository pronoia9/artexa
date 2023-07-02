import { useRef, useEffect } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import { styled } from "styled-components";
import { motion } from "framer-motion";

import { rem } from "../../utils";

export const Fancybox = (props) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || "[data-fancybox]";
    const options = props.options || {};

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  });

  return (
    <Container ref={containerRef} {...props}>
      {props.children}
      <i className='fas fa-expand' />
    </Container>
  );
}

const Container = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  outline: inherit;
  transition: 0.2s ease-in-out;
  z-index: 0;

  i {
    width: ${rem(30)};
    height: ${rem(30)};
    align-self: center;
    color: var(--c-font-2);
    font-size: ${rem(11)};
    font-weight: 700;
    line-height: ${rem(30)};
    text-align: center;
    background: var(--c-gradient-3);
    border-radius: 50%;
    opacity: 0;
    z-index: 1;
    transition: 0.4s ease-in-out;
  }

  &:hover {
    opacity: 1;
    transition: 0.2s ease-in-out;
    outline: inherit;

    i {
      opacity: 0.7;

      &:hover {
        opacity: 1;
        transform: scale(1.07);
      }
    }
  }
`;