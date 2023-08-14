import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { sidebarMotion } from '../../../../utils';
import { SplitText } from '../../../components/SplitText';

export const InfoItem = ({ title, subtitle, index }) => {
  return (
    <Container {...sidebarMotion.info.item}>
      <SplitText>{title}</SplitText>
      <motion.span {...sidebarMotion.info.subtitle}>{subtitle}</motion.span>
    </Container>
  );
};

const Container = styled(motion.li)`
  span:first-child {
    color: var(--c-font-2);
  }
`;
