import { Progressbar } from "../..";
import { dataStore } from "../../../store/dataStore";

export const HardSkills = () => {
  const data = dataStore((state) => state.sidebar.hardSkills);
  return (
    <div className='art-hard-skills p-30-15'>
      {data.map((skill, index) => (
        <HardSkillsItem key={`sidebar-hardskill-item-${index}`} {...skill} index={index} />
      ))}
    </div>
  );
};

export const HardSkillsItem = (props) => (
  <div className='art-hard-skills-item'>
    <div className='art-skill-heading'>
      <h6>{props.skill}</h6>
    </div>
    <Progressbar {...props} type='line' />
  </div>
);