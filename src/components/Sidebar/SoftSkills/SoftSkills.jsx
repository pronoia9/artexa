import React from 'react';
import SoftSkill from './SoftSkill';

export default function SkillsList(props) {
  let i = 1;
  return (
    <ul className='art-knowledge-list p-15-0'>
      {props.skills.map((s) => (
        <SoftSkill key={i++} skills={s} />
      ))}
    </ul>
  );
}