import { SwiperSlide } from 'swiper/react';

import { Swiper, Card } from '../..';
import { dataStore } from '../../../store/dataStore';
import { technologiesMotion } from '../../../utils';

export const TechnologiesSwiper = () => {
  const data = dataStore((state) => state.technologies.list);

  return (
    <Swiper section='technologies' navProps={technologiesMotion.navigation} autoplay={true} {...technologiesMotion.swiper}>
      {data.map((tech, index) => (
        <SwiperSlide key={`technologies-swiper-slide-${index}`} className='swiper-slide art-grid art-grid-3-col art-gallery'>
          <Card key={`technologies-swiper-card-${index}`} swiper={true} index={index} {...tech} motion={technologiesMotion.card} subtitle={null} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
