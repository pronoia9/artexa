import { Profile, About, Languages, HardSkills, SoftSkills, Strengths, Resume, Social } from '.';
import { dataStore } from '../../../store/dataStore';

const Sidebar = () => {
  const { sidebarOpen, toggleSidebar } = dataStore((state) => ({ sidebarOpen: state.sidebarOpen, toggleSidebar: state.toggleSidebar }));

  return (
    <div className={`art-info-bar${sidebarOpen ? ' art-active' : ''}`}>
      <div className='art-info-bar-frame'>
        <div className='art-info-bar-header'>
          <div className='art-info-bar-btn' onClick={() => toggleSidebar()}>
            <i className='fas fa-ellipsis-v' />
          </div>
        </div>

        <Profile />

        {/* <Scrollbar id='info-bar-scrollbar' damping={0.5} plugins={{ SmoothScrollbar }}> */}
        <div id='sidebar-scrollbar' className='art-scroll-frame'>
          <div className='scroll-content'>
            <About />      <div className='art-ls-divider' />
            <Languages />  <div className='art-ls-divider' />
            <HardSkills /> <div className='art-ls-divider' />
            <SoftSkills /> <div className='art-ls-divider' />
            <Strengths />  <div className='art-ls-divider' />
            <Resume />
          </div>
        </div>
        {/* </Scrollbar> */}

        <Social />
      </div>
    </div>
  );
};
export default Sidebar;
