import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const SectionWrapper = (Component, idName) =>
  function HOC(props) {
    return (
      <Container
        className='container-fluid'
        id={idName}
        initial='hidden'
        animate='visible'
        variants={{
          visible: { opacity: 1, y: 0, transition: { delay: props?.framerDelay || 1 * 0.3 } },
          hidden: { opacity: 0, y: 500 },
        }}
      >
        <Component {...props} />
      </Container>
    );
  };

const Container = styled(motion.section)`
  overflow: hidden;
  padding: 0 30px;
  position: relative;

  @media (max-width: 920px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;
