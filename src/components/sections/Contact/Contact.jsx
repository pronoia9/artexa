import { ContactCard, ContactForm, SectionTitle, SectionWrapper } from '../..';
import { dataStore } from '../../../store/dataStore';

const Contact = () => {
  const data = dataStore((state) => state.contact);

  return (
    <div className='row p-30-0'>
      <SectionTitle title={data.title} />

      {data.info.map((info, index) => (
        <ContactCard key={`contact-card-${index}`} {...info} length={data.info.length} />
      ))}

      <ContactForm />
    </div>
  );
};
export default SectionWrapper(Contact, 'contact');
