import { useEffect } from 'react';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { ProgressbarInstance, rem } from '../../utils';

export const Progressbar = (props) => {
  const { type, level, index } = props;
  if (!type || !level) return <></>;

  useEffect(() => {
    const progress = ProgressbarInstance(props);
    progress?.animate(level / 100);
    return () => { progress?.destroy(); };
  }, []);

  return <Container {...props} id={`${type}prog${index}`} className={`art-${type}-progress`} />;
};

const Container = styled(motion.div)`
  path {
    &:first-child {
      stroke: var(--c-bg);
    }

    &:last-child {
      stroke: var(--c-accent-1);
    }
  }

  .progressbar-text {
    position: relative;
    color: var(--c-font-3) !important;
    font-size: ${rem(13)};
  }

  &:hover path:last-child {
    transform: scale(1.01);
    stroke: var(--c-accent-2);
    transition: transform 0.5s;
  }

  &.art-circle-progress {
    width: 65%;
    margin: 0 auto ${rem(15)};

    &:hover path:last-child {
      transform-origin: center;
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
      transition: right ease-in-out 1s;
    }
  }

  &.art-preloader-progress {
    margin-top: ${rem(5)};
    width: ${rem(200)};

    .progressbar-text {
      left: 50% !important;
      height: ${rem(300)};
      line-height: ${rem(350)};
    }
  }
`;
