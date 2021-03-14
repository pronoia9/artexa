import React from 'react';
import HardSkill from './HardSkill';
import sidebar from '../../../data/sidebar.json';

export default function HardSkills() {
  return (
    <div className='art-hard-skills p-30-15'>
      {sidebar.skills.hard.map((s) => (
        <HardSkill key={s.id} id={s.id} skill={s.skill} level={s.level} />
      ))}
    </div>
  );
}