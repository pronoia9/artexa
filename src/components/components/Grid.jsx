import { useEffect } from 'react';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { Card, Fancybox } from '..';
import { dataStore } from '../../store/dataStore';
import { GradientButton, Tag } from '../../styles';
import { buttonMotion, getProjectsCount } from '../../utils';

export const Grid = ({ limit = true, section, data, gridMotion, cardMotion, buttonText, topRef, ...props }) => {
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
      topRef?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update projects count whenever cols or rows changes (dont make it exceed the filtered projects length)
  useEffect(() => { data.length && setCount(Math.min(getProjectsCount(rows, cols), data.length || Infinity)); }, [rows, cols]);

  // Sets count when the window is resized
  useEffect(() => {
    const resize = () => { setCount(Math.min(getProjectsCount(rows, cols), data.length || Infinity)); };
    window.addEventListener('resize', resize);
    return () => { window.removeEventListener('resize', resize); };
  }, []);

  return (
    <>
      <div ref={topRef} />
      <Fancybox className={`art-grid art-grid-${cols}-col art-gallery`} {...gridMotion} {...props}>
        {Array.from(limit ? data.slice(0, count) : data).flat().map((item, index) => (
          <Card
            key={`${section}-grid-item-${index}-${item?.title}`}
            {...item}
            index={index}
            swiper={false}
            hide={true}
            subtitle={null}
            classes='art-grid-item'
            {...cardMotion}
          >
            {section === 'projects' && <ProjectsTags {...item} />}
          </Card>
        ))}
      </Fancybox>

      {limit && data.length > getProjectsCount() && (
        <Button className='art-buttons-frame acc' onClick={handleButtonClick} {...buttonMotion.gradient}>
          View {!showingAllData() ? 'More' : 'Less'}
        </Button>
      )}
    </>
  );
};

const ProjectsTags = ({ title, tags }) => (
  <TagsContainer className='mb-15'>
    {tags?.map((tag) => (
      <Tag key={`project-${title}-tags-${tag}`} className='art-tag'>
        {tag}
      </Tag>
    ))}
  </TagsContainer>
);

const Button = styled(GradientButton)`
  text-align: center;
  display: flex;
  max-width: 200px;
  margin: 0 auto;
`;

const TagsContainer = styled(motion.div)`
  height: calc(58px); /* 2 lines */
  overflow: hidden;

  p {
    background: var(--c-bg-menu-2);
  }
`;