import { FC, useState } from "react";

export const Level: FC = () => {
  const achievements = ["Plata", "Bronce", "Oro", "Platino"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length);
  };

  let backgroundClass = "";

  switch (achievements[currentIndex]) {
    case "Bronce":
      backgroundClass = "bronce";
      break;
    case "Plata":
      backgroundClass = "plata";
      break;
    case "Oro":
      backgroundClass = "oro";
      break;
    case "Platino":
      backgroundClass = "platino";
      break;
  }

  return (
    <div className="level">
      <div className="title-20 color-title">Nivel</div>
      <div className="level-gift">
        <div className={`level-gift-icon ${backgroundClass}`}>
          <i className="fa fa-trophy"></i>
        </div>
        <div className="level-gift-text">
          <div className="level-gift-text-title title-20">
            {achievements[currentIndex]}
          </div>
          <div className="level-gift-text-number body-regular-16">
            Logros: {currentIndex + 1} de {achievements.length}
          </div>
        </div>
        <div className="level-gift-next" onClick={handleNext}>
          <i className="fa fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};
