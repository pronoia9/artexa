import CountUp from 'react-countup';
import { styled } from 'styled-components';

export const Counter = ({ index, number, text, accent, length }) => {
  return (
    <div className={`col-md-${12 / length} col-sm-12`}>
      <Frame className='art-counter-frame'>
        <Box className='art-counter-box'>
          <CounterContainer id={`art-counter-${index}`} className='art-counter'>
            <CountUp end={number} duration={5} delay={2.5} />
            <CounterAccent class='art-counter-plus'>{accent}</CounterAccent>
          </CounterContainer>
        </Box>
        <CounterTitle>{text}</CounterTitle>
      </Frame>
    </div>
  );
};

const Frame = styled.div`
  position: relative;
  margin-bottom: 30px;
  padding-left: 12.5%;
  display: flex;
  align-items: center;

  @media (max-width: 920px) {
    padding-left: 5%;
  }

  @media (max-width: 768px) {
    padding-left: 15%;
  }

  @media (max-width: 500px) {
    padding-left: 10%;
  }
`;

const Box = styled.div`
  min-width: 60px;

  @media (max-width: 500px) {
    min-width: 30px;
  }
`;

const CounterContainer = styled.div`
  position: relative;
  color: var(--c-accent-1);
  font-weight: 600;
  font-size: 22px;
`;

const CounterAccent = styled.span`
  position: absolute;
  bottom: 2px;
  margin-left: 3px;
`;

const CounterTitle = styled.span`
  color: var(--c-font-2);
`;
