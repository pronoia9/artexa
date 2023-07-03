import { Counter, SectionWrapper } from '../..';
import { dataStore } from '../../../store/dataStore';

export default SectionWrapper(() => {
  const data = dataStore((state) => state.counters);

  return (
    <>
      {data.map((counter, index) => (
        <Counter key={`counter-${index}`} {...counter} index={index} length={data.length} />
      ))}
    </>
  );
}, 'counters');
