import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ProjectBanner, ProjectInfo, ProjectScreenshots, Fancybox } from '@/components';
import { dataStore } from '@/utils';

export default function Page() {
  const { projectId } = useParams(), navigate = useNavigate();
  const data = dataStore((state) => state.projects.projects.find((prj) => prj.id === projectId));

  useEffect(() => { !data && navigate('/projects'); }, []);

  return (
    <Fancybox>
      <ProjectBanner project={data} />
      <ProjectInfo project={data} />
      {data?.images && <ProjectScreenshots {...data} />}
    </Fancybox>
  );
}
