import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { SectionTitle, TimelineItem } from '../..';

export const TimelineColumn = ({ column = 1, title = '', data = [] }) => (
  <div className={'col-lg-' + 12 / column}>
    <SectionTitle title={title} />

    <Container className='art-timeline'>
      {data.map((item) => (
        <TimelineItem key={item.id} {...item} />
      ))}
    </Container>
  </div>
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