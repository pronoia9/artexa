import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { Tag } from '../../../styles';
import { rem } from '../../../utils';

export const TimelineItem = (props) => {
  const { id, title, subtitle, description, dates, image, link } = props;

  dates[0] = new Date(dates[0]).toLocaleDateString('en-us', { year: 'numeric', month: 'short' });
  dates[1] = dates[1]
    ? dates[1] === 'Ongoing'
      ? 'Ongoing'
      : new Date(dates[1]).toLocaleDateString('en-us', { year: 'numeric', month: 'short' })
    : null;

  return (
    <Container className='art-timeline-item acc'>
      <div className='art-timeline-mark-light' />
      <div className='art-timeline-mark' />

      <Content className='art-a art-timeline-content'>
        <Header className='art-card-header'>
          <div className='art-left-side'>
            <Title>{title}</Title>
            <Subtitle className='art-el-suptitle mb-15'>{subtitle}</Subtitle>
          </div>

          {dates.length && (
            <div className='art-right-side'>
              <Dates className='art-date'>{`${dates[0]}${dates[1] && dates[0] !== dates[1] ? ` - ${dates[1]}` : ''}`}</Dates>
            </div>
          )}
        </Header>

        <p>{description}</p>

        <a
          className='art-link art-color-link art-w-chevron'
          href={link || image || ''}
          {...(image ? { 'data-fancybox': 'history' } : { target: '_blank', rel: 'noreferrer' })}
        >
          {link ? 'Link' : image ? 'Certificate' : 'Suprise!'}
          <i className='fas fa-chevron-right' aria-hidden='true' />
        </a>
      </Content>
    </Container>
  );
};

const Container = styled(motion.div)`
  position: relative;

  .art-timeline-mark-light {
    background: var(--c-font-2);
    position: absolute;
    top: 4px;
    right: -4px;
    width: 23px;
    height: 23px;
    opacity: 0;
    border-radius: 50%;
    transition: 0.4s ease-in-out;
  }

  .art-timeline-mark {
    position: absolute;
    top: 8px;
    right: 0;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: solid 3px var(--c-accent-1);
    background: var(--c-font-5);
    box-shadow: 0 3px 8px 0 var(--c-box-shadow);
  }

  &:hover .art-timeline-mark-light {
    animation: puls 1s infinite;
  }
`;

const Content = styled.div`
  position: relative;
  margin-right: 45px;
  background: var(--c-bg-card-overlay);
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 3px 8px 0 var(--c-box-shadow);
  transition: 0.5s ease-in-out;

  &:hover {
    opacity: 0.9;
    transform: scale(1.01);
    transform-origin: right top;
    transition: transform 0.5s ease-in-out;
  }

  &:after {
    height: 10px;
    width: 10px;
    background-color: var(--c-bg-2);
    transform: rotate(-135deg);
    content: '';
    position: absolute;
    top: 11px;
    right: -5px;
    border-top-right-radius: 50%;
  }

  @media (max-width: 920px) {
    margin-right: 30px;
  }
`;

const Title = styled.h5`
  font-family: var(--f-primary);
`;

const Subtitle = styled.h5`
  margin-top: 10px;
  font-size: 0.85rem;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .art-right-side {
    margin-bottom: 15px;
  }
`;

const Dates = styled(Tag)`
  font-family: var(--f-primary);
  color: var(--c-font-3);
  margin-left: auto;
  padding: 5px 15px;
  border-radius: 15px;
  box-shadow: inset 0 3px 8px 0 var(--c-box-shadow);
  font-size: 10px;
`;
