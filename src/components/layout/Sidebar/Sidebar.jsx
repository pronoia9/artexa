import { styled } from 'styled-components';
import { Profile, About, Languages, HardSkills, SoftSkills, Strengths, Resume, Social } from '.';
import { dataStore } from '../../../store/dataStore';

const Sidebar = () => {
  const { sidebarOpen, toggleSidebar } = dataStore((state) => ({ sidebarOpen: state.sidebarOpen, toggleSidebar: state.toggleSidebar }));

  return (
    <Container className='art-info-bar' active={`${sidebarOpen}`}>
      <Wrapper className='art-info-bar-frame'>
        <MobileHeader className='art-info-bar-header' active={`${sidebarOpen}`}>
          <div className='art-info-bar-btn' onClick={() => toggleSidebar()}>
            <i className='fas fa-ellipsis-v' />
          </div>
        </MobileHeader>

        <Profile />

        {/* <Scrollbar id='info-bar-scrollbar' damping={0.5} plugins={{ SmoothScrollbar }}> */}
        <ScrollFrame id='sidebar-scrollbar' className='art-scroll-frame'>
          <ScrollContent className='scroll-content'>
            <About /> <div className='art-ls-divider' />
            <Languages /> <div className='art-ls-divider' />
            <HardSkills /> <div className='art-ls-divider' />
            <SoftSkills /> <div className='art-ls-divider' />
            <Strengths /> <div className='art-ls-divider' />
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
  position: relative;
  width: 290px;
  min-width: 290px;
  height: calc(100vh - 30px);
  padding: 0 15px;
  background: var(--c-font-4);
  box-shadow: 0 3px 8px 0 var(--c-box-shadow);
  z-index: 999;
  transition: 0.55s ease-in-out;

  @media (max-width: 920px) {
    position: absolute;
    left: -290px;
    width: 290px;
    height: 100vh;
    transform: ${({ active }) => active === 'true' && 'translateX(290px)'};
  }

  @media (max-width: 290px) {
    width: 100vw;
  }
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

  @media (max-width: 920px) {
    display: flex;

    .art-info-bar-btn {
      transform: ${({ active }) => (active === 'true' ? 'translateX(0)' : 'translateX(70px)')};
      transition: 0.4s ease-in-out;
    }
  }
`;

const ScrollFrame = styled.div``;

const ScrollContent = styled.div`
  padding: 240px 0 50px;
`;
