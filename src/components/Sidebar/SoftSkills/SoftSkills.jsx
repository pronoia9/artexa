import React from 'react';
import SoftSkill from './SoftSkill';
import data from '../../../variables/data.json';

function SkillsList() {
  return <ul className='art-knowledge-list p-15-0'>
    {data.softSkills.map((skill) => <SoftSkill key='' skills={skill} />)}
  </ul>;
}

export default SkillsList;
