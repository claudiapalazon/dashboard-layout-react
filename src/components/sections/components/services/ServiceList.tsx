import { ServiceItem } from "./ServiceItem";
import { Service } from "../../../../data/services";

export const ServiceList = ({ services }: { services: Service[] }) => {
  return (
    <div className="services-container">
      {services.map((service, serviceIndex) => (
        <ServiceItem
          key={service.title}
          service={service}
          serviceIndex={serviceIndex}
        />
      ))}
    </div>
  );
};
