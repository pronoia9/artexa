import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { Card, Fancybox } from '..';
import { GradientButton, Tag } from '../../styles';

export const Grid = ({ cols, section, data, gridMotion, cardMotion, buttonText, ...props }) => {
  return (
    <>
      <Fancybox className={`art-grid art-grid-${cols}-col art-gallery`} {...gridMotion} {...props}>
        {data?.map((item, index) => (
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

const TagsContainer = styled(motion.div)`
  height: calc(58px); /* 2 lines */
  overflow: hidden;

  p {
    background: var(--c-bg-menu-2);
  }
`;

const Button = styled(GradientButton)`
  text-align: center;
  display: flex;
  max-width: 200px;
  margin: 0 auto;
`;
