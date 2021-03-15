import React from 'react';
import ContactCard from '../components/Contact/ContactCard';
import ContactForm from '../components/Contact/ContactForm';
import contactData from '../data/contact.json';

export default function Contact() {
  return (
    <div className='container-fluid'>
      <div className='row p-30-0'>
        {/* header / title */}
        <div className='col-lg-12'>
          <div className='art-section-title'>
            <div className='art-title-frame'>
              <h4>{contactData.title}</h4>
            </div>
          </div>
        </div>

        {/* contact info */}
        {contactData.info.map((i) => (
          <ContactCard info={i} length={contactData.info.length} />
        ))}

        {/* contact form */}
        <ContactForm title={contactData.form} />
      </div>
    </div>
  );
}
