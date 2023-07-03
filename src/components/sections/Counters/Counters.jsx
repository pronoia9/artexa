import { Counter, SectionWrapper } from '../..';
import { dataStore } from '../../../store/dataStore';

const Counters = () => {
  const data = dataStore((state) => state.counters);

  return (
    <>
      {data.map((counter, index) => (
        <Counter key={`counter-${index}`} {...counter} index={index} length={data.length} />
      ))}
    </>
  );
};
export default SectionWrapper(Counters, 'counters');
