import { Link } from "react-router-dom";

export const Card = ({ classes = '', title = 'Title', subtitle, link = '/', image = '/src/assets/hero/bg-blue.jpg', ...props }) => {
  return (
    <div class={`art-a art-blog-card${classes ? ` ${classes}` : ''}`}>
      <a data-fancybox='projects' href='/src/assets/hero/bg-blue.jpg' className={'art-a art-portfolio-item-frame art-square'}>
        <img src={image} alt='item' />
        <span className='art-item-hover'>
          <i className='fas fa-expand' />
        </span>
      </a>
      <div class='art-post-description'>
        {/* <a href='#.'> */}<h5 class='mb-15'>{title}</h5>{/* </a> */}
        {subtitle && <div class='mb-15'>{subtitle}</div>}

        {props.children}

        <Link to={link} className='art-link art-color-link art-w-chevron'>
          Read More
        </Link>
      </div>
    </div>
  );
};
