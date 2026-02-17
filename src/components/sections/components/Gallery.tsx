import { FC } from "react";

export const Gallery: FC = () => {
  const images = [
    "photo-gallery-1",
    "photo-gallery-2",
    "photo-gallery-3",
    "photo-gallery-4",
    "photo-gallery-1",
  ];

  return (
    <div className="gallery">
      <div className="gallery-header">
        <div className="title-20 color-title">Galería</div>
        <button className="gallery-header-button body-bold-16">
          Ver galería
        </button>
      </div>

      <div className="gallery-container-imgs">
        {images.map((img, index) => (
          <img
            src={`${import.meta.env.BASE_URL}imgs/${img}.jpg`}
            key={index}
            className="gallery-img"
          ></img>
        ))}
      </div>
    </div>
  );
};
