import { SectionTitle, TimelineItem } from '../..';

export const TimelineColumn = ({ column = 1, title = '', data = [] }) => (
  <div className={'col-lg-' + 12 / column}>
    <SectionTitle title={title} />

    <div className='art-timeline art-gallery'>
      {data.map((item) => (
        <TimelineItem key={item.id} {...item} />
      ))}
    </div>
  </div>
);
