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

  p {
    display: inline-block;
    color: var(--c-font-1);
    background: var(--c-bg);
    padding: 3px 12px;
    border-radius: 15px;
    box-shadow: inset 0 3px 8px 0 var(--c-box-shadow);
    font-size: 10px;
    margin: 0 5px 5px 0;
  }
`;
