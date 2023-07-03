import { motion } from "framer-motion";

import { dataStore } from "../../../../store/dataStore";
import { sidebarMotion } from "../../../../utils";
import { Tag } from "../../../../styles";

export const Strengths = () => {
  const data = dataStore((state) => state.sidebar.strengths);
  
  return (
    <motion.div className='art-strengths p-15-15' {...sidebarMotion.strengths.container}>
      {data.map((strength, index) => (
        <Tag key={`sidebar-strenghts-${index}`} {...sidebarMotion.strengths.item}>{strength}</Tag>
      ))}
    </motion.div>
  );
};
