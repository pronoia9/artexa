'use client';

import { SectionTitle, SectionWrapper, ContactList, ContactForm } from '@/components';
import { contact as data } from '@/utils';

export default SectionWrapper(() => {
  return (
    <>
      <SectionTitle title={data.title} />
      {data.info.map((info, index) => (
        <ContactList key={`contact-card-${index}`} list={info} cols={data.info.length} />
      ))}
      <ContactForm />
    </>
  );
}, 'contact');
