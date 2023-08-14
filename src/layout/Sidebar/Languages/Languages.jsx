import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { LanguagesItem } from '../../..';
import { dataStore } from '../../../../utils/dataStore';
import { sidebarMotion } from '../../../../utils';

export const Languages = () => {
  const data = dataStore((state) => state.sidebar.languages);
  return (
    <Container className='art-lang-skills p-30-15' {...sidebarMotion.languages.container}>
      {data.map((language, index) => (
        <LanguagesItem key={`sidebar-language-${index}`} {...language} index={index} />
      ))}
    </Container>
  );
};

const Container = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
