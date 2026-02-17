import { FC } from "react";
import { Button } from "./Button";
import { useToggle } from "../../../hooks/useToggle";

export const Questions: FC = () => {
  const { isOpen, toggle } = useToggle(false);

  return (
    <div className={`questions ${isOpen ? "" : "padding-bottom-questions"}`}>
      <div className="title-20 color-title">Algunas preguntas sobre mí</div>
      <p className="body-semibold-16 questions-title">
        ¿Cuánta experiencia tienes planchando?
      </p>
      <p className="body-regular-14 pb-8">20 años de experiencia</p>
      <p className="body-semibold-16 questions-title">
        Indica los tipos de limpieza que puedes realizar
      </p>

      <div className={`questions-list ${isOpen ? "expanded" : ""}`}>
        <p className="body-regular-14 pb-8">
          <i className="fa fa-check"></i> Limpieza general del hogar
          (habitaciones, baños y cocina)
        </p>
        <p className="body-regular-14 pb-8">
          <i className="fa fa-check"></i> Limpieza a fondo
        </p>
        <p
          className={`body-regular-14 pb-8 ${
            isOpen ? "expanded" : "apply-blur"
          }`}
        >
          <i className="fa fa-check"></i> Limpieza después de la obra
        </p>
        <p className="body-regular-14 pb-8">
          <i className="fa fa-check"></i> Limpieza de exteriores
        </p>
      </div>

      <div
        className={`button-container ${
          isOpen ? "" : "button-container-hidden"
        }`}
      >
        <Button
          buttonType="secondary"
          text={isOpen ? "Ver menos" : "Ver todo"}
          onClick={toggle}
        />
      </div>
    </div>
  );
};
