'use client';

import { SectionTitle, SectionWrapper, ServicesCard } from '@/components';
import { services as data } from '@/utils';

export const Services = SectionWrapper(() => {
  return (
    <>
      <SectionTitle title={data.title} />
      {data.list.map((service, index) => (
        <ServicesCard key={`services-${index}-${service?.title}`} {...service} />
      ))}
    </>
  );
}, 'services');
