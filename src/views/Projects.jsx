import React, { useState } from 'react';
import Project from '../components/Projects/Project';
import ProjectsFilter from '../components/Projects/ProjectsFilter';
import projects from '../data/projects.json';

export default function Projects() {
  // state for storing the filter keyword, with an initial value of null, which means no filter is applied
  const [filterKey, setFilterKey] = useState(null);

  return (
    <div className='container-fluid'>
      <div className='row p-30-0'>
        {/* title bar */}
        <div className='col-lg-12'>
          {/* section title */}
          <div className='art-section-title'>
            {/* title frame */}
            <div className='art-title-frame'>
              <h4>Projects</h4>
            </div>
            {/* right frame (filter options) */}
            <div className='art-right-frame'>
              <div className='art-filter'>
                {projects.filter.map((d) => {
                  const { id, category, dataFilter } = d;
                  let className = '';
                  // if the current filterkey matches the filyer types key
                  if (filterKey === dataFilter) {
                    // then we're on this filter, so send something to activate it
                    className = ' art-current';
                  }
                  return (
                    <ProjectsFilter
                      key={id}
                      id={id}
                      category={category}
                      dataFilter={dataFilter}
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
        <div className='art-grid art-grid-3-col art-gallery'>
          {projects.projects.map((p) => {
            const { id, dataFilter, href, shape, title, overview, images, details, reviews } = p;
            // if we dont have a filter key, show everything
            if (!filterKey) {
              return (
                <Project
                  key={id}
                  id={id}
                  dataFilter={dataFilter}
                  href={href}
                  shape={shape}
                  title={title}
                  overview={overview}
                  images={images}
                  details={details}
                  reviews={reviews}
                />
              );
            }
            // if not, return only the items who has the filterkey property
            else if (dataFilter === filterKey) {
              return (
                <Project
                  key={id}
                  id={id}
                  dataFilter={dataFilter}
                  href={href}
                  shape={shape}
                  title={title}
                  overview={overview}
                  images={images}
                  details={details}
                  reviews={reviews}
                />
              );
            } else {
              console.log('Error with filtering projects (It\'s possible no projects were found under this filter).');
            }
          })}
        </div>
      </div>
    </div>
  );
}
