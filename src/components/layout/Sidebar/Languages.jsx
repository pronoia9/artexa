'use client';

import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { Progressbar, SplitText } from '@/components';
import { sidebar } from '@/data';
import { sidebarMotion, rem } from '@/utils';

export const Languages = () => {
  const { items } = sidebar.languages;
  return (
    <LanguagesContainer className='art-lang-skills p-30-15' {...sidebarMotion.languages.container}>
      {items.map((language, index) => (
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
  const { cols } = sidebar.languages;
  return (
    <LanguageItem className='art-lang-skills-item' $cols={cols} {...sidebarMotion.languages.item}>
      <Progressbar {...props} type='circle' {...sidebarMotion.languages.bar} />
      <SplitText speed={0.025}>{props.language}</SplitText>
    </LanguageItem>
  );
};

const LanguageItem = styled(motion.div)`
  width: ${({ $cols }) => `${100 / $cols}%`};
  text-align: center;
  margin-bottom: ${rem(15)};
  color: var(--c-font-2);
`;
