import { motion } from "framer-motion";
import { styled } from "styled-components";

import { Tag } from "@/styles";
import { rng, tagsMotion } from '@/utils';

export const Tags = ({ data, section, motion, ...props }) => {
  return (
    <Container {...tagsMotion.container} {...props}>
      {data?.map((tag) => (
        <Tag key={`${section}-tags-${tag}`} className='art-tag' $rng={rng(1, 5)} {...tagsMotion.item} {...motion}>
          {tag}
        </Tag>
      ))}
    </Container>
  );
};

const Container = styled(motion.div)``;