import { Swiper } from '../../components';
import { dataStore } from '../../utils/dataStore';
import { technologiesMotion } from '../../utils';

export const TechnologiesSwiper = (props) => {
  const data = dataStore((state) => state.technologies.list);

  return (
    <Swiper section='technologies' data={data} navProps={technologiesMotion.navigation} autoplay={true} {...technologiesMotion.swiper} {...props} />
  );
};
