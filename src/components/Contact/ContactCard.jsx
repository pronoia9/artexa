import React from 'react';
import ContactCardInfo from './ContactCardInfo';

export default function ContactCards(props) {
  return (
    <div className={'col-lg-' + 12 / props.length}>
      <div className='art-a art-card'>
        <div className='art-table p-15-15'>
          <ul>
            {props.info.map((i) => (
              <ContactCardInfo key={i.id} id={i.id} info={i} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
