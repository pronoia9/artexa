import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { PageWrapper, ProjectBanner, ProjectInfo, ProjectScreenshots, Fancybox } from '..';
import { dataStore } from '../../store/dataStore';

export default PageWrapper(() => {
  const { projectId } = useParams(), navigate = useNavigate();
  const data = dataStore((state) => state.projects.projects.find((prj) => prj.id === projectId));

  useEffect(() => {
    !data && navigate('/projects');
  }, []);

  return (
    <Fancybox>
      <ProjectBanner project={data} />
      <ProjectInfo project={data} />
      {data?.images && <ProjectScreenshots images={images} />}
    </Fancybox>
  );
}, 'single-project-page');
