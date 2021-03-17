import React from 'react';
import HardSkill from './HardSkill';

export default function HardSkills(props) {
  return (
    <div className='art-hard-skills p-30-15'>
      {props.skills.map((s) => (
        <HardSkill key={s.id} id={s.id} skill={s.skill} level={s.level} />
      ))}
    </div>
  );
}