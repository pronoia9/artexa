'use client';

import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { sidebarMotion, sidebar } from '@/utils';
import { SVGs } from '@/components';

export const Resume = () => {
  const data = sidebar.resume;
  return (
    <Container className='art-links-frame p-15-15' {...sidebarMotion.resume.container}>
      <a href={data.url} className='art-link art-color-link' download>
        <motion.span {...sidebarMotion.resume.text}>{data.title}</motion.span>
        <motion.span {...sidebarMotion.resume.icon}>
          <SVGs type='download' height={10} />
        </motion.span>
      </a>
    </Container>
  );
};

const Container = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  a {
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
  }

  span:first-child {
    font-size: 11px;
  }

  svg {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }

  &:hover {
    svg {
      transform: scale(1.3);
      transition-delay: 0.4s;
    }
  }
`;
