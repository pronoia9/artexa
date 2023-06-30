import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Card = ({ classes = '', title = 'Title', subtitle, link = '/', image = '/src/assets/hero/bg-blue.jpg', ...props }) => {
  return (
    <Container className={`art-a art-blog-card${classes ? ` ${classes}` : ''} acl`}>
      <ImageLink data-fancybox='projects' href='/src/assets/hero/bg-blue.jpg' className={'art-a art-portfolio-item-frame art-square'}>
        <img src={image} alt='item' />
        <span className='art-item-hover'>
          <i className='fas fa-expand' />
        </span>
      </ImageLink>
      <Overlay className='art-post-description'>
        {/* <a href='#.'> */}<Title className='mb-15'>{title}</Title>{/* </a> */}
        {subtitle && <div className='mb-15'>{subtitle}</div>}

        {props.children}

        <ProjectLink to={link} className='art-link art-color-link art-w-chevron'>Read More</ProjectLink>
      </Overlay>
    </Container>
  );
};
const Container = styled.div``;

const ImageLink = styled.a``;

const Overlay = styled.div``;

const Title = styled.h5``;

const ProjectLink = styled(Link)``;
