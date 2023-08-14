import { Grid } from '../..';
import { dataStore } from '../../../utils/dataStore';
import { technologiesMotion } from '../../../utils';

export const TechnologiesGrid = (props) => {
  const { data } = dataStore((state) => ({ data: state.technologies.list }));

  return (
    <Grid
      section='technologies'
      data={data}
      {...props}
      gridMotion={technologiesMotion.grid}
      cardMotion={technologiesMotion.card}
      buttonMotion={technologiesMotion.button}
    />
  );
};
