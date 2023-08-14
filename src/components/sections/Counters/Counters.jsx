// import { styled } from 'styled-components';
// import { motion } from 'framer-motion';

import { Counter, SectionWrapper } from '@/components';
import { counters as data } from '@/utils';

export default SectionWrapper(() => {
  return (
    <>
      {/* <Container className='row art-card'> */}
        {data.map((counter, index) => (
          <Counter key={`counter-${index}`} {...counter} index={index} length={data.length} />
        ))}
      {/* </Container> */}
    </>
  );
}, 'counters');

// const Container = styled(motion.div)`
//   width: 100%;
//   padding: 15px;
//   margin: 0 15px 15px;
// `;