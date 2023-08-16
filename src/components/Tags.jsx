import { motion } from "framer-motion";
import { styled } from "styled-components";

import { Tag } from "@/styles";
import { rng, sidebarMotion } from "@/utils";

export const Tags = ({ data, section, motion, ...props }) => {
  return (
    <Container {...sidebarMotion.strengths.container} {...props}>
      {data?.map((tag) => (
        <Tag key={`${section}-tags-${tag}`} className='art-tag' $rng={rng(1, 5)} {...sidebarMotion.strengths.item} {...motion}>
          {tag}
        </Tag>
      ))}
    </Container>
  );
};

const Container = styled(motion.div)``;