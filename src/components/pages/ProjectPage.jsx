import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { PageWrapper, Project } from '..';
import { dataStore } from '../../store/dataStore';

export default PageWrapper(() => {
  const { projectId } = useParams();
  const data = dataStore((state) => state.projects.projects.find((prj) => prj.id === projectId));
  const navigate = useNavigate();

  useEffect(() => {
    !data && navigate('/projects');
  }, []);

  return <Project project={data} />;
}, 'single-project-page');
