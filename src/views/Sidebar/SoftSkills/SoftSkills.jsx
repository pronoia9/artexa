import React from 'react';
import SoftSkill from './SoftSkill';
import './softSkills.css';
import data from '../../../data/data.json';

function SkillsList() {
  let i = 1;
  return (
    <ul className='art-knowledge-list p-15-0'>
      {data.skills.soft.map((skill) => (
        <SoftSkill key={i++} skills={skill} />
      ))}
    </ul>
  );
}

export default SkillsList;
