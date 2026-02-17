import { FC } from "react";
import { ReadMore } from "./ReadMoreText";

export const AboutMe: FC = () => {
  return (
    <div className="aboutme">
      <div className="aboutme-img">
        <i className="fa fa-bath"></i>
      </div>
      <p className="body-bold-18 aboutme-title">Equipo WebelTeam</p>
      <p className="body-regular-16 aboutme-description">Manitas</p>
      <div className="aboutme-info">
        <div className="aboutme-info-title title-20 color-title">Sobre mí</div>
        <ReadMore
          text="Lorem ipsum dolor sit amet consectetur. Habitant massa sollicitudin
          quam imperdiet leo cursus. Aliquam aliquam lorem nunc leo sit
          scelerisque vitae arcu sed. Ultricies lorem diam viverra lorem a.
          Elementum vel leo vitae tincidunt nec convallis pharetra iaculis. Cras
          tellus nisi enim egestas. Nisi adipiscing lectus justo nunc nisl
          pharetra sollicitudin risus. Proin amet id consequat velit maecenas
          egestas faucibus. Arcu suspendisse amet augue urna. Sollicitudin a
          habitasse lobortis sodales lectus platea hendrerit vestibulum gravida.
          Consectetur vitae ullamcorper luctus facilisis urna. Amet curabitur eu
          adipiscing lectus libero. Quam eu ante gravida mi non pulvinar diam
          nisl odio."
        />
      </div>
    </div>
  );
};
