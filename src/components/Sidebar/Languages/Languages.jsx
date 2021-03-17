import React from 'react';
import Language from './Language';

export default function Languages(props) {
  return (
    <div className='art-lang-skills p-30-15'>
      {props.skills.map((l) => (
        <Language key={l.id} id={l.id} language={l.language} level={l.level} />
      ))}
    </div>
  );
}