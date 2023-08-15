'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { ProjectBanner, ProjectInfo, ProjectScreenshots } from '@/components';
import { projects } from '@/utils';

export default function Page() {
  const router = useRouter(), pathname = usePathname();
  const data = projects.projects.find((prj) => prj.id === pathname.split('/')[2]);

  // TODO: find a way to return to prev page not /projects (ex: if clicked on the home page...?)
  useEffect(() => { !data && router.push('/projects'); }, []);

  return (
    <>
      <ProjectBanner project={data} />
      <ProjectInfo project={data} />
      {data?.images?.length && <ProjectScreenshots {...data} />}
    </>
  );
}
