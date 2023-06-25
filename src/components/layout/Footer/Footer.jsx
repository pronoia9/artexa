import { Logos, SectionWrapper } from '../..';
import { dataStore } from '../../../store/dataStore';

const Footer = () => {
  const data = dataStore((state) => state.footer);

  return (
    <>
      <Logos logos={data.logos} />
      <footer>
        <div>{data.text[0]}</div>
        <div>{data.text[1]}</div>
      </footer>
    </>
  );
};
export default SectionWrapper(Footer, 'footer');
