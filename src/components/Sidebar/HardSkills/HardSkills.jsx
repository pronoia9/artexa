import React from 'react';
import HardSkill from './HardSkill';
import data from '../../../data/data.json';

function HardSkills() {
  return (
    <div className='art-hard-skills p-30-15'>
      {data.hardSkills.map((skill) => (
        <HardSkill key={skill.id} id={skill.id} skill={skill.skill} level={skill.level} />
      ))}
    </div>
  );
}

export default HardSkills;
