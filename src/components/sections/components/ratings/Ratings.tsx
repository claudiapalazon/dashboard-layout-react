import { FC } from "react";
import { RatingBar } from "./RatingBar";

export const Ratings: FC = () => {
  const ratings = [
    { title: "Servicio", number: 5 },
    { title: "Puntualidad", number: 3.2 },
    { title: "Amabilidad", number: 4.1 },
    { title: "Calidad / Precio", number: 5 },
    { title: "Profesionalidad", number: 4 },
  ];

  return (
    <div className="ratings">
      <div className="ratings-header">
        <p className="title-40">4,6</p>
        <i className="fa fa-star"></i>
        <div className="ratings-header-text">
          <p className="ratings-header-text-title title-18">Muy bien</p>
          <p className="ratings-header-text-description body-regular-16">
            (53 valoraciones)
          </p>
        </div>
      </div>
      <div className="ratings-container">
        {ratings.map((rating) => (
          <div key={rating.title} className="ratings-row">
            <p className="ratings-row-title body-medium-14">{rating.title}</p>
            <div className="ratings-row-bar">
              <RatingBar rating={rating.number} />
              <p className="ratings-row-bar-text body-medium-14">
                {rating.number}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
