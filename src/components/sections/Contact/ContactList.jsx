import { styled } from 'styled-components';
import { SplitText } from '../../components/SplitText';
import { motion } from 'framer-motion';

export const ContactList = ({ cols, list }) => {
  return (
    <motion.div className={`col-lg-${12 / cols}`}>
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
    <motion.li>
      <h5><SplitText>{title}</SplitText>:</h5>
      <SplitText>{description}</SplitText>
    </motion.li>
  );
};

const Container = styled.div`
  padding: 30px;
  margin-bottom: 30px;
  background: var(--c-bg-card-overlay);
  box-shadow: 0 3px 8px 0 var(--c-box-shadow);

  h5 {
    font-family: var(--f-tertiary);
  }
`;
