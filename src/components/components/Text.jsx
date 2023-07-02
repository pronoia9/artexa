import { motion } from 'framer-motion';
import { styled } from 'styled-components';

import { SplitText } from '..';
import { textType } from '../../utils';

export const SectionTitle = ({ column = 1, title = 'Missing Section Title', speed = 0.05, children, ...props }) => (
  <motion.div className={'col-lg-' + (12 / props.column || 12)} {...props}>
    <Container className='art-section-title'>
      <Frame className='art-title-frame'>
        <motion.h2>
          <SplitText speed={speed}>{title}</SplitText>
        </motion.h2>
      </Frame>
      {children && <RightFrame className='art-right-frame'>{children}</RightFrame>}
    </Container>
  </motion.div>
);

const Container = styled.div`
  position: relative;
  width: 100%;
  flex: 0 0 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Frame = styled.div`
  align-self: center;
  position: relative;
  margin-bottom: 30px;
`;

const RightFrame = styled.div`
  padding-bottom: 30px;

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 500px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
