import { Scrollbar } from 'smooth-scrollbar-react';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { Background, Footer } from '..';
import { dataStore } from '../../store/dataStore';
import { pageWrapperMotion, rem } from '../../utils';

export const PageWrapper = (Component, idName) =>
  function HOC(props) {
    const { curtainEnabled, curtainClose } = dataStore((state) => ({
      curtainEnabled: state.curtainEnabled,
      curtainClose: state.curtainClose,
    }));

    return (
      <Content id={`${idName}-page`} className='art-content' $curtainEnabled={curtainEnabled} onClick={() => curtainClose()} {...pageWrapperMotion}>
        <Curtain className='art-curtain' $curtainEnabled={curtainEnabled} />
        <Background />
        <Scrollbar id='scrollbar' className='art-scroll-frame' damping={0.5} plugins={{ overscroll: { effect: 'bounce' } }}>
          <Component {...props} />
          <Footer />
        </Scrollbar>
      </Content>
    );
  };

const Content = styled(motion.div)`
  position: relative;
  width: 100vw;
  height: calc(100vh - ${rem(30)});
  padding-right: ${rem(80)};
  overflow: hidden;
  transform: ${({ $curtainEnabled }) => $curtainEnabled && `translateX(${rem(-150)})`};
  transition: 0.55s ease-in-out;

  .scroll-content, .art-scroll-frame {
    height: 100%;
  }

  @media (max-width: ${rem(920)}) {
    position: relative;
    width: 100vw;
    height: 100vh;
    padding-right: 0;
    padding-top: ${rem(70)};
    transform: ${({ $curtainEnabled }) => $curtainEnabled && 'none'};

    .art-scroll-frame {
      /* height: calc(100vh - ${rem(70)}); */
    }
  }

  @media (max-width: 230px) {
    padding-right: 0;
  }
`;

const Curtain = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(30, 30, 40, 0.88);
  opacity: ${({ $curtainEnabled }) => ($curtainEnabled ? 0.7 : 0)};
  pointer-events: ${({ $curtainEnabled }) => ($curtainEnabled ? 'all' : 'none')};
  z-index: 9;
  transition: 0.55s ease-in-out;

  @media (max-width: ${rem(920)}) {
    pointer-events: ${({ $curtainEnabled }) => $curtainEnabled && 'all'};
    opacity: ${({ $curtainEnabled }) => $curtainEnabled && 1};
  }
`;
