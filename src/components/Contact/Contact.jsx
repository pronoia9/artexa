import React from 'react';
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';

export default function Contact(props) {
  return (
    <div className='container-fluid'>
      <div className='row p-30-0'>
        {/* header / title */}
        <div className='col-lg-12'>
          <div className='art-section-title'>
            <div className='art-title-frame'>
              <h4>{props.data.title}</h4>
            </div>
          </div>
        </div>

        {/* contact info */}
        {props.data.info.map((i) => (
          <ContactCard key={Math.round(Math.random() * 50)} info={i} length={props.data.info.length} />
        ))}

        {/* contact form */}
        <ContactForm form={props.data.form} />
      </div>
    </div>
  );
}
