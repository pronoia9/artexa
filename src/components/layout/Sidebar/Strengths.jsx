import { Tags } from '@/components';
import { sidebarMotion, sidebar } from '@/utils';

export const Strengths = () => {
  return <Tags data={sidebar.strengths} section='sidebar-strenghts' motion={sidebarMotion.strengths.item} className='art-strengths p-15-15 acc' {...sidebarMotion.strengths.container} />;
};
