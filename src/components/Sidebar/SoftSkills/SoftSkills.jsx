import React from 'react';
import SoftSkill from './SoftSkill';
import './softSkills.css';
import sidebar from '../../../data/sidebar.json';

function SkillsList() {
  let i = 1;
  return (
    <ul className='art-knowledge-list p-15-0'>
      {sidebar.skills.soft.map((s) => (
        <SoftSkill key={i++} skills={s} />
      ))}
    </ul>
  );
}

export default SkillsList;
