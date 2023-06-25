import { HeroButton, HeroHeading, HeroTyped, SectionWrapper } from '../..';
import { dataStore } from '../../../store/dataStore';

const Hero = () => {
  const { data, accent } = dataStore((state) => ({ data: state.hero, accent: state.accent }));

  const beamMeUpScotty = () => {};

  return (
    <div className='row p-60-0 p-lg-30-0 p-md-15-0'>
      <div className='col-lg-12'>
        {/* Background */}
        <div className='art-a art-banner'>
          <div className='art-banner-back' />
          <div className='art-banner-dec' />

          <div className='art-banner-overlay'>
            <div className='art-banner-title'>
              <HeroHeading />
              <HeroTyped />
              <HeroButton />
            </div>

            {/* Avatar */}
            <img src='' className='art-banner-photo' alt='Banner Profile' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionWrapper(Hero, 'hero');
