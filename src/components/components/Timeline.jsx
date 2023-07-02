import { SectionTitle } from '..';

export const Timeline = ({ titles, children }) =>
  children.map((tc, index) => <TimelineColumn column={children.length} title={titles[index]} key={`timeline-column-${index}`} data={tc} />);

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

export const TimelineItem = (props) => {
  const { id, title, subtitle, description, dates, button, url, fancybox } = props;

  dates[0] = new Date(dates[0]).toLocaleDateString('en-us', { year: 'numeric', month: 'short' });
  dates[1] = dates[1]
    ? dates[1] === 'Ongoing'
      ? 'Ongoing'
      : new Date(dates[1]).toLocaleDateString('en-us', { year: 'numeric', month: 'short' })
    : null;

  return (
    <div className='art-timeline-item'>
      {/* decoration, the circle lights next to the item */}
      <div className='art-timeline-mark-light'></div>
      <div className='art-timeline-mark'></div>

      {/* item */}
      <div className='art-a art-timeline-content'>
        {/* header */}
        <div className='art-card-header'>
          <div className='art-left-side'>
            {/* title */}
            <h5>{title}</h5>
            {/* status / author */}
            {subtitle && <div className='art-el-suptitle mb-15'>{subtitle}</div>}
          </div>
          {/* date */}
          {dates.length && (
            <div className='art-right-side'>
              <div className='art-date'>{`${dates[0]}${dates[1] && dates[0] !== dates[1] ? ` - ${dates[1]}` : ''}`}</div>
            </div>
          )}
        </div>

        {/* content */}
        <p>{description}</p>
        {/* <ul> {list.map((c) => ( <li key={c}>{c}</li> ))} </ul> */}

        {/* link */}
        {button &&
          url &&
          (fancybox ? (
            <a data-fancybox='history' className='art-link art-color-link art-w-chevron' href={process.env.PUBLIC_URL + url}>
              {button}
            </a>
          ) : (
            <a className='art-link art-color-link art-w-chevron' href={url} target='_blank' rel='noreferrer'>
              {button}
            </a>
          ))}
      </div>
    </div>
  );
};
