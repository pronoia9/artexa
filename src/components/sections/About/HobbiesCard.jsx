export const HobbiesCard = ({ title, image }) => {
  return (
    <div className={'art-a art-hobbies-item-frame'}>
      <a data-fancybox='hobbies' href={image} className={'art-a art-hobbies-item-frame art-horizontal'}>
        <img src={image} alt={title} />
        <span className='art-item-hover'>
          <i className='fas fa-expand' />
        </span>
      </a>
    </div>
  );
};
