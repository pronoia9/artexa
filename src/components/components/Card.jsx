import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const Card = ({ classes = '', title = 'Title', subtitle, link = '/', image = '/src/assets/hero/bg-blue.jpg', ...props }) => {
  return (
    <Container className={`art-a art-blog-card${classes ? ` ${classes}` : ''} acl`}>
      <ImageLink className='art-port-cover' href={image}>
        <img src={image} alt='item' />
        <span className='art-item-hover'>
          <i className='fas fa-expand' />
        </span>
      </ImageLink>

      <Overlay className='art-post-description'>
        {/* <a href='#.'> */}
        <Title className='mb-15'>{title}</Title>
        {/* </a> */}
        {subtitle && <div className='mb-15'>{subtitle}</div>}

        {props.children}

        <ProjectLink to={link} className='art-link art-color-link art-w-chevron'>
          Read More
          <i className='fas fa-chevron-right' />
        </ProjectLink>
      </Overlay>
    </Container>
  );
};

const Container = styled(motion.div)`
  position: relative;
  overflow: hidden;
  box-shadow: 0 3px 8px 0 var(--c-box-shadow);
  margin-bottom: 30px;
`;

const ImageLink = styled.a`
  position: relative;
  padding-bottom: 60%;
  display: block;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    object-position: center;
    transition: 0.4s ease-in-out;
  }

  &:hover {
    img {
      transform: scale(1.07);
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  padding: 30px;
  position: relative;
  background: var(--c-bg-card-overlay);
`;

const Title = styled.h5`
  font-family: var(--f-primary);
  font-size: 14px;
  font-weight: 600;
  word-wrap: break-word;
  letter-spacing: 0.1ch;
`;

const ProjectLink = styled(Link)``;
