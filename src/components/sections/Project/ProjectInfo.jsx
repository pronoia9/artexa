'use client';

import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { SectionWrapper, SectionTitle, ButtonLink, Tags, SplitText, SVGs } from '@/components';
import { projectMotion, rem } from '@/utils';

const ListItem = ({ title, subtitle }) => (
  <ListItemContainer {...projectMotion.info.listItem}>
    <h6>
      <SplitText>{title}</SplitText>
    </h6>
    <motion.span {...projectMotion.info.subtitle}>{subtitle}</motion.span>
  </ListItemContainer>
);

export default SectionWrapper(({ project }) => {
  const { id, title, subtitle, description, links, image, dates, categories, tags } = project;

  return (
    <>
      <SectionTitle title='Project Details' />

      <motion.div className='col-lg-8' {...projectMotion.info.description}>
        <div className='art-a art-card art-fluid-card'>
          <DescriptionTitle className='mb-15'>Description</DescriptionTitle>
          {description && <p className='mb-15'>{description}</p>}
          {tags?.length && <Tags data={tags} section='project' className='art-tags' />}
        </div>
      </motion.div>

      <motion.div className='col-lg-4' {...projectMotion.info.dates}>
        <motion.div className='art-a art-card'>
          <div className='art-table p-15-15'>
            <ul>
              <ListItem key={`project-${title}-info-1`} title='Date Started:' subtitle={dates[0]} />
              {dates[1] && <ListItem key={`project-${title}-info-2`} title='Date Completed:' subtitle={dates[1]} />}
              <ListItem key={`project-${title}-info-3`} title='Status:' subtitle={!dates[1] ? 'Ongoing' : 'Complete'} />
            </ul>
          </div>

          <Links {...projectMotion.info.links}>
            {links?.repo.length && (
              <ButtonLink title='Repository' link={links.repo} arrow={false} {...projectMotion.info.link}>
                <SVGs type='github-repo' height={16} {...projectMotion.info.icon} />
              </ButtonLink>
            )}
            {links?.live.length && (
              <ButtonLink title='Live Site' link={links.live} arrow={false} {...projectMotion.info.link}>
                <SVGs type='globe' height={16} {...projectMotion.info.icon} />
              </ButtonLink>
            )}
          </Links>
        </motion.div>
      </motion.div>
    </>
  );
});

const DescriptionTitle = styled.h5`
  font-family: var(--f-primary);
`;

// const Description = styled.p``;

// const TagsContainer = styled.div``;

const Links = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    color: var(--c-accent-1);
    gap: 0.75rem;

    &:hover {
      svg {
        transform: scale(1.2) !important;
      }
    }
  }

  @media (max-width: 991px) {
    flex-direction: row;
    gap: 2rem;

    a {
      flex-direction: row-reverse !important;
    }
  }
`;

// const ListContainer = styled(motion.ul)``;

const ListItemContainer = styled(motion.li)`
  display: flex;
  flex-direction: row;
  align-items: center;

  h6 {
    font-family: var(--f-primary);
    font-size: ${rem(14)};
  }
`;
