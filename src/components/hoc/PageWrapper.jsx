import { styled } from 'styled-components';
import { motion } from 'framer-motion';

const PageWrapper = (Component, idName) =>
  function HOC(props) {
    return (
      <div id={idName}>
        <Component {...props} />
      </div>
    );
  };
export default PageWrapper;
