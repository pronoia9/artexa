import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import { textType } from '../../utils';

export const SectionTitle = ({ column = 1, title = 'Missing Section Title', speed = 0.05, children, ...props }) => (
  <motion.div className={`col-lg-${12 / column}`} {...props}>
    <TitleContainer className='art-section-title'>
      <TitleFrame className='art-title-frame'>
        <motion.h2 {...textType.text(speed)}>
          {title.split('').map((char, index) => (
            <motion.span key={`section-title-${title}-${index}`} {...textType.char}>
              {char}
            </motion.span>
          ))}
        </motion.h2>
      </TitleFrame>
      {children && <TitleRightFrame className='art-right-frame'>{children}</TitleRightFrame>}
    </TitleContainer>
  </motion.div>
);

const TitleContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const TitleFrame = styled.div`
  align-self: center;
  position: relative;
  margin-bottom: 30px;
`;

const TitleRightFrame = styled.div`
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
