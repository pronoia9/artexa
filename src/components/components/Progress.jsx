import { useEffect } from 'react';

import { ProgressbarInstance } from '../../utils/utils';

export default function Progress(props) {
  const { type, level, index } = props;
  if (!type || !level) return <></>;

  useEffect(() => {
    const progress = ProgressbarInstance(props);
    progress?.animate(level / 100);
    return () => { progress?.destroy(); };
  }, []);

  return <div id={`${type}prog${index}`} className={`art-${type}-progress`} />;
}
