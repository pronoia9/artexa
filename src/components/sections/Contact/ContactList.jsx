import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { SplitText } from '../..';
import { contactMotion } from '../../../utils';

export const ContactList = ({ cols, list }) => {
  return (
    <motion.div className={`col-lg-${12 / cols}`} {...contactMotion.list}>
      <Container className='art-a art-card'>
        <div className='art-table p-15-15'>
          <ul>
            {list.map((info, index) => (
              <ContactListItem key={`contact-list-item-${index}`} {...info} />
            ))}
          </ul>
        </div>
      </Container>
    </motion.div>
  );
};

export const ContactListItem = ({ title, description }) => {
  return (
    <motion.li {...contactMotion.listLine}>
      <h5><SplitText>{`${title}:`}</SplitText></h5>
      <motion.span {...contactMotion.listText}>{description}</motion.span>
    </motion.li>
  );
};

const Container = styled.div`
  margin-bottom: 30px;
  
  h5 {
    font-family: var(--f-tertiary);
  }
`;
