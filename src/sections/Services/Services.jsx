import { SectionTitle, SectionWrapper, ServicesCard } from '../../components';
import { dataStore } from '../../utils/dataStore';

export default SectionWrapper(() => {
  const services = dataStore((state) => state.services);

  return (
    <>
      <SectionTitle title={services.title} />
      {services.list.map((service, index) => (
        <ServicesCard key={`services-${index}-${service?.title}`} {...service} />
      ))}
    </>
  );
}, 'services');
