import TechnologiesCard from './TechnologiesCard';
import SectionTitle from '../Templates/Text/SectionTitle';

export default function TechnologiesGrid(props) {
  return (
    <div className='container-fluid'>
      <div className='row p-30-0'>
        {/* heading */}
        <SectionTitle title={props.data.title} />

        {/* content */}
        {props.data.posts.map((item) => (
          <div className={'col-lg-' + 12 / props.column}>
            <TechnologiesCard key={item.id} post={item} message={props.data.message} />
          </div>
        ))}
      </div>
    </div>
  );
}