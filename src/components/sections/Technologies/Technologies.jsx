import { SectionWrapper, SectionTitle, TechnologiesGrid, TechnologiesSwiper } from '../..';

export const Technologies = ({ type = 'swiper', limit, ...props }) => {
  return (
    <>
      <SectionTitle title='Techolonies' />
      {type === 'grid' && <TechnologiesGrid limit={limit} {...props} />}
      {type === 'swiper' && <TechnologiesSwiper {...props} />}
    </>
  );
};
export default SectionWrapper(Technologies, 'technologies');
