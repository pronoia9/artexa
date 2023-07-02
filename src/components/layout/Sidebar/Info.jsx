import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { dataStore } from '../../../store/dataStore';
import { sidebarMotion } from '../../../utils';
import { SplitText } from '../../components/SplitText';

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

export const InfoItem = ({ title, subtitle, index }) => {
  return (
    <ListItem {...sidebarMotion.info.item}>
      <SplitText>{title}</SplitText>
      <motion.span {...sidebarMotion.info.subtitle}>{subtitle}</motion.span>
    </ListItem>
  );
};

const ListItem = styled(motion.li)`
  span:first-child {
    color: var(--c-font-2);
  }
`;
