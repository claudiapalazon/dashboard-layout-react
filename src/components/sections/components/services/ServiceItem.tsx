import { ServiceDetail } from "./ServiceDetail";
import { useToggle } from "../../../../hooks/useToggle";
import { Service } from "../../../../data/services";

export const ServiceItem = ({
  service,
  serviceIndex,
}: {
  service: Service;
  serviceIndex: number;
}) => {
  const { isOpen, toggle } = useToggle();

  return (
    <div>
      <div className="service-header" onClick={toggle}>
        <span
          className={`service-title ${
            isOpen ? "body-semibold-16" : "body-regular-16"
          }`}
        >
          <img
            className="service-title-icon"
            src={`${import.meta.env.BASE_URL}icons/${service.icon}.svg`}
            alt=""
          />
          {service.title}
        </span>
        <i className={`fa fa-chevron-${isOpen ? "down" : "right"}`} />
      </div>
      {isOpen && <ServiceDetail services={service.services} />}
    </div>
  );
};
