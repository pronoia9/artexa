import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { Progressbar, SplitText } from '../../..';
import { rem, sidebarMotion } from '../../../../utils';

export const LanguagesItem = (props) => {
  return (
    <Container className='art-lang-skills-item' {...sidebarMotion.languages.item}>
      <Progressbar {...props} type='circle' {...sidebarMotion.languages.bar} />
      <SplitText speed={0.025}>{props.language}</SplitText>
    </Container>
  );
};

const Container = styled(motion.div)`
  width: 33.33333%;
  text-align: center;
  margin-bottom: ${rem(15)};
  color: var(--c-font-2);
`;
