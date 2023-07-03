import { ContactList, ContactForm, SectionTitle, SectionWrapper } from '../..';
import { dataStore } from '../../../store/dataStore';

const Contact = () => {
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
};
export default SectionWrapper(Contact, 'contact');
