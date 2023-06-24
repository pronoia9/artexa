import { styled } from 'styled-components';

import { dataStore } from '../../../store/dataStore';
import { rem } from '../../../utils';

export const SoftSkills = () => {
  const data = dataStore((state) => state.sidebar.softSkills);
  return (
    <SkillsList className='art-knowledge-list p-15-0'>
      {data.map((skills, index) => (
        <ListItem key={`sidebar-softskills-${index}`}>
          <i className='fas fa-check' />
          {skills}
        </ListItem>
      ))}
    </SkillsList>
  );
};

const SkillsList = styled.ul`
  padding-left: 0;

  i {
    margin-right: 10px;
    color: var(--c-accent-1);
    font-size: 9px;
    font-weight: 900;
  }
`;

const ListItem = styled.li`
  margin-bottom: 5px;
  color: var(--c-font-2);
  list-style-type: none;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover i {
    color: var(--c-accent-3);
  }
`;
