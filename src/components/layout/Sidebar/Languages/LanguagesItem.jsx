import { ProgressCircle } from '../../..';

const LanguagesItem = (props) => {
  return (
    <div className='art-lang-skills-item'>
      <ProgressCircle {...props} />
      <h6>{props.language}</h6>
    </div>
  );
};
export default LanguagesItem;
