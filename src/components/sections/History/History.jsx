import { motion } from 'framer-motion';

import { SectionWrapper, Timeline } from '../..';
import { dataStore } from '../../../store/dataStore';

const History = () => {
  const data = dataStore((state) => state.history);

  return (
    <motion.div className='row p-60-0'>
      <Timeline titles={['Certificates', 'Courses']}>
        {data.education}
        {data.courses}
      </Timeline>
    </motion.div>
  );
};

export default SectionWrapper(History, 'history');
