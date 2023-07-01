import { dataStore } from '../../../store/dataStore';

export const ProjectsFilter = ({ handleClick }) => {
  const data = dataStore((state) => state.projects.filters);

  return (
    <div className='art-filter'>
      {data.map(({ title, category }, index) => (
        <div key={`projects-filter-${index}`} className='art-link' onClick={() => handleClick(category)}>
          {title}
        </div>
      ))}
    </div>
  );
};
