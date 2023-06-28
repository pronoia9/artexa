import { Counter, SectionWrapper } from '../..';
import { dataStore } from '../../../store/dataStore';

const Counters = () => {
  const data = dataStore((state) => state.counters);

  return (
    <div className='row p-30-0'>
      {data.map((counter, index) => (
        <Counter key={`counter-${index}`} {...counter} index={index} length={data.length} />
      ))}
    </div>
  );
};
export default SectionWrapper(Counters, 'counters');
