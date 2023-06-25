import { styled } from 'styled-components';
import { HeroButton, HeroHeading, HeroTyped, SectionWrapper } from '../..';
import { dataStore } from '../../../store/dataStore';

const Hero = () => {
  const { data, accent } = dataStore((state) => ({ data: state.hero, accent: state.accent }));

  const beamMeUpScotty = (e) => {
    e.preventDefault();
  };

  return (
    <div className='row p-60-0 p-lg-30-0 p-md-15-0'>
      <div className='col-lg-12'>
        {/* Background */}
        <Banner className='art-a art-banner' $accent={accent}>
          <div className='art-banner-back' />
          <div className='art-banner-dec' />

          <Overlay className='art-banner-overlay'>
            <Title className='art-banner-title'>
              <HeroHeading />
              <HeroTyped />
              <HeroButton handleClick={beamMeUpScotty} />
            </Title>

            <Avatar src={data.avatar} className='art-banner-photo' alt='Banner Profile' />
          </Overlay>
        </Banner>
      </div>
    </div>
  );
};
export default SectionWrapper(Hero, 'hero');

const Banner = styled.div`
  transition: 0.55s ease-in-out;
  background: ${({ $accent = 'pastels' }) => `url('src/assets/hero/bg-${$accent}.jpg')`};
  background-size: cover;
  background-position: center;
  position: relative;
  box-shadow: 0 3px 8px 0 var(--c-box-shadow);
  z-index: 999;
  isolation: isolate;

  .art-banner-back {
    content: '';
    position: absolute;
    z-index: 0;
    top: -30px;
    width: 90%;
    height: 30px;
    margin-left: 5%;
    box-shadow: 0 3px 8px 0 var(--c-box-shadow);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background: var(--c-bg-banner-back);
  }

  @media (max-width: 1400px) {
    .art-banner-back {
      display: none;
    }
  }
`;

const Overlay = styled.div`
  position: relative;
  display: flex;
  padding: 60px;
  width: 100%;
  background-image: linear-gradient(90deg, rgba(45, 45, 58, 0.9) 15%, rgba(45, 45, 58, 0.7) 50%, rgba(43, 43, 53, 0.7) 100%);
`;

const Title = styled.div`
  width: 100%;
  align-self: center;
`;

const Avatar = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 390px;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.15);
    transform-origin: right bottom;
    transition: transform 0.5s;
  }

  @media (max-width: 1600px) {
    width: 360px;
  }

  @media (max-width: 1400px) {
    width: 320px;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;
