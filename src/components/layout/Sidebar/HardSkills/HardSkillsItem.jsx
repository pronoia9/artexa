import { css, styled } from 'styled-components';
import { motion } from 'framer-motion';

import { Progressbar } from '../../..';
import { Tooltip } from '../../../../styles/TextStyles';
import { sidebarMotion } from '../../../../utils';

export const HardSkillsItem = (props) => (
  <Container className='art-hard-skills-item' $description={props.description} {...sidebarMotion.hardSkills.item}>
    <motion.span className='art-skill-heading' {...sidebarMotion.hardSkills.items}>
      {props.title}
    </motion.span>
    <Progressbar {...props} type='line' hide={true} {...sidebarMotion.hardSkills.items} />
  </Container>
);

const Container = styled(Tooltip)`
  position: relative;
  color: var(--c-font-2);

  ${({ $description }) =>
    $description
      ? css`
          &::after {
            content: $description;
            top: -50%;
            right: 5%;
            max-width: 90%;
            transform: scale(0.75);
            transition-delay: 1s;
          }
        `
      : css`
          &::after,
          &::before {
            content: none;
          }
        `}
`;
