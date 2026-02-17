import { FC } from "react";
import { Button } from "./Button";

export const Comments: FC = () => {
  const text = "Servicio con {{worker}}";
  const text2 = "¿Quieres ver qué valoración te ha puesto {{clientName}}?";
  return (
    <div className="comments">
      <div className="title-20 color-title comments-title">Comentarios</div>
      <div className="comments-container">
        <img
          className="comments-container-photo"
          src={`${import.meta.env.BASE_URL}imgs/claudiapalazon.jpg`}
          alt=""
        />
        <div className="comments-container-info">
          <div className="comments-container-info-first">
            <p className="body-medium-16 comments-container-info-first-text">
              Andrew
            </p>
            <div className="body-regular-14 comments-container-info-first-text-color point">
              .
            </div>
            <p className="body-regular-14 comments-container-info-first-text-color">
              Hace 3 días
            </p>
          </div>

          <div className="comments-container-info-second">
            <img
              className="comments-container-photo small-photo"
              src={`${import.meta.env.BASE_URL}imgs/claudiapalazon.jpg`}
              alt=""
            />
            <p className="body-medium-12 comments-container-info-second-text">
              {text}
            </p>
          </div>
        </div>
      </div>
      <div className="comments-describe">
        <div className="title-20 color-title">Descubre tu valoración</div>
        <div className="comments-describe-text">
          <p className="body-regular-14 comments-describe-text-first">
            {text2}
          </p>
          <p className="body-regular-14 comments-describe-text-second">
            ¡Valora el servicio para verla!
          </p>
        </div>
        <Button buttonType="primary" text="Valorar servicio" />
      </div>
      <div className="all-reviews-button">
        <Button buttonType="secondary" text="Ver todas las reseñas" />
      </div>
    </div>
  );
};
