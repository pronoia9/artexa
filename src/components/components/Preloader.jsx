import { motion } from "framer-motion";
import { styled } from "styled-components";
import { Progressbar } from "./Progressbar";

export const Preloader = () => {
  return (
    <Container id='art-preloader' className='art-preloader'>
      <div className='art-preloader-content'>
        <h1>Welcome</h1>
        <Progressbar type='preloader' level={100} />
      </div>
    </Container>
  );
};

const Container = styled(motion.div)`
  margin: 15px;
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100vw - 30px);
  height: calc(100vh - 30px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--c-font-4);
  z-index: 999999;

  .art-preloader-content {
    margin-bottom: 15px;
    text-align: center;
  }

  @media (max-width: 920px) {
    margin: 0;
    width: 100vw;
    height: 100vh;
  }
`;