import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import { sectionWrapperMotion } from '../../utils';

export const SectionWrapper = (Component, idName) =>
  function HOC(props) {
    return (
      <Container className='container-fluid' id={idName} {...sectionWrapperMotion}>
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
