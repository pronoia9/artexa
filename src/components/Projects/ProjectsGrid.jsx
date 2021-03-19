import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectsFilter from './ProjectsFilter';

export default function ProjectsGrid(props) {
  // state for storing the filter keyword, with an initial value of null, which means no filter is applied
  const [currentFilter, setCurrentFilter] = useState(null);

  return (
    <div className='container-fluid'>
      <div className='row p-30-0'>
        {/* title bar */}
        <div className='col-lg-12'>
          {/* section title */}
          <div className='art-section-title'>
            {/* title */}
            <div className='art-title-frame'>
              <h4>Projects</h4>
            </div>
            {/* right frame (filter options) */}
            <div className='art-right-frame'>
              <div className='art-filter'>
                {props.data.filter.map((filter) => {
                  let className = '';
                  // if the current filter matches, then add a class to activate its css change
                  currentFilter === filter.dataFilter && (className = ' art-current');
                  return (
                    <ProjectsFilter
                      key={filter.id}
                      filter={filter}
                      currentFilter={currentFilter}
                      setCurrentFilter={setCurrentFilter}
                      className={className}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* project items  */}
        <div className={'art-grid art-grid-' + props.column + '-col art-gallery'}>
          {props.data.projects.map((p) => {
            // if we dont have a filter key, show everything
            if (!currentFilter) {
              return <ProjectCard key={p.id} project={p} />;
            }
            // if the project includes the searched filter in its filters list, then display it
            else if (p.filters.includes(currentFilter)) {
              return <ProjectCard key={p.id} project={p} />;
            }
            return <></>;
          })}
        </div>
      </div>
    </div>
  );
}
