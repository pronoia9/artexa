import { useState } from 'react';
import { css, styled } from 'styled-components';

import { Progressbar } from '../..';
import { dataStore } from '../../../store/dataStore';
import { Tooltip } from '../../../styles/TextStyles';
import { rem } from '../../../utils';

export const HardSkills = () => {
  const [hover, setHover] = useState(false);
  const data = dataStore((state) => state.sidebar.skills.hard);

  return (
    <SkillsContainer className='art-hard-skills p-30-15'>
      {data.map((skill, index) => (
        <HardSkillsItem key={`sidebar-hardskill-item-${index}`} {...skill} index={index} />
      ))}
    </SkillsContainer>
  );
};

export const HardSkillsItem = (props) => (
  <ItemContainer className='art-hard-skills-item' $description={props.description}>
    <div className='art-skill-heading'>
      <span>{props.title}</span>
    </div>
    <Progressbar {...props} type='line' hide={true} />
  </ItemContainer>
);

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(15)};
`;

const ItemContainer = styled(Tooltip)`
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
