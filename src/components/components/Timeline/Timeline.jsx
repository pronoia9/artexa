import { TimelineColumn } from "../..";

export const Timeline = ({ titles, children }) =>
  children.map((tc, index) => <TimelineColumn column={children.length} title={titles[index]} key={`timeline-column-${index}`} data={tc} />);
