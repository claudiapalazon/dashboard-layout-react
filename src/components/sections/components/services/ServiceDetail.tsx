import { useToggle } from "../../../../hooks/useToggle";
import { formatDuration } from "../../../../utils/formatters/durationFormatter";
import { ServiceDetail as ServiceDetailType } from "../../../../data/services";

export const ServiceDetail = ({
  services,
}: {
  services: ServiceDetailType[];
}) => {
  const { isOpen, toggle } = useToggle();

  return (
    <div className="service-details">
      {services.map((service) => (
        <div key={service.title}>
          <div className="service-header" onClick={toggle}>
            <span
              className={`service-title ${
                isOpen ? "body-semibold-16" : "body-regular-16"
              }`}
            >
              <img
                className="service-title-icon"
                src={`/icons/${service.icon}.svg`}
                alt=""
              />
              {service.title}
            </span>
            <i className={`fa fa-chevron-${isOpen ? "down" : "right"}`} />
          </div>

          {isOpen && (
            <div className="type-table">
              <div className="table-header">
                <div className="type-title-header"></div>
                <div className="type-price-header body-regular-12">Precio</div>
                <div className="type-duration-header body-regular-12">
                  Duración
                </div>
              </div>

              {service.types.map((type) => (
                <div key={type.title} className="table-row">
                  <div className="type-title body-regular-16">
                    {type.title}
                    <button className="deatils-button body-semibold-12">
                      <span className="deatils-button-icon">
                        <i className="fa fa-info-circle" />
                      </span>
                      <span className="deatils-button-text">Detalles</span>
                    </button>
                  </div>
                  <div className="type-price body-medium-16">{type.price}</div>
                  <div className="type-duration body-medium-16">
                    {formatDuration(type.duration)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
