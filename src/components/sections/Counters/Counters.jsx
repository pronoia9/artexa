import { motion } from 'framer-motion';
import { Counter, SectionWrapper } from '../..';
import { dataStore } from '../../../store/dataStore';
import { styled } from 'styled-components';

export default SectionWrapper(() => {
  const data = dataStore((state) => state.counters);

  return (
    <Container className='row art-card'>
      {data.map((counter, index) => (
        <Counter key={`counter-${index}`} {...counter} index={index} length={data.length} />
      ))}
    </Container>
  );
}, 'counters');

const Container = styled(motion.div)`
  width: 100%;
  padding: 15px;
  margin: 0 15px 15px;
`;