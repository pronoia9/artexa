import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { dataStore } from '../../../store/dataStore';
import { lowerCase, projectsMotion } from '../../../utils';

export const ProjectsFilters = ({ cols, ...props }) => {
  const data = dataStore((state) => state.projects.filters);
  return (
    <Container className='art-filter acc' {...projectsMotion.filters}>
      {data.map((filter, index) => (
        <FilterItem key={`projects-filter-${index} acc`} {...filter} {...props} />
      ))}
    </Container>
  );
};

export const FilterItem = ({ title, filter, filterKey, setFilterKey }) => {
  const handleClick = () => { setFilterKey(lowerCase(filter)); };
  return (
    <Item className='art-link' onClick={handleClick} $active={lowerCase(filterKey) === lowerCase(filter)} {...projectsMotion.filter}>
      {title}
    </Item>
  );
};

const Container = styled(motion.div)`
  @media (max-width: 768px) {
    text-align: center;
    display: flex;
    flex-direction: column;

    & > * {
      margin: 0 0 10px;
    }
  }
`;

const Item = styled(motion.button)`
  margin-bottom: 0;
  color: ${({ $active }) => (!$active ? 'var(--c-font-1)' : `var(--c-accent-1)`)} !important;

  &:last-child {
    margin-right: 15px;
  }
`;
