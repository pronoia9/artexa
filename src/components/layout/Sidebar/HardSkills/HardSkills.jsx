import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { HardSkillsItem } from '../../..';
import { dataStore } from '../../../../utils/dataStore';
import { rem, sidebarMotion } from '../../../../utils';

export const HardSkills = () => {
  const data = dataStore((state) => state.sidebar.skills.hard);

  return (
    <Container className='art-hard-skills p-15-15' {...sidebarMotion.hardSkills.container}>
      {data.map((skill, index) => (
        <HardSkillsItem key={`sidebar-hardskill-item-${index}`} {...skill} index={index} />
      ))}
    </Container>
  );
};

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${rem(5)};
`;
