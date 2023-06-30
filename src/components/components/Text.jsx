import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import { textType } from '../../utils';

export const Title = (props) => (
  <TitleContainer className='art-section-title' {...props}>
    <TitleFrame className='art-title-frame'>
      <motion.h2 {...textType.text(props.speed)}>
        {props.title.split('').map((char, index) => (
          <motion.span key={`section-title-${props.title}-${index}`} {...textType.char}>
            {char}
          </motion.span>
        ))}
      </motion.h2>
    </TitleFrame>
    {props.children}
  </TitleContainer>
);

export const SectionTitle = ({ column = 1, title, rightTitle, rightClass, ...props }) => (
  <motion.div className={`col-lg-${12 / column}`} {...props}>
    <Title title={title} speed={props.speed}>
      {rightTitle && (
        <TitleRightFrame className='art-right-frame'>
          <div className={rightClass}>{rightTitle}</div>
        </TitleRightFrame>
      )}
    </Title>
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
