import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { PageWrapper, ProjectBanner, ProjectInfo, ProjectScreenshots } from '..';
import { dataStore } from '../../store/dataStore';

export default PageWrapper(() => {
  const { projectId } = useParams(), navigate = useNavigate();
  const data = dataStore((state) => state.projects.projects.find((prj) => prj.id === projectId));

  useEffect(() => {
    !data && navigate('/projects');
  }, []);

  return (
    <>
      <ProjectBanner project={data} />
      <ProjectInfo project={data} />
      <ProjectScreenshots project={data} />
    </>
  );
}, 'single-project-page');
