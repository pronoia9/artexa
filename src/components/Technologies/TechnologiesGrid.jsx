import TechnologiesCard from './TechnologiesCard';
import SectionTitle from '../Templates/Text/SectionTitle';

export default function TechnologiesGrid({ data, column }) {
  const { title, message, packages } = data;
  return (
    <div className='container-fluid'>
      <div className='row p-30-0'>
        {/* heading */}
        <SectionTitle title={title} />

        {/* content */}
        {packages.map((item) => (
          <div className={'col-lg-' + 12 / column}>
            <TechnologiesCard key={item.id + item.title} item={item} message={message} />
          </div>
        ))}
      </div>
    </div>
  );
}