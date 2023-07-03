import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { Tag } from '../../../styles';
import { rem } from '../../../utils';

export const TimelineItem = (props) => {
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
    <Container className='art-timeline-item acc'>
      <div className='art-timeline-mark-light' />
      <div className='art-timeline-mark' />

      <Content className='art-a art-timeline-content'>
        <Header className='art-card-header'>
          <div className='art-left-side'>
            <Title>{title}</Title>
            <Subtitle className='art-el-suptitle mb-15'>{subtitle}</Subtitle>
          </div>

          {dates?.length && (
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

const Content = styled.div`
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
