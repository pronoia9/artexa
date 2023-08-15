import { styled } from 'styled-components';
import Link from 'next/link';

import { SVGs } from '@/components';
import { GradientButton } from '@/styles';
import { buttonMotion, openFancybox, rem } from '@/utils';

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

export const ButtonLink = ({ link, title, arrow = true, children, icon, ...props }) => {
  const handleClick = (e) => {
    if (props['data-fancybox']) {
      e.preventDefault();
      openFancybox(link);
    }
  };
  return (
    <Link href={link} className='art-link art-color-link art-w-chevron acc' {...props} onClick={handleClick}>
      {title}
      {children}
      {(icon || arrow) && <SVGs type={icon || 'right'} height={9} />}
    </Link>
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
