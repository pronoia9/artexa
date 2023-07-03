import { motion } from 'framer-motion';

import { InfoItem } from '../../..';
import { dataStore } from '../../../../store/dataStore';
import { sidebarMotion } from '../../../../utils';

export const Info = () => {
  const data = dataStore((state) => state.sidebar.about);

  return (
    <motion.div className='art-table p-15-15' {...sidebarMotion.info.container}>
      <ul>
        {data.map((item, index) => (
          <InfoItem key={item.id} {...item} index={index} />
        ))}
      </ul>
    </motion.div>
  );
};
