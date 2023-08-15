'use client';

import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { SVGs } from '@/components';
import { rem, sidebarMotion, sidebar } from '@/utils';

export const SoftSkills = () => {
  const data = sidebar.skills.soft;

  return (
    <SkillsList className='art-knowledge-list p-15-0' {...sidebarMotion.softSkills.container}>
      {data.map((row, index) => (
        <li key={`sidebar-softskills-${index}`}>
          <ListItem key={`sidebar-softskills-${index}-items`} {...sidebarMotion.softSkills.item}>
            <motion.span {...sidebarMotion.softSkills.check}>
              <SVGs type='check' height={6} />
            </motion.span>
            <motion.span {...sidebarMotion.softSkills.line}>{row.map((s) => s.title).join(', ')}</motion.span>
          </ListItem>
        </li>
      ))}
    </SkillsList>
  );
};

const SkillsList = styled(motion.ul)`
  padding-left: 0;
  list-style: none;
`;

const ListItem = styled(motion.div)`
  margin-bottom: ${rem(5)};

  svg {
    margin-right: ${rem(5)};
    fill: var(--c-accent-1);

  }

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    svg {
      fill: var(--c-accent-3);
    }
  }
`;
