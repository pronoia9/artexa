import CountUp from 'react-countup';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { countersMotion, rem } from '@/utils';

export const Counter = ({ index, number, text, accent, length }) => {
  return (
    <div className={`col-md-${12 / length} col-sm-12`}>
      <Frame className='art-counter-frame' {...countersMotion.frame}>
        <Box className='art-counter-box'>
          <CounterContainer id={`art-counter-${index}`} className='art-counter' {...countersMotion.contents}>
            <CountUp end={number} duration={5} delay={2.5} />
            <CounterAccent className='art-counter-plus'>{accent}</CounterAccent>
          </CounterContainer>
        </Box>
        <CounterTitle {...countersMotion.contents}>{text}</CounterTitle>
      </Frame>
    </div>
  );
};

const Frame = styled(motion.div)`
  position: relative;
  padding-left: 12.5%;
  display: flex;
  align-items: center;

  @media (max-width: ${rem(920)}) {
    padding-left: 5%;
  }

  @media (max-width: ${rem(768)}) {
    padding-left: 15%;
  }

  @media (max-width: ${rem(500)}) {
    padding-left: 10%;
  }
`;

const Box = styled.div`
  min-width: ${rem(60)};

  @media (max-width: ${rem(500)}) {
    min-width: ${rem(30)};
  }
`;

const CounterContainer = styled(motion.div)`
  position: relative;
  color: var(--c-accent-1);
  font-weight: 600;
  font-size: ${rem(22)};
`;

const CounterAccent = styled.span`
  position: absolute;
  bottom: ${rem(2)};
  margin-left: ${rem(3)};
`;

const CounterTitle = styled(motion.span)`
  color: var(--c-font-2);
`;
