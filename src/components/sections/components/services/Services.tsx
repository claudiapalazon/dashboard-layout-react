import { FC } from "react";
import { ServiceList } from "./ServiceList";
import { servicesData } from "../../../../data/services";

export const Services: FC = () => {
  return (
    <div className="services">
      <div className="title-20 color-title">Mis servicios</div>
      <div className="services-surcharge body-regular-12">
        <img
          className="services-surcharge-icon"
          src={`${import.meta.env.BASE_URL}icons/receipt.svg`}
          alt="receipt"
        />
        <span>
          Recargo en pedidos inferiores a:{" "}
          <span className="body-medium-12"> 23€</span>
        </span>
      </div>
      <ServiceList services={servicesData} />
    </div>
  );
};
