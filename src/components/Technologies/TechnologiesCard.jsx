export default function TechnologiesCard(props) {
  return (
    <div className='art-a art-blog-card'>
      {/* post cover */}
      <a data-fancybox='posts' href={process.env.PUBLIC_URL + props.post.image} className='art-port-cover'>
        <img src={process.env.PUBLIC_URL + props.post.image} alt='post' />
      </a>

      {/* post description */}
      <div className='art-post-description'>
        {/* title */}
        <a href={props.post.url} target='_blank' rel='noreferrer'>
          <h5 className='mb-15'>{props.post.title}</h5>
        </a>
        {/* text */}
        <div className='mb-15'>{props.post.overview}</div>
        {/* link */}
        <a href={props.post.url} className='art-link art-color-link art-w-chevron' target='_blank' rel='noreferrer'>
          {props.message}
        </a>
      </div>
    </div>
  );
}