import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectsFilter from './ProjectsFilter';

export default function ProjectsGrid(props) {
  // state for storing the filter keyword, with an initial value of null, which means no filter is applied
  const [filterKey, setFilterKey] = useState(null);

  return (
    <div className='container-fluid'>
      <div className='row p-30-0'>
        {/* title bar */}
        <div className='col-lg-12'>
          {/* section title */}
          <div className='art-section-title'>
            {/* right frame (filter options) */}
            <div className='art-right-frame'>
              <div className='art-filter'>
                {props.data.filter.map((filter) => {
                  let className = '';
                  // if the current filterkey matches the filyer types key
                  if (filterKey === filter.dataFilter) {
                    // then we're on this filter, so send something to activate it
                    className = ' art-current';
                  }
                  return (
                    <ProjectsFilter
                      key={filter.id}
                      filter={filter}
                      filterKey={filterKey}
                      setFilterKey={setFilterKey}
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
            if (!filterKey) {
              return <ProjectCard key={p.id} project={p} />;
            }
            // if the project includes the searched filter in its filters list, then display it
            else if (p.dataFilter.includes(filterKey)) {
              return <ProjectCard key={p.id} project={p} />;
            }
            return <></>;
          })}
        </div>
      </div>
    </div>
  );
}
