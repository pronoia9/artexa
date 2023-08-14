import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { dataStore } from '../../../utils/dataStore';
import { lowerCase, projectsMotion } from '../../../utils';

export const ProjectsFilters = (props) => {
  const { data, filterKey, setFilterKey } = dataStore((state) => ({
    data: state.projects.filters,
    filterKey: state.projects.filterKey,
    setFilterKey: state.projects.setFilterKey,
  }));
  return (
    <Container className='art-filter acc' {...projectsMotion.filters}>
      {data.map((f, index) => (
        <FilterItem
          key={`projects-filter-${index} acc`}
          {...f}
          onClick={() => { setFilterKey(lowerCase(f.filter)); }}
          active={filterKey === f.filter}
          {...projectsMotion.filter}
          {...props}
        />
      ))}
    </Container>
  );
};

export const FilterItem = ({ title, filter, active, ...props }) => {
  return (
    <Item className='art-link' $active={active} {...props}>
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
