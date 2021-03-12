import React from 'react';
import Language from './Language';

function Languages() {
  const languages = [
    { id: '1', language: 'English', level: 100 },
    { id: '2', language: 'French', level: 20 },
  ];

  return (
    <div className='art-lang-skills p-30-15'>
      {languages.map((language) => (
        <Language key={language.id} id={language.id} language={language.language} level={language.level} />
      ))}
    </div>
  );
}

export default Languages;
