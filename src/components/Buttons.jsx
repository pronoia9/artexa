'use client';

// import Link from 'next/link';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { SVGs } from '@/components';
import { GradientButton } from '@/styles';
import { buttonMotion, openFancybox } from '@/utils';

export const Button = ({ link, title, arrow = true, icon, children, ...props }) => {
  const Element = link ? motion.a : motion.span;

  const handleClick = (e) => {
    if (link && props['data-fancybox']) {
      e.preventDefault();
      openFancybox(link);
    }
  };

  return (
    <Element
      className={`art-link art-color-link acc ${arrow || icon ? 'art-w-chevron' : ''}`}
      style={!link ? { position: 'relative' } : null}
      onClick={handleClick}
      {...(!link ? props : { ...props, href: link, target: '_blank', rel: 'noopener noreferrer' })} // Merge props conditionally
    >
      {title}
      {children}
      {(icon || arrow) && <SVGs type={icon || 'right'} height={!icon ? 9 : 16} />}
    </Element>
  );
};

export const ButtonGradient = ({ position, link, title, arrow = true, icon, inline, children, ...props }) => {
  return (
    <GradientButtonContainer className='art-buttons-frame' {...buttonMotion.gradient} {...props}>
      <Button link={link} title={title} arrow={arrow} icon={icon} children={!inline ? children : <></>} />
      {inline && children}
    </GradientButtonContainer>
  );
};

const GradientButtonContainer = styled(GradientButton)`
  position: relative;
  /* display: block; */
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin: ${({ $position }) => ($position === 'center' ? '0 auto' : $position === 'right' && 'auto')};
  margin-right: ${({ $position }) => $position === 'right' && '0'};

  svg {
    fill: black;
  }
`;
