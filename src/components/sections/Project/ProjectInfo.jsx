import { styled } from 'styled-components';
import { SectionWrapper, SectionTitle, ButtonLink } from '../../';

export default SectionWrapper(({ project }) => {
  const { id, title, subtitle, description, links, image, year, date, categories, tags, info } = project;

  return (
    <>
      <SectionTitle title='Project Details' />
      <div className='col-lg-8'>
        <div className='art-a art-card art-fluid-card'>
          <DescriptionTitle className='mb-15'>Description</DescriptionTitle>
          <Description className='mb-15'>{description}</Description>
          <Links className='acc'>
            {links.repo && <ButtonLink title='Repository' link={links.repo} icon='fa-brands fa-github' />}
            {links.live && <ButtonLink title='Live Site' link={links.live} icon='fa-solid fa-globe' />}
          </Links>
        </div>
      </div>
      <div className='col-lg-4'>
        <div className='art-a art-card'>
          <div className='art-table p-15-15'>
            <ul>
              <li>
                <h6>Order Date:</h6>
                <span>24.12.2019</span>
              </li>
              <li>
                <h6>Final Date:</h6>
                <span>12.03.2020</span>
              </li>
              <li>
                <h6>Status:</h6>
                <span>Completed</span>
              </li>
              <li>
                <h6>Client:</h6>
                <span>Envato Market</span>
              </li>
              <li>
                <h6>Location:</h6>
                <span>Ukraine, Lviv</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
});

const DescriptionTitle = styled.h5`
  font-family: var(--f-primary);
`;

const Description = styled.p``;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  a {
    color: var(--c-accent-1);
    flex-direction: row-reverse !important;
    gap: 1rem;
  }

  i {
    font-size: 1rem !important;
  }
`;
