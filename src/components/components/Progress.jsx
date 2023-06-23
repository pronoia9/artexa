import { useEffect } from 'react';
import * as ProgressBar from 'progressbar.js';

export default function Progress(props) {
  const { type, level, index } = props;
  if (!type || !level) return <></>;

  useEffect(() => {
    const progress = ProgressThing(props);
    progress?.animate(level / 100);
    return () => { progress?.destroy(); };
  }, []);

  return <div id={`${type}prog${index}`} className={`art-${type}-progress`} />;
}

const ProgressThing = ({ type = 'circle', level, index }) => {
  switch (type) {
    case 'circle':
      return new ProgressBar.Circle(`#${type}prog${index}`, {
        strokeWidth: 7,
        easing: 'easeInOut',
        duration: 1400,
        delay: 2400 + Number(index) * 100,
        trailWidth: 7,
        step: (state, bar) => { bar.setText(level); },
      });
    case 'line':
      return new ProgressBar.Line(`#${type}prog${index}`, {
        strokeWidth: 1.72,
        easing: 'easeInOut',
        duration: 1400,
        delay: 2700 + Number(index) * 100,
        trailWidth: 7,
        svgStyle: { width: '100%', height: '100%' },
        step: (state, bar) => { bar.setText(level); },
      });
    default:
      return null;
  }
};
