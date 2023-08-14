'use client';

import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { Progressbar, SplitText } from '@/components';
import { sidebar, sidebarMotion, rem } from '@/utils';

export const Languages = () => {
  const data = sidebar.languages;
  return (
    <LanguagesContainer className='art-lang-skills p-30-15' {...sidebarMotion.languages.container}>
      {data.map((language, index) => (
        <LanguagesItem key={`sidebar-language-${index}`} {...language} index={index} />
      ))}
    </LanguagesContainer>
  );
};

const LanguagesContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const LanguagesItem = (props) => {
  return (
    <LanguageItem className='art-lang-skills-item' {...sidebarMotion.languages.item}>
      <Progressbar {...props} type='circle' {...sidebarMotion.languages.bar} />
      <SplitText speed={0.025}>{props.language}</SplitText>
    </LanguageItem>
  );
};

const LanguageItem = styled(motion.div)`
  width: 33.33333%;
  text-align: center;
  margin-bottom: ${rem(15)};
  color: var(--c-font-2);
`;
