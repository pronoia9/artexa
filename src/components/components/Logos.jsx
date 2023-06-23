export default function Logos({ logos }) {
  return (
    <div className='container-fluid'>
      <div className='row'>
        {logos.map((logo, index) => (
          <Logo key={`${index}-logo`} image={logo} />
        ))}
      </div>
    </div>
  );
}

export const Logo = ({ image }) => (
  <div className='col-6 col-lg-3'>
    <img className='art-brand' src={image} alt='warning' />
  </div>
);
