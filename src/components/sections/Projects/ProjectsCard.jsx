export const ProjectsCard = ({ index, type = '', id, title, subtitle, description, link, links, image, images, year, date, categories, tags }) => {
  return (
    <div className={`art-grid-item${type ? ` ${type}` : ''}`}>
      {/* project image */}
      <a data-fancybox='projects' href={images[0]} className={'art-a art-portfolio-item-frame art-square'}>
        <img src={images[0]} alt='item' />
        <span className='art-item-hover'>
          <i className='fas fa-expand' />
        </span>
      </a>

      {/* project description */}
      <div className='art-item-description'>
        {/* title */}
        <h5 className='mb-15'>{title}</h5>
        {/* overview */}
        <div className='mb-15'>{subtitle}</div>
        {/* tags */}
        <div className='mb-15'>
          {tags.map((t) => (
            <p key={`project-${title}-tags`} className='art-tag'>
              {t}
            </p>
          ))}
        </div>

        {/* link */}
        <a href={`/projects/${id}`} className='art-link art-color-link art-w-chevron' target='_blank' rel='noreferrer'>
          Read More
        </a>
      </div>
    </div>
  );
};
