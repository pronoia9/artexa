import { motion } from "framer-motion";
import { styled } from "styled-components";

export const HobbiesCard = ({ title, image }) => {
  return (
    <Frame className='art-a art-hobbies-item-frame acc'>
      <a data-fancybox='hobbies' href={image} className='art-a art-hobbies-item-frame art-horizontal'>
        <img src={image} alt={title} />
        <span className='art-item-hover center'>
          <i className='fas fa-expand' />
        </span>
      </a>
    </Frame>
  );
};

const Frame = styled(motion.div)`
  &:hover {
    .art-item-hover {
      opacity: 0.8;
    }
  }
`;