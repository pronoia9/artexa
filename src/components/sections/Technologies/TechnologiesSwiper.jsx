'use client';

import { Swiper } from '@/components';
import { technologiesMotion, technologies as data } from '@/utils';

export const TechnologiesSwiper = (props) => {
  return (
    <Swiper
      section='technologies'
      data={data.list}
      navProps={technologiesMotion.navigation}
      autoplay={true}
      {...technologiesMotion.swiper}
      {...props}
    />
  );
};
