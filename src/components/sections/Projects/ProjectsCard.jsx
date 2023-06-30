import { Link } from 'react-router-dom';

import { styled } from 'styled-components';
import { Card } from '../..';

export const ProjectsCard = ({ index, swiper, id, title, subtitle, description, link, links, image, images, year, date, categories, tags }) => {
  return (
    <>
      <Card title={title} link={`/projects/${id}`}>
        <TagsContainer className='mb-15'>
          {[swiper ? categories : tags].flat().map((tag) => (
            <p key={`project-${title}-tags-${tag}`} className='art-tag'>
              {tag}
            </p>
          ))}
        </TagsContainer>
      </Card>
    </>
  );
};

const TagsContainer = styled.div`
  min-height: 58px;  /* 2 lines */
`;
