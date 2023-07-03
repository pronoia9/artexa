import { PageWrapper, Projects } from '..';

export default PageWrapper(() => {
  return <Projects type='grid' limit={false} />;
}, 'projects-page');
