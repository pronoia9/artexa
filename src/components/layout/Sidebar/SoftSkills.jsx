'use client';

import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { rem, sidebarMotion, sidebar } from '@/utils';

export const SoftSkills = () => {
  const data = sidebar.skills.soft;

  return (
    <SkillsList className='art-knowledge-list p-15-0' {...sidebarMotion.softSkills.container}>
      {data.map((row, index) => (
        <li key={`sidebar-softskills-${index}`}>
          <ListItem key={`sidebar-softskills-${index}-items`} {...sidebarMotion.softSkills.item}>
            <motion.i className='fas fa-check' {...sidebarMotion.softSkills.check} />
            <motion.span {...sidebarMotion.softSkills.line}>{row.map((s) => s.title).join(', ')}</motion.span>
          </ListItem>
        </li>
      ))}
    </SkillsList>
  );
};

const SkillsList = styled(motion.ul)`
  padding-left: 0;
`;

const ListItem = styled(motion.div)`
  margin-bottom: ${rem(5)};

  i {
    margin-right: ${rem(5)};
    color: var(--c-accent-1);
    font-size: ${rem(9)};
    font-weight: 900;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    i {
      color: var(--c-accent-3);
    }
  }
`;
