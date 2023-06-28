import { motion } from 'framer-motion';
import { styled } from 'styled-components';

import { Progressbar } from '..';
import { dataStore } from '../../store/dataStore';
import { preloaderMotion } from '../../utils/motion';

export const Preloader = () => {
  const loading = dataStore((state) => state.loading);
  return (
    <Container id='art-preloader' className='art-preloader' {...preloaderMotion(loading)}>
      <Wrapper className='art-preloader-content'>
        <h1>Welcome</h1>
        <Progressbar type='preloader' level={100} />
      </Wrapper>
    </Container>
  );
};

const Container = styled(motion.div)`
  margin: 15px;
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100vw - 30px);
  height: calc(100vh - 30px);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: 'none';
  z-index: 999999;

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
