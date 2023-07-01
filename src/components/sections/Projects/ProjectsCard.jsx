import { styled } from 'styled-components';

import { Card } from '../..';
import { Tag } from '../../../styles';

export const ProjectsCard = (props) => {
  const { index, swiper, id, title, subtitle, description, link, links, image, images, year, date, categories, tags } = props;
  return (
    <>
      <Card {...props} subtitle={null} section='projects'>
        <TagsContainer className='mb-15'>
          {[swiper ? categories : tags].flat().map((tag) => (
            <Tag key={`project-${title}-tags-${tag}`} className='art-tag'>
              {tag}
            </Tag>
          ))}
        </TagsContainer>
      </Card>
    </>
  );
};

const TagsContainer = styled.div`
  height: calc(58px); /* 2 lines */
  overflow: hidden;

  p {
    background: var(--c-bg-menu-2);
  }
`;
