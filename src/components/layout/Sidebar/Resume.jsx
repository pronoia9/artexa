import { styled } from "styled-components";
import { motion } from "framer-motion";

import { dataStore } from "../../../store/dataStore";
import { sidebarMotion } from "../../../utils";

export const Resume = () => {
  const data = dataStore((state) => state.sidebar.resume);
  return (
    <Container className='art-links-frame p-15-15' {...sidebarMotion.sidebarSection(0.25, 8.75 * 0.666)}>
      <a href={data.url} className='art-link art-color-link' download>
        <motion.span {...sidebarMotion.resume.text}>{data.title}</motion.span>{' '}
        <motion.i {...sidebarMotion.resume.icon} className='fas fa-download' />
      </a>
    </Container>
  );
};

const Container = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;