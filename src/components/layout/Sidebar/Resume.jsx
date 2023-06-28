import { styled } from "styled-components";
import { motion } from "framer-motion";

import { dataStore } from "../../../store/dataStore";
import { sidebarMotion } from "../../../utils";

export const Resume = () => {
  const data = dataStore((state) => state.sidebar.resume);
  return (
    <Container className='art-links-frame p-15-15' {...sidebarMotion.sidebarSection}>
      <motion.a href={data.url} className='art-link art-color-link' download {...sidebarMotion.resume}>
        {data.title} <i className='fas fa-download' />
      </motion.a>
    </Container>
  );
};

const Container = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;