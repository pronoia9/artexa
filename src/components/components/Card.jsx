import { Link } from 'react-router-dom';
import { css, styled } from 'styled-components';
import { motion } from 'framer-motion';

import { rem } from '../../utils';

export const Card = (props) => {
  const { index, swiper, motion, hide, id, title, subtitle, description, link, links, image, images, year, date, categories, tags, classes } = props;

  return (
    <Container className={`art-a art-blog-card${classes ? ` ${classes}` : ''} acc`} $swiper={swiper} $hide={hide} key={`card-${index}-${title}`} {...motion}>
      <ImageLink className='art-port-cover' href={image}>
        <img src={image} alt='item' />
        <HoverIcon className='art-item-hover'>
          <i className='fas fa-expand' />
        </HoverIcon>
      </ImageLink>

      <Overlay className='art-post-description' $hide={hide}>
        {/* <a href='#.'> */}
        <Title className='mb-15'>{title}</Title>
        {/* </a> */}
        {subtitle && <div className='mb-15'>{subtitle}</div>}

        {props.children}

        <ProjectLink to={link} className='art-link art-color-link art-w-chevron'>
          Learn More
          <i className='fas fa-chevron-right' />
        </ProjectLink>
      </Overlay>
    </Container>
  );
};

const Container = styled(motion.div)`
  position: relative;
  overflow: hidden;
  margin-bottom: ${({ $swiper }) => !$swiper && rem(30)};

  ${({ $swiper }) =>
    $swiper &&
    css`
      background: var(--c-bg-card-overlay);
      box-shadow: 0 3px 8px 0 var(--c-box-shadow);
    `}

  &.art-fluid-card {
    height: calc(100% - 30px);
  }

  &:hover {
    .art-post-description {
      transform: translateY(0);
    }
  }
`;

const ImageLink = styled.a`
  position: relative;
  padding-bottom: 60%;
  display: block;
  background: var(--c-bg);

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

    .art-item-hover {
      opacity: 0.5;
    }
  }
`;

const HoverIcon = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  width: 27px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--c-font-2);
  font-size: ${rem(11)};
  font-weight: 700;
  line-height: ${rem(30)};
  text-align: center;
  background: var(--c-gradient-3);
  border-radius: 50%;
  box-shadow: 0 1px 4px 0 var(--c-box-shadow);
  opacity: 0;
  transition: 0.4s ease-in-out;

  &:hover {
    opacity: 1;
    transform: scale(1.07);
  }
`;

const Overlay = styled.div`
  position: relative;
  bottom: 0;
  padding: 30px;
  color: var(--c-font-2);
  background: var(--c-bg-card-overlay);

  ${({ $hide }) =>
    $hide &&
    css`
      position: absolute;
      bottom: 0;
      left: 15px;
      width: calc(100% - 29px);
      padding: 30px;
      box-shadow: 0 3px 8px 0 var(--c-box-shadow);
      z-index: 9;
      transform: translateY(100%);
      transition: 0.55s ease-in-out;
    `}
`;

const Title = styled.h5`
  font-family: var(--f-primary);
  font-size: 14px;
  font-weight: 600;
  word-wrap: break-word;
  letter-spacing: 0.1ch;
`;

const ProjectLink = styled(Link)``;
