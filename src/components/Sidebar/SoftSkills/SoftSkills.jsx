import React from 'react';
import SoftSkill from './SoftSkill';
import data from '../../../data/data.json';

function SkillsList() {
  let i = 1;
  return <ul className='art-knowledge-list p-15-0'>
    {data.softSkills.map((skill) => <SoftSkill key={i++} skills={skill} />)}
  </ul>;
}

export default SkillsList;
