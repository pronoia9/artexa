import { ContactList, ContactForm, SectionTitle, SectionWrapper } from '../..';
import { dataStore } from '../../../utils/dataStore';

export default SectionWrapper(() => {
  const data = dataStore((state) => state.contact);

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
