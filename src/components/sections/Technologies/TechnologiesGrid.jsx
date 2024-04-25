'use client';

import { Grid } from '@/components';
import { technologies as data } from '@/data';
import { technologiesMotion } from '@/utils';

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
