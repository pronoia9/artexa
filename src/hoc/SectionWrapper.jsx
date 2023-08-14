import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { sectionWrapperMotion } from '@/utils';

export const SectionWrapper = (Component, idName) =>
  function HOC(props) {
    return (
      <Container className='container-fluid' id={idName} {...sectionWrapperMotion(props?.stagger, props?.delay)}>
        <div className={`row ${idName !== 'hero' ? 'p-30-0' : 'p-60-0 p-lg-30-0 p-md-15-0'}`}>
          <Component {...props} />
        </div>
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
