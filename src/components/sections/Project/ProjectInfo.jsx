import { SectionWrapper } from '../../';

export default SectionWrapper(({ project }) => {
  const { id, title, subtitle, description, links, image, year, date, categories, tags, info } = project;
  
  return (
    <>
      <SectionTitle title='Project Details' />
      <div class='col-lg-8'>
        <div class='art-a art-card art-fluid-card'>
          <h5 class='mb-15'>Description</h5>
          <div class='mb-15'>{description}</div>

          <div class='art-buttons-frame'>
            <a href='https://www.behance.net/gallery/83236527/VIE' class='art-link art-color-link art-w-chevron' target='_blank'>
              Read More
            </a>
          </div>
        </div>
      </div>
      <div class='col-lg-4'>
        <div class='art-a art-card'>
          <div class='art-table p-15-15'>
            <ul>
              <li>
                <h6>Order Date:</h6>
                <span>24.12.2019</span>
              </li>
              <li>
                <h6>Final Date:</h6>
                <span>12.03.2020</span>
              </li>
              <li>
                <h6>Status:</h6>
                <span>Completed</span>
              </li>
              <li>
                <h6>Client:</h6>
                <span>Envato Market</span>
              </li>
              <li>
                <h6>Location:</h6>
                <span>Ukraine, Lviv</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
});
