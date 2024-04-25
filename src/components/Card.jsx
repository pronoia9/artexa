'use client';

import Link from 'next/link';
import { css, styled } from 'styled-components';
import { motion } from 'framer-motion';

import { Button, HoverExpand, Tags } from '@/components';
import { rem } from '@/utils';

export const Card = ({ index, swiper, hide, section, id, title, subtitle, description, link, links, image, images, year, date, categories, tags, classes, ...props }) => {
  return (
    <Container
      key={`${section}-card-${index}-${title}`}
      className={`art-a art-blog-card${classes ? ` ${classes}` : ''} acc`}
      $swiper={swiper}
      $hide={hide}
      {...props}
    >
      <ImageLink className='art-port-cover' data-fancybox={`fancybox${section}`} href={image}>
        <img
          src={image || (section === 'projects' && `/images/projects/${id}.jpg`) || `/images/projects/${id}.jpeg` || `/images/projects/${id}.png`}
          alt='item'
        />
        <HoverExpand />
      </ImageLink>

      <Overlay className='art-post-description' $hide={hide}>
        {/* <a href='#.'> */}
        <Title className='mb-15'>{title}</Title>
        {/* </a> */}
        {subtitle && <div className='mb-15'>{subtitle}</div>}

        {!swiper && categories?.length && <Tags section={title} data={categories} className='mb-15' />}

        {section === 'projects' ? (
          <Link href={section} as={`/${section}/${id}`}>
            <Button title='Learn More' />
          </Link>
        ) : (
          <Button link={link} title='Learn More' />
        )}
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
  overflow: hidden;

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

const TagsContainer = styled(motion.div)`
  height: calc(58px); /* 2 lines */
  overflow: hidden;

  p {
    background: var(--c-bg-menu-2);
  }
`;
