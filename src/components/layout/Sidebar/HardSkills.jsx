import { styled } from "styled-components";

import { Progressbar } from "../..";
import { dataStore } from "../../../store/dataStore";
import { rem } from "../../../utils";

export const HardSkills = () => {
  const data = dataStore((state) => state.sidebar.skills.hard);
  return (
    <div className='art-hard-skills p-30-15'>
      {data.map((skill, index) => (
        <HardSkillsItem key={`sidebar-hardskill-item-${index}`} {...skill} index={index} />
      ))}
    </div>
  );
};

export const HardSkillsItem = (props) => (
  <ItemContainer className='art-hard-skills-item'>
    <div className='art-skill-heading'>
      <span>{props.title}</span>
    </div>
    <Progressbar {...props} type='line' hide={true} />
  </ItemContainer>
);

const ItemContainer = styled.div`
  position: relative;
  margin-bottom: ${rem(15)};
  color: var(--c-font-2);
`;