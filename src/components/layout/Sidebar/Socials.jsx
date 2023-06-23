import { dataStore } from '../../../store/dataStore';

export const Socials = () => {
  const data = dataStore((state) => state.sidebar.social);
  return (
    <div className='art-ls-social'>
      {data.map((social, index) => (
        <SocialsItem key={`sidebar-socials-${index}`} {...social} />
      ))}
    </div>
  );
};

export const SocialsItem = ({ id, platform, favicon, fancybox, url }) => (
  <a className={platform} href={url} target={!fancybox ? '_blank' : ''} rel={!fancybox ? 'noopener noreferrer' : ''} data-fancybox={fancybox}>
    <i className={favicon} />
  </a>
);