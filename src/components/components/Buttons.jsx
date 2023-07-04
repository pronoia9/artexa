import { Link } from 'react-router-dom';

import { GradientButton } from '../../styles';
import { buttonMotion, openFancybox } from '../../utils';

export const Button = (props) => {
  const { link, title, arrow = true, children } = props;
  return !link ? (
    <span className='art-link art-color-link art-w-chevron acc' {...props}>
      {title}
      {children}
      {arrow && <i className='fas fa-chevron-right' aria-hidden='true' />}
    </span>
  ) : (
    <ButtonLink {...props} />
  );
};

export const ButtonLink = ({ link, title, arrow = true, children, ...props }) => {
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
      {arrow && <i className='fas fa-chevron-right' aria-hidden='true' />}
    </Link>
  );
};

export const ButtonGradient = ({ children, ...props }) => {
  return (
    <GradientButton className='art-buttons-frame' {...props} {...buttonMotion.gradient}>
      {children}
    </GradientButton>
  );
};
