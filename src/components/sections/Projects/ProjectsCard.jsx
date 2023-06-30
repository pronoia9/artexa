export const ProjectsCard = ({ index, swiper, id, title, subtitle, description, link, links, image, images, year, date, categories, tags }) => {
  return (
    <div className={`art-grid-item${swiper ? ' art-project-swiper-card' : ''}`}>
      <a data-fancybox='projects' href='/favicon-16x16.png' className={'art-a art-portfolio-item-frame art-square'}>
        <img src='/favicon-16x16.png' alt='item' />
        <span className='art-item-hover'>
          <i className='fas fa-expand' />
        </span>
      </a>

      <div className='art-item-description'>
        <h5 className='mb-15'>{title}</h5>
        {!swiper && <div className='mb-15'>{subtitle}</div>}
        <div className='mb-15'>
          {[swiper ? categories : tags].flat().map((tag) => (
            <p key={`project-${title}-tags-${tag}`} className='art-tag'>
              {tag}
            </p>
          ))}
        </div>

        <a href={`/projects/${id}`} className='art-link art-color-link art-w-chevron' target='_blank' rel='noreferrer'>
          Read More
        </a>
      </div>
    </div>
  );
};
