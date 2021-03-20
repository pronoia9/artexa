import React from 'react';
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';
import SectionTitle from '../Templates/Text/SectionTitle';

export default function Contact(props) {
  return (
    <div className='container-fluid'>
      <div className='row p-30-0'>
        {/* header / title */}
        <SectionTitle title={props.data.title} />

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
