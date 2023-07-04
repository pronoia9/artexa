import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { SectionWrapper, SectionTitle, ButtonLink } from '../../';
import { Tag } from '../../../styles';
import { rng } from '../../../utils';

const ListItem = ({ title, subtitle }) => (
  <ListItemContainer>
    <h6>{title}:</h6>
    <span>{subtitle}</span>
  </ListItemContainer>
);

export default SectionWrapper(({ project }) => {
  const { id, title, subtitle, description, links, image, year, date, dates, categories, tags, info } = project;

  return (
    <>
      <SectionTitle title='Project Details' />
      <div className='col-lg-8'>
        <div className='art-a art-card art-fluid-card'>
          <DescriptionTitle className='mb-15'>Description</DescriptionTitle>
          <Description className='mb-15'>{description}</Description>
          <Tags className='art-tags acc'>
            {tags?.map((tag, index) => (
              <Tag key={`project-${title}-tags-${index}`} $rng={rng(1, 5)}>{tag}</Tag>
            ))}
          </Tags>
        </div>
      </div>
      <div className='col-lg-4'>
        <div className='art-a art-card'>
          <div className='art-table p-15-15'>
            <ListContainer>
              {info?.map((li, index) => (
                <ListItem key={`project-${title}-info-${index}`} {...li} />
              ))}
            </ListContainer>
          </div>
          <Links className='acc'>
            {links.repo && <ButtonLink title='Repository' link={links.repo} icon='fa-brands fa-github' />}
            {links.live && <ButtonLink title='Live Site' link={links.live} icon='fa-solid fa-globe' />}
          </Links>
        </div>
      </div>
    </>
  );
});

const DescriptionTitle = styled.h5`
  font-family: var(--f-primary);
`;

const Description = styled.p``;

const Tags = styled.div`
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    color: var(--c-accent-1);
    gap: 0.75rem;

    &:hover {
      i {
        transform: scale(1.2) !important;
      }
    }
  }

  i {
    font-size: 1rem !important;
    transform: translateX(0) !important;
  }

  @media (max-width: 991px) {
    flex-direction: row;
    gap: 2rem;

    a {
      flex-direction: row-reverse !important;
    }
  }
`;

const ListContainer = styled(motion.ul)``;

const ListItemContainer = styled(motion.li)`
  h6 {
    font-family: var(--f-primary);
  }
`;
