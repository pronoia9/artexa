import { Link } from 'react-router-dom';

import { GradientButton } from '@/styles';
import { buttonMotion, openFancybox } from '@/utils';
import { styled } from 'styled-components';

export const Button = (props) => {
  const { link, title, children } = props;
  return !link ? (
    <span className='art-link art-color-link acc' {...props}>
      {title}
      {children}
    </span>
  ) : (
    <ButtonLink {...props} />
  );
};

export const ButtonLink = ({ link, title, arrow = true, children, icon, ...props }) => {
  const handleClick = (e) => {
    if (props['data-fancybox']) {
      e.preventDefault();
      openFancybox(link);
    }
  };
  return (
    <Link to={link} className='art-link art-color-link art-w-chevron acc' {...props} onClick={handleClick}>
      {title}
      {children}
      {(arrow || icon) && <i className={icon || 'fas fa-chevron-right'} aria-hidden='true' />}
    </Link>
  );
};

export const ButtonGradient = ({ position, ...props }) => {
  return (
    <GradientButtonContaienr className='art-buttons-frame' {...buttonMotion.gradient} {...props}>
      <Button link={props.link} title={props.title} arrow={props.arrow} children={props.children} />
    </GradientButtonContaienr>
  );
};

const GradientButtonContaienr = styled(GradientButton)`
  display: block;
  margin: ${({ $position }) => ($position === 'center' ? '0 auto' : $position === 'right' && 'auto')};
  margin-right: ${({ $position }) => $position === 'right' && '0'};
`;
