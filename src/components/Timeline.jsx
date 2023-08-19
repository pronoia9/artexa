'use client';

import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { SectionTitle, ButtonLink } from '@/components';
import { Tag } from '@/styles';
import { historyMotion, rem } from '@/utils';

export const Timeline = ({ titles, children, ...props }) => {
  return <></>;
  return children ? (
    children.map((tl, index) => (
      <TimelineColumn column={children.length || 2} title={titles[index] || ''} key={`timeline-column-${index}`} data={tl} index={index} />
    ))
  ) : (
    <TimelineColumn {...props} /> // column={column || 2} title={title || ''} key={`timeline-column-${index}`} data={data}
  );
};

export const TimelineColumn = ({ column = 1, title = '', data = [], index }) => <></> || (
  <motion.div className={'col-lg-' + 12 / column} {...historyMotion.column(index % 2)}>
    <SectionTitle title={title} />
    <TimelineColumnContainer className='art-timeline' {...historyMotion.cards}>
      {data.map((item, index) => (
        <TimelineItem key={`timeline-item-${index}-${item?.title}`} {...item} {...historyMotion.card} />
      ))}
    </TimelineColumnContainer>
  </motion.div>
);

const TimelineColumnContainer = styled(motion.div)`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    right: 5px;
    width: 5px;
    height: calc(100% - 10px);
    background: var(--c-bg);
  }
`;

export const TimelineItem = (props) => {
  return <></>;
  const { id, title, subtitle, description, dates, image, link } = props;

  if (dates) {
    dates[0] = new Date(dates[0] || '')?.toLocaleDateString('en-us', { year: 'numeric', month: 'short' }) || '';
    dates[1] = dates[1]
      ? dates[1] === 'Ongoing'
        ? 'Ongoing'
        : new Date(dates[1]).toLocaleDateString('en-us', { year: 'numeric', month: 'short' })
      : '';
  }

  return (
    <TimelineItemContainer className='art-timeline-item acc' {...props}>
      <div className='art-timeline-mark-light' />
      <div className='art-timeline-mark' />

      <TimelineItemContent className='art-a art-timeline-content'>
        <Header className='art-card-header'>
          <div className='art-left-side'>
            <Title>{title}</Title>
            <Subtitle className='mb-15'>{subtitle}</Subtitle>
          </div>

          {dates?.length && (
            <div className='art-right-side'>
              <Dates className='art-date'>{`${dates[0]}${dates[1] && dates[0] !== dates[1] ? ` - ${dates[1]}` : ''}`}</Dates>
            </div>
          )}
        </Header>

        <p>{description}</p>

        <ButtonLink
          link={link || image}
          title={link ? 'Link' : image ? 'Certificate' : 'Suprise!'}
          {...(image ? { 'data-fancybox': 'history' } : { target: '_blank', rel: 'noreferrer' })}
        />
      </TimelineItemContent>
    </TimelineItemContainer>
  );
};

const TimelineItemContainer = styled(motion.div)`
  position: relative;

  .art-timeline-mark-light {
    position: absolute;
    top: ${rem(4)};
    right: ${rem(-4)};
    width: ${rem(23)};
    height: ${rem(23)};
    background: var(--c-font-2);
    border-radius: 50%;
    opacity: 0;
    transition: 0.4s ease-in-out;
  }

  .art-timeline-mark {
    position: absolute;
    top: ${rem(8)};
    right: 0;
    width: ${rem(15)};
    height: ${rem(15)};
    border-radius: 50%;
    border: solid ${rem(3)} var(--c-accent-1);
    background: var(--c-bg-menu-1);
    box-shadow: 0 ${rem(3)} ${rem(8)} 0 var(--c-box-shadow);
  }

  &:hover .art-timeline-mark-light {
    animation: puls 1s infinite;
  }
`;

const TimelineItemContent = styled.div`
  position: relative;
  margin-right: ${rem(45)};
  background: var(--c-bg-card-overlay);
  padding: ${rem(30)};
  margin-bottom: ${rem(30)};
  box-shadow: 0 ${rem(3)} ${rem(8)} 0 var(--c-box-shadow);
  transition: 0.5s ease-in-out;

  &:hover {
    opacity: 0.9;
    transform: scale(1.01);
    transform-origin: right top;
    transition: transform 0.5s ease-in-out;
  }

  &:after {
    height: ${rem(10)};
    width: ${rem(10)};
    background-color: var(--c-bg-2);
    transform: rotate(-135deg);
    content: '';
    position: absolute;
    top: ${rem(11)};
    right: ${rem(-5)};
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
  margin-top: ${rem(10)};
  font-size: ${rem(14)};
  font-family: var(--f-code);
  color: var(--c-font-3);
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
  padding: ${rem(5)} ${rem(15)};
  border-radius: ${rem(15)};
  box-shadow: inset 0 ${rem(3)} ${rem(8)} 0 var(--c-box-shadow);
  font-size: ${rem(10)};
`;
