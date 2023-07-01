import { css, styled } from 'styled-components';

import { dataStore } from '../../../store/dataStore';
import { lowerCase } from '../../../utils';

export const ProjectsFilters = (props) => {
  const data = dataStore((state) => state.projects.filters);
  return (
    <Container className='art-filter acc'>
      {data.map((filter, index) => (
        <FilterItem key={`projects-filter-${index} acc`} {...filter} {...props} />
      ))}
    </Container>
  );
};

export const FilterItem = ({ title, filter, filterKey, setFilterKey }) => {
  const handleClick = () => {
    setFilterKey(lowerCase(filter));
  };
  return (
    <Item className='art-link' onClick={handleClick} $active={lowerCase(filterKey) === lowerCase(filter)}>
      {title}
    </Item>
  );
};

const Container = styled.div`
  @media (max-width: 768px) {
    text-align: center;
    display: flex;
    flex-direction: column;

    & > * {
      margin: 0 0 10px;
    }
  }
`;

const Item = styled.button`
  margin-bottom: 0;
  color: ${({ $active }) => (!$active ? 'var(--c-font-1)' : `var(--c-accent-1)`)} !important;

  &:last-child {
    margin-right: 15px;
  }
`;
