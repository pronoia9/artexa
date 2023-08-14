import { Grid } from '@/components';
import { technologiesMotion, technologies as data } from '@/utils';

export const TechnologiesGrid = (props) => {
  return (
    <Grid
      section='technologies'
      data={data.list}
      {...props}
      gridMotion={technologiesMotion.grid}
      cardMotion={technologiesMotion.card}
      buttonMotion={technologiesMotion.button}
    />
  );
};
