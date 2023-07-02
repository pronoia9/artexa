import { useEffect, useRef } from 'react';
import { styled } from 'styled-components';

import { Card, Fancybox } from '../..';
import { dataStore } from '../../../store/dataStore';
import { GradientButton } from '../../../styles';
import { buttonMotion, getProjectsCount, technologiesMotion } from '../../../utils';

export const TechnologiesGrid = ({ limit }) => {
  const { data, rows, setRows, cols, setCols, count, setCount } = dataStore((state) => ({
    data: state.technologies.list,
    rows: state.technologies.rows,
    setRows: state.technologies.setRows,
    cols: state.technologies.cols,
    setCols: state.technologies.setCols,
    count: state.technologies.count,
    setCount: state.technologies.setCount,
  }));
  const topRef = useRef();

  // Checks whether or not all the projects are shown with the filter applied
  const showingAllProjects = () => !(data.slice(0, count).length < data.length);

  // Add more rows or return to default on button click
  const handleButtonClick = () => {
    if (!showingAllProjects()) setRows(rows + 2);
    else {
      setRows(3);
      setCount(cols * 3);
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update projects count whenever cols or rows changes (dont make it exceed the filtered projects length)
  useEffect(() => {
    data.length && setCount(Math.min(getProjectsCount(rows, cols), data.length || Infinity));
  }, [rows, cols]);

  // Sets count when the window is resized
  useEffect(() => {
    const resize = () => { setCount(Math.min(getProjectsCount(rows, cols), data.length || Infinity)); };
    window.addEventListener('resize', resize);
    return () => { window.removeEventListener('resize', resize); };
  }, []);

  return (
    <>
      <Fancybox className={`art-grid art-grid-${cols}-col art-gallery`} {...technologiesMotion.grid}>
        {Array.from(limit ? data.slice(0, count) : data)
          .flat()
          .map((tech, index) => (
            <Card
              key={`technologies-grid-item-${index}`}
              index={index}
              hide={true}
              classes='art-grid-item'
              {...tech}
              {...technologiesMotion.card}
            />
          ))}
      </Fancybox>

      {limit && data.length > getProjectsCount() && (
        <Button className='art-buttons-frame acc' onClick={handleButtonClick} {...buttonMotion.gradient}>
          View {!showingAllProjects() ? 'More' : 'Less'}
        </Button>
      )}
    </>
  );
};

const Button = styled(GradientButton)`
  text-align: center;
  display: flex;
  max-width: 200px;
  margin: 0 auto;
`;
