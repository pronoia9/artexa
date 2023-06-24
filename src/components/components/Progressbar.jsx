import { useEffect } from 'react';

import { ProgressbarInstance } from '../../utils/utils';
import { styled } from 'styled-components';

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
  .progressbar-text {
    position: relative;
    left: 45% !important;
    font-size: 11px;
    color: var(--c-font-1) !important;

    &:after {
      content: '%';
      position: absolute;
      right: -7px;
    }
  }

  &.art-circle-progress {
    width: 65%;
    margin: 0 auto 15px;
  }

  &.art-line-progress {
    width: 100%;

    .progressbar-text {
      top: -6px !important;
      width: 100%;
      text-align: right;
      color: var(--c-font-3) !important;
    }
  }
`;
