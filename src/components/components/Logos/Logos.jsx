import Logo from './Logo';

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
