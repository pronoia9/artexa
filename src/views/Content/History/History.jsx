import React from 'react';

function History() {
  return (
    <div className='container-fluid'>
      <div className='row p-30-0'>
        <div className='col-lg-6'>
          <div className='art-section-title'>
            <div className='art-title-frame'>
              <h4>Education</h4>
            </div>
          </div>
          <div className='art-timeline'>
            <div className='art-timeline art-gallery'>
              {/* item here */}
            </div>
          </div>
        </div>

        <div className='col-lg-6'>
          <div className='art-section-title'>
            <div className='art-title-frame'>
              <h4>Future</h4>
            </div>
          </div>
          <div className='art-timeline'>
            <div className='art-timeline art-gallery'>{/* items here */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
