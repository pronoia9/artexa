import React from 'react';
import Project from '../components/Projects/Project';
import ProjectsFilter from '../components/Projects/ProjectsFilter';
import projects from '../data/projects.json';

export default function Projects() {
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

            {/* right frame (types/tags) */}
            <div className='art-right-frame'>
              <div className='art-filter'>
                {projects.filter.map((d) => {
                  const { id, category, href, dataFilter, className } = d;
                  return (
                    <ProjectsFilter
                      key={id}
                      id={id}
                      category={category}
                      href={href}
                      dataFilter={dataFilter}
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
          })}
        </div>
      </div>
    </div>
  );
}
