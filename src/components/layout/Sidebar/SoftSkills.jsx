import { dataStore } from '../../../store/dataStore';

export const SoftSkills = () => {
  const data = dataStore((state) => state.sidebar.softSkills);
  return (
    <ul className='art-knowledge-list p-15-0'>
      {data.map((skills, index) => (
        <li key={`sidebar-softskills-${index}`}>{skills}</li>
      ))}
    </ul>
  );
};
