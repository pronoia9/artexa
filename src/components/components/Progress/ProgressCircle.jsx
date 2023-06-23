import { useEffect } from 'react';
import * as ProgressBar from 'progressbar.js';

const ProgressCircle = ({ ids, classNames, percentage, index }) => {
  useEffect(() => {
    const circle = new ProgressBar.Circle(`#${ids}`, {
      strokeWidth: 7,
      easing: 'easeInOut',
      duration: 1400,
      delay: 2400 + Number(index) * 100,
      trailWidth: 7,
      step: (state, bar) => { bar.setText(percentage); },
    });
    circle.animate(percentage / 100);
    return () => { circle.destroy(); };
  }, []);

  return <div id={ids} className={classNames} />;
};
export default ProgressCircle;
