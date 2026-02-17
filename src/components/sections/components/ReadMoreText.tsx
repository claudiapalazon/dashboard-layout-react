import { useState } from "react";

interface ReadMoreProps {
  text: string;
}

export const ReadMore = ({ text }: ReadMoreProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="readmore-container">
      <p
        className={`readmore-content body-regular-14 ${
          isExpanded ? "expanded" : ""
        }`}
      >
        {text}
      </p>
      <button onClick={toggleText} className="toggle-button body-bold-16">
        <span className="toggle-button-icon">
          <i className={isExpanded ? "fa fa-minus" : "fa fa-plus"} />
        </span>
        <span className="toggle-button-text">
          {isExpanded ? "Ver menos" : "Ver más"}
        </span>
      </button>
    </div>
  );
};
