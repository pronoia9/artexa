import React from 'react';
import Language from './Language';
import data from '../../../variables/data.json';

function Languages() {
  return (
    <div className='art-lang-skills p-30-15'>
      {data.languages.map((language) => (
        <Language key={language.id} id={language.id} language={language.language} level={language.level} />
      ))}
    </div>
  );
}

export default Languages;
