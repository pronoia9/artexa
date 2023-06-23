import { useEffect } from 'react';
import * as ProgressBar from 'progressbar.js';

const ProgressCircle = ({ level, index }) => {
  useEffect(() => {
    const circle = new ProgressBar.Circle(`#circleprog${index}`, {
      strokeWidth: 7,
      easing: 'easeInOut',
      duration: 1400,
      delay: 2400 + Number(index) * 100,
      trailWidth: 7,
      step: (state, bar) => { bar.setText(level); },
    });
    circle.animate(level / 100);
    return () => { circle.destroy(); };
  }, []);

  return <div id={`circleprog${index}`} className='art-circle-progress' />;
};
export default ProgressCircle;
