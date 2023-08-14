import { styled } from 'styled-components';

import { SectionWrapper, SectionTitle } from '../../components';
import { Tag } from '@/styles';

export default SectionWrapper(({ project }) => {
  const { title, image, categories } = project;

  return (
    <>
      <SectionTitle title={title}>
        <Tags>{categories.join(', ')}</Tags>
      </SectionTitle>

      <div className='col-lg-12'>
        <div className='art-a art-project-cover'>
          <a data-fancybox='project' href={image} className='art-portfolio-item-frame art-horizontal'>
            <img src={image} alt={title} />
            <span className='art-item-hover'>
              <i className='fas fa-expand' />
            </span>
          </a>
        </div>
      </div>
    </>
  );
});

const Tags = styled(Tag)`
  text-transform: capitalize;
`;