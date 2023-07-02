import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { Progressbar, SplitText } from '../..';
import { dataStore } from '../../../store/dataStore';
import { rem, sidebarMotion } from '../../../utils';

export const Languages = () => {
  const data = dataStore((state) => state.sidebar.languages);
  return (
    <LanguagesContainer className='art-lang-skills p-30-15' {...sidebarMotion.languages.container}>
      {data.map((language, index) => (
        <LanguagesItem key={`sidebar-language-${index}`} {...language} index={index} />
      ))}
    </LanguagesContainer>
  );
};

export const LanguagesItem = (props) => {
  return (
    <ItemContainer className='art-lang-skills-item' {...sidebarMotion.languages.item}>
      <Progressbar {...props} type='circle' {...sidebarMotion.languages.bar} />
      <SplitText speed={0.025}>{props.language}</SplitText>
    </ItemContainer>
  );
};

const LanguagesContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ItemContainer = styled(motion.div)`
  width: 33.33333%;
  text-align: center;
  margin-bottom: ${rem(15)};
  color: var(--c-font-2);
`;
