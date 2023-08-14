import { useEffect } from 'react';

import { Fancybox, Card, ButtonGradient } from '..';
import { dataStore } from '../../utils/dataStore';
import { getProjectsCount } from '../../utils';

export const Grid = ({ limit = true, section, data, gridMotion, cardMotion, buttonMotion, buttonText, ...props }) => {
  const { rows, setRows, cols, setCols, count, setCount, defaults } = dataStore((state) => ({
    rows: state[section].rows,
    setRows: state[section].setRows,
    cols: state[section].cols,
    setCols: state[section].setCols,
    count: state[section].count,
    setCount: state[section].setCount,
    defaults: state[section].defaults,
  }));

  // Checks whether or not all the projects are shown with the filter applied
  const showingAllData = () => !(data.slice(0, count).length < data.length);

  // Add more rows or return to default on button click
  const handleButtonClick = () => {
    if (!showingAllData()) setRows(rows + cols);
    else {
      setRows(defaults.rows || 3);
      setCount((defaults.cols || 2) * (defaults.rows || 3));
      topRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update projects count whenever cols or rows changes (dont make it exceed the filtered projects length)
  useEffect(() => {
    data.length && setCount(Math.min(getProjectsCount(rows, cols), data.length || Infinity));
  }, [rows, cols]);

  // Sets count when the window is resized
  useEffect(() => {
    const resize = () => {
      setCount(Math.min(getProjectsCount(rows, cols), data.length || Infinity));
    };
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className={`col-12${limit ? ' p-0-30' : ''}`}>
      <Fancybox className={`art-grid art-grid-${cols}-col art-gallery`} {...props} {...gridMotion}>
        {Array.from(limit ? data.slice(0, count) : data)
          .flat()
          .map((item, index) => (
            <Card
              key={`${section}-grid-item-${index}-${item?.title}`}
              {...item}
              section={section}
              index={index}
              swiper={false}
              hide={true}
              subtitle={null}
              classes='art-grid-item'
              {...cardMotion}
            />
          ))}
      </Fancybox>

      {limit && data.length > getProjectsCount() && (
        <ButtonGradient title={`View ${!showingAllData() ? 'More' : 'Less'}`} onClick={handleButtonClick} $position='center' {...buttonMotion} />
      )}
    </div>
  );
};
