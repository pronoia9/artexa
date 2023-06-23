import { LanguagesItem } from '../..';
import { dataStore } from '../../../../store/dataStore';

const Languages = () => {
  const data = dataStore((state) => state.sidebar.languages);
  return (
    <div className='art-lang-skills p-30-15'>
      {data.map((language, index) => (
        <LanguagesItem key={`sidebar-language-${index}`} {...language} />
      ))}
    </div>
  );
};
export default Languages;
