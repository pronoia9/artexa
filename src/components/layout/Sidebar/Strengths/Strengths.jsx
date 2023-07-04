import { motion } from "framer-motion";

import { dataStore } from "../../../../store/dataStore";
import { Tag } from "../../../../styles";
import { rng, sidebarMotion } from "../../../../utils";

export const Strengths = () => {
  const data = dataStore((state) => state.sidebar.strengths);
  
  return (
    <motion.div className='art-strengths p-15-15 acc' {...sidebarMotion.strengths.container}>
      {data.map((strength, index) => (
        <Tag key={`sidebar-strenghts-${index}`} {...sidebarMotion.strengths.item} $rng={rng(1, 5)}>{strength}</Tag>
      ))}
    </motion.div>
  );
};
