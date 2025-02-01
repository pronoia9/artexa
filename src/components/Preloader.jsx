'use client';

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

import { Progressbar } from '@/components';
import { preloaderMotion } from '@/utils';

export const Preloader = ({ title, children, ...props }) => {
  return (
    <Container id='art-preloader' className='art-preloader' {...preloaderMotion}>
      <Wrapper className='art-preloader-content'>
        <h1>{title}</h1>
        {children}
        {props.duration && <Progressbar type='preloader' {...props} />}
      </Wrapper>
    </Container>
  );
};

const Container = styled(motion.div)`
  margin: 15px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: calc(100vw - 30px);
  height: calc(100vh - 30px);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: 'none';
  z-index: 999999;
  background: var(--c-bg);

  @media (max-width: 920px) {
    margin: 0;
    width: 100vw;
    height: 100vh;
  }
`;

const Wrapper = styled.div`
  margin-bottom: 15px;
  text-align: center;
`;
