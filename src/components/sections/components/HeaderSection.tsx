import { FC } from "react";

export const HeaderSection: FC<{
  title: string;
}> = ({ title }) => {
  return (
    <div className="header-section">
      <h3 className="body_semibold_24">{title}</h3>
    </div>
  );
};
