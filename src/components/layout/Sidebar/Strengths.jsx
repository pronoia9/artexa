import { styled } from "styled-components";
import { motion } from "framer-motion";

import { dataStore } from "../../../store/dataStore";
import { rem, sidebarMotion } from "../../../utils";

export const Strengths = () => {
  const data = dataStore((state) => state.sidebar.strengths);
  return (
    <motion.div className='art-strengths p-15-15' {...sidebarMotion.strengths.frame}>
      {data.map((strength, index) => (
        <StrengthItem key={`sidebar-strenghts-${index}`} {...sidebarMotion.strengths.item}>{strength}</StrengthItem>
      ))}
    </motion.div>
  );
};

const StrengthItem = styled(motion.div)`
  margin: auto ${rem(3)} ${rem(5)} auto;
  padding: ${rem(3)} ${rem(10)};
  display: inline-block;
  color: var(--c-font-1);
  font-family: var(--f-tertiary);
  background: var(--c-bg);
  border-radius: ${rem(15)};
  box-shadow: inset 0 ${rem(3)} ${rem(8)} 0 var(--c-box-shadow);

  &:hover {
    color: var(--c-accent-3);
  }
`;