import { styled } from 'styled-components';
import { useEffect } from 'react';

import { ProgressbarInstance, rem } from '../../utils';

export const Progressbar = (props) => {
  const { type, level, index } = props;
  if (!type || !level) return <></>;

  useEffect(() => {
    const progress = ProgressbarInstance(props);
    progress?.animate(level / 100);
    return () => {
      progress?.destroy();
    };
  }, []);

  return <Container id={`${type}prog${index}`} className={`art-${type}-progress`} />;
};

const Container = styled.div`
  path {
    &:first-child {
      stroke: var(--c-bg-1);
    }

    &:last-child {
      stroke: var(--c-accent-1);
    }
  }

  .progressbar-text {
    position: relative;
    left: 40% !important;
    color: var(--c-font-3) !important;
    font-size: ${rem(13)};

    &:after {
      content: '%';
      position: absolute;
      right: -1.25ch;
    }
  }

  &.art-circle-progress {
    width: 65%;
    margin: 0 auto ${rem(15)};

    &:hover path:last-child {
      transform: scale(1.01);
      transform-origin: center;
      transition: transform 0.5s;
      stroke: var(--c-accent-2);
    }
  }

  &.art-line-progress {
    width: 100%;

    .progressbar-text {
      top: ${rem(-6)} !important;
      width: 100%;
      text-align: right;

      &:after {
        right: -1.5ch;
      }
    }

    &:hover path:last-child {
      transform: scale(1.01);
      transition: right ease-in-out 1s;
      stroke: var(--c-accent-2);
    }
  }
`;
