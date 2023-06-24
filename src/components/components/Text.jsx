export const Title = ({ title }) => (
  <div className='art-section-title'>
    <div className='art-title-frame'>
      <h4>{title}</h4>
    </div>
  </div>
);

export const SectionTitle = ({ column, title, rightTitle, rightClass }) => (
  <div className={'col-lg-' + (12 / column || 12)}>
    <div className='art-section-title'>
      <div className='art-title-frame'>
        <h4>{title}</h4>
      </div>
      {rightTitle && (
        <div className='art-right-frame'>
          <div className={rightClass}>{rightTitle}</div>
        </div>
      )}
    </div>
  </div>
);
