import { Grid } from '../..';
import { dataStore } from '../../../store/dataStore';
import { technologiesMotion } from '../../../utils';

export const TechnologiesGrid = (props) => {
  const { data } = dataStore((state) => ({ data: state.technologies.list, }));

  return <Grid section='technologies' data={data} gridMotion={technologiesMotion.grid} cardMotion={technologiesMotion.card} {...props} />;
};
