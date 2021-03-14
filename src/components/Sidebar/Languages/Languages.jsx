import React from 'react';
import Language from './Language';
import sidebar from '../../../data/sidebar.json';
import './languages.css';

export default function Languages() {
  return (
    <div className='art-lang-skills p-30-15'>
      {sidebar.skills.languages.map((l) => (
        <Language key={l.id} id={l.id} language={l.language} level={l.level} />
      ))}
    </div>
  );
}