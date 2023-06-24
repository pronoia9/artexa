import { styled } from 'styled-components';
import { motion } from 'framer-motion';

const SectionWrapper = (Component, idName) =>
  function HOC(props) {
    return (
      <Container id={idName}>
        <Component {...props} />
      </Container>
    );
  };
export default SectionWrapper;

const Container = styled(motion.section)``;
