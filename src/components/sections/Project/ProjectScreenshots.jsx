'use client';

import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { HoverExpand, SectionWrapper } from '@/components';
import { projectMotion, rem } from '@/utils';

export const ProjectScreenshots = SectionWrapper(({ id, imagesCount }) => {
  if (!imagesCount) return;

  const array = new Array(imagesCount).fill('');

  return (
    <Grid className='col-12' {...projectMotion.screenshots.grid}>
      {array.map((_, index) => {
        const image = `/images/projects/${id}-${index + 1}.jpeg`;
        return (
          <motion.div key={`project-screenshots-${index}`} className='grid-item' {...projectMotion.screenshots.image}>
            <a data-fancybox='project' href={image} className='art-a art-portfolio-item-frame'>
              <img src={image} alt='item' />
              <HoverExpand />
            </a>
          </motion.div>
        );
      })}
    </Grid>
  );
});

const Grid = styled(motion.div)`
  flex: 0 0 100%;
  width: 100%;
  display: grid;
  grid-template-areas: 'one three' 'two three' 'four five' 'four six';
  gap: 1.5rem;

  & > div {
    height: 100%;
    &:nth-child(1) {
      grid-area: one;
    }
    &:nth-child(2) {
      grid-area: two;
    }
    &:nth-child(3) {
      grid-area: three;
    }
    &:nth-child(4) {
      grid-area: four;
    }
    &:nth-child(5) {
      grid-area: five;
    }
    &:nth-child(6) {
      grid-area: six;
    }

    &:nth-child(3),
    &:nth-child(4) {
      a,
      img {
        height: 100%;
        width: auto;
      }
    }
  }

  @media (max-width: ${rem(768)}) {
    grid-template-areas: 'one' 'two' 'three' 'three' 'four' 'four' 'five' 'six';

    a,
    img {
      width: 100% !important;
    }
  }
`;
