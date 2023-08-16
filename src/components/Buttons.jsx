// import Link from 'next/link';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { SVGs } from '@/components';
import { GradientButton } from '@/styles';
import { buttonMotion, openFancybox } from '@/utils';

export const Button = (props) => {
  const { link, title, children } = props;
  return !link ? (
    <ButtonContainer className='art-link art-color-link acc' {...props}>
      {title}
      {children}
    </ButtonContainer>
  ) : (
    <ButtonLink {...props} />
  );
};

const ButtonContainer = styled.span`
  position: relative;
`;

export const ButtonLink = ({ link, title, arrow = true, icon, children, ...props }) => {
  const handleClick = (e) => {
    if (props['data-fancybox']) {
      e.preventDefault();
      openFancybox(link);
    }
  };
  return (
    <motion.a href={link} className='art-link art-color-link art-w-chevron acc' onClick={handleClick} {...props}>
      {title}
      {children}
      {(icon || arrow) && <SVGs type={icon || 'right'} height={!icon ? 9 : 16} />}
    </motion.a>
  );
};

export const ButtonGradient = ({ position, children, inline, ...props }) => {
  return (
    <GradientButtonContaienr className='art-buttons-frame' {...buttonMotion.gradient} {...props}>
      <Button link={props.link} title={props.title} arrow={props.arrow} children={!inline ? children : <></>} />
      {inline && children}
    </GradientButtonContaienr>
  );
};

const GradientButtonContaienr = styled(GradientButton)`
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
