export default function TechnologiesCard({ item, message }) {
  const { id, filters, url, title, tags, images, overview } = item;
  return id && filters && url && title.length && tags && images ? (
    <div className='art-a art-blog-card'>
      {/* post cover */}
      <a data-fancybox='posts' href={process.env.PUBLIC_URL + images[0]} className='art-port-cover'>
        <img src={process.env.PUBLIC_URL + images[0]} alt='post' />
      </a>

      {/* post description */}
      <div className='art-post-description'>
        {/* title */}
        <a href={url} target='_blank' rel='noreferrer'>
          <h5 className='mb-15'>{title}</h5>
        </a>
        {/* text */}
        <div className='mb-15'>{overview}</div>
        {/* link */}
        <a href={url} className='art-link art-color-link art-w-chevron' target='_blank' rel='noreferrer'>
          {message}
        </a>
      </div>
    </div>
  ) : (
    <></>
  );
}