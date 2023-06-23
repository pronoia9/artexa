import { styled } from 'styled-components';
import { Profile, About, Languages, HardSkills, SoftSkills, Strengths, Resume, Social } from '.';
import { dataStore } from '../../../store/dataStore';

const Sidebar = () => {
  const { sidebarOpen, toggleSidebar } = dataStore((state) => ({ sidebarOpen: state.sidebarOpen, toggleSidebar: state.toggleSidebar }));

  return (
    <Container className={`art-info-bar${sidebarOpen ? ' art-active' : ''}`}>
      <Wrapper className='art-info-bar-frame'>
        <MobileHeader className='art-info-bar-header'>
          <div className='art-info-bar-btn' onClick={() => toggleSidebar()}>
            <i className='fas fa-ellipsis-v' />
          </div>
        </MobileHeader>

        <Profile />

        {/* <Scrollbar id='info-bar-scrollbar' damping={0.5} plugins={{ SmoothScrollbar }}> */}
        <ScrollFrame id='sidebar-scrollbar' className='art-scroll-frame'>
          <ScrollContent className='scroll-content'>
            <About />      <div className='art-ls-divider' />
            <Languages />  <div className='art-ls-divider' />
            <HardSkills /> <div className='art-ls-divider' />
            <SoftSkills /> <div className='art-ls-divider' />
            <Strengths />  <div className='art-ls-divider' />
            <Resume />
          </ScrollContent>
        </ScrollFrame>
        {/* </Scrollbar> */}

        <Social />
      </Wrapper>
    </Container>
  );
};
export default Sidebar;

const Container = styled.div`
  background: var(--c-font-4);
  width: 290px;
  min-width: 290px;
  height: calc(100vh - 30px);
  position: relative;
  z-index: 999;
  box-shadow: 0 3px 8px 0 var(--c-box-shadow);
  transition: 0.55s ease-in-out;
`;

const Wrapper = styled.div`
  padding: 0 15px;
`;

const MobileHeader = styled.div`
  width: 100%;
  height: 70px;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999999999999;
  display: none;

  .art-info-bar-btn {
    margin-left: auto;
    pointer-events: all;
    font-size: 14px;
    padding: 30px;

    &.art-disabled {
      opacity: 0;
      pointer-events: none;
    }
  }
`;

const ScrollFrame = styled.div``;

const ScrollContent = styled.div`
  padding: 240px 0 50px;
`;
