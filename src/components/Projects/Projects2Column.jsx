import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectsFilter from './ProjectsFilter';

export default function Projects3Column(props) {
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
                {props.data.filter.map((d) => {
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
          {props.data.projects.map((p) => {
            const { id, dataFilter, href, shape, title, tags, images, details, reviews } = p;
            // if we dont have a filter key, show everything
            if (!filterKey) {
              return (
                <ProjectCard
                  key={id}
                  id={id}
                  dataFilter={dataFilter}
                  href={href}
                  shape={shape}
                  title={title}
                  tags={tags}
                  images={images}
                  details={details}
                  reviews={reviews}
                />
              );
            }
            // if not, return only the items who has the filterkey property
            else if (dataFilter === filterKey) {
              return (
                <ProjectCard
                  key={id}
                  id={id}
                  dataFilter={dataFilter}
                  href={href}
                  shape={shape}
                  title={title}
                  tags={tags}
                  images={images}
                  details={details}
                  reviews={reviews}
                />
              );
            }
            return <></>;
          })}
        </div>
      </div>
    </div>
  );
}
