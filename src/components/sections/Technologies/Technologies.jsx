import { useRef } from 'react';

import { SectionWrapper, SectionTitle, TechnologiesGrid, TechnologiesSwiper } from '../..';

export default SectionWrapper(({ type = 'swiper', ...props }) => {
  const ref = useRef(null);

  return (
    <>
      <SectionTitle title='Techolonies' ref={ref} />
      {type === 'grid' && <TechnologiesGrid {...props} />}
      {type === 'swiper' && <TechnologiesSwiper {...props} />}
    </>
  );
}, 'technologies');
