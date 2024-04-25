'use client';

import { Swiper } from '@/components';
import { technologies as data } from '@/data';
import { technologiesMotion } from '@/utils';

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
