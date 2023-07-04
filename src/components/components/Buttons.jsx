import { Link } from 'react-router-dom';

import { GradientButton } from '../../styles';
import { openFancybox } from '../../utils';

export const ButtonLink = ({ link, title, children, ...props }) => {
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
      <i className='fas fa-chevron-right' aria-hidden='true' />
    </Link>
  );
};

export const ButtonGradient = ({ link, title, children, ...props }) => {
  return <GradientButton {...props}>{children}</GradientButton>;
};
