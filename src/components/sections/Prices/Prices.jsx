'use client';

import { PricesCard, SectionTitle, SectionWrapper } from '@/components';
import { prices as data } from '@/data';

export const Prices = SectionWrapper(() => {
  return (
    <>
      <SectionTitle title={data.title} />
      {data.list.map((price, index) => (
        <PricesCard key={`prices-${index}-${price?.title}`} {...price} />
      ))}
    </>
  );
});
