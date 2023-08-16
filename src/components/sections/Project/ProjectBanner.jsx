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
          <Frame data-fancybox='project' href={image} className='art-portfolio-item-frame art-horizontal'>
            <img src={image} alt={title} />
            <HoverExpand />
          </Frame>
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

const Frame = styled.a`
  position: relative;
  width: 100%;
  display: block;
  padding-bottom: 60%;
  outline: inherit;
  box-shadow: 0 3px 8px 0 var(--c-box-shadow);
  overflow: hidden;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    object-position: center;
    filter: brightness(85%) blur(0);
    transition: 0.4s ease-in-out;
  }

  &:hover {
    img {
      transform: scale(1.07);
      filter: brightness(100%) blur(0);
    }
  }
`;
