import { SectionWrapper, SectionTitle, HoverExpand } from '@/components';
import { Tag } from '@/styles';
import { styled } from 'styled-components';

export default SectionWrapper(({ project }) => {
  const { title, image, categories } = project;

  return (
    <>
      <SectionTitle title={title}>
        <Tag>{categories.join(', ')}</Tag>
      </SectionTitle>

      <div className='col-lg-12'>
        <Wrapper className='art-a art-project-cover'>
          <a data-fancybox='project' href={image} className='art-portfolio-item-frame art-horizontal'>
            <img src={image} alt={title} />
            <HoverExpand />
          </a>
        </Wrapper>
      </div>
    </>
  );
});

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 30px;
  box-shadow: 0 3px 8px 0 var(--c-box-shadow);
  overflow: hidden;
`;
