import React from "react";

interface RatingBarProps {
  rating: number;
}

export const RatingBar: React.FC<RatingBarProps> = ({ rating }) => {
  const percentage = (rating / 5) * 100;

  return (
    <div className="rating-bar">
      <div
        className="rating-bar-fill"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};
