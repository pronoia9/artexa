import { Link } from "react-router-dom";

import { GradientButton } from "../../styles";

export const Button = ({ link, title, children, ...props }) => {
  return (
    <Link to={link} className='art-link art-color-link art-w-chevron' {...props}>
      {title}
      {children}
      <i className='fas fa-chevron-right' aria-hidden='true' />
    </Link>
  );
};

export const ButtonGradient = ({ link, title, children, ...props }) => {
  return <GradientButton {...props}>{children}</GradientButton>;
};


// <>
//   {/* // Card */}
//   <Link to={link || `/${section}/${id}`} className='art-link art-color-link art-w-chevron'>
//     Learn More
//     <i className='fas fa-chevron-right' />
//   </Link>
// 
//   {/* // Timeline Item */}
//   <a
//     href={link || image || ''}
//     {...(image ? { 'data-fancybox': 'history' } : { target: '_blank', rel: 'noreferrer' })}
//   >
//     {link ? 'Link' : image ? 'Certificate' : 'Suprise!'}
//     <i className='fas fa-chevron-right' aria-hidden='true' />
//   </a>
// 
//   {/* // Services Card */}
//   <div className='art-buttons-frame'>
//     <Link className='art-link art-color-link art-w-chevron' to='/contact'>
//       Order now
//     </Link>
//   </div>
// </>