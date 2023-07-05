import { PageWrapper, SectionWrapper } from '..';

export default PageWrapper(
  SectionWrapper(() => {
    return <div>NotFound</div>;
  }, 'notfound')
);
