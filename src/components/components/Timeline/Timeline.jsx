import { TimelineColumn } from '../..';

export const Timeline = ({ titles, children, ...props }) => {
  return children ? (
    children.map((tl, index) => (
      <TimelineColumn column={children.length || 2} title={titles[index] || ''} key={`timeline-column-${index}`} data={tl} />
    ))
  ) : (
    <TimelineColumn {...props} /> // column={column || 2} title={title || ''} key={`timeline-column-${index}`} data={data}
  );
};
