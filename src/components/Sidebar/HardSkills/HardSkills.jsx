import React from 'react';
import HardSkill from './HardSkill';

function HardSkills() {
  const skills = [
    { id: '1', skill: 'HTML5', level: '90' },
    { id: '2', skill: 'CSS3', level: '40' },
    { id: '3', skill: 'JavaScript', level: '70' },
    { id: '4', skill: 'ReactJS', level: '60' },
    { id: '5', skill: 'NodeJS', level: '60' },
  ];

  return (
    <div className='art-hard-skills p-30-15'>
      {skills.map((skill) => (
        <HardSkill key={skill.id} id={skill.id} skill={skill.skill} level={skill.level} />
      ))}
    </div>
  );
}

export default HardSkills;
