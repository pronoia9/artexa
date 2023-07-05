import { SectionWrapper } from '..';

export const Logos = SectionWrapper(
  ({ logos }) => (
    <>
      {logos.map((logo, index) => (
        <Logo key={`${index}-logo`} image={logo} />
      ))}
    </>
  ),
  'logos'
);

export const Logo = ({ image }) => (
  <div className='col-6 col-lg-3'>
    <img className='art-brand' src={image} alt='warning' />
  </div>
);
