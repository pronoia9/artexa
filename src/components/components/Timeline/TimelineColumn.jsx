import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { SectionTitle, TimelineItem } from '../..';
import { historyMotion } from '../../../utils';

export const TimelineColumn = ({ column = 1, title = '', data = [], index }) => (
  <motion.div className={'col-lg-' + 12 / column} {...historyMotion.column}>
    <SectionTitle title={title} />
    <Container className='art-timeline' {...historyMotion.cards}>
      {data.map((item, index) => (
        <TimelineItem key={`timeline-item-${index}-${item?.title}`} {...item} {...historyMotion.card} />
      ))}
    </Container>
  </motion.div>
);

const Container = styled(motion.div)`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    right: 5px;
    width: 5px;
    height: calc(100% - 10px);
    background: var(--c-bg);
  }
`;