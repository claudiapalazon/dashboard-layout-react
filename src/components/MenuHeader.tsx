import { FC } from "react";
import { Link } from "react-router-dom";

export const MenuHeader: FC<{
  setSectionTitle: (title: string) => void;
}> = ({ setSectionTitle }) => {
  return (
    <div className="menu-header">
      <div className="logo-title">
        <img className="logo" src="/imgs/webel-logo.png" alt="webel-logo" />
        <h1 className="body-semibold-18">Webel</h1>
      </div>
      <Link
        className="notifications-container"
        to="/emptySection"
        onClick={() => setSectionTitle("Notificaciones")}
      >
        <img
          className="notifications-icon"
          src="/icons/notifications.svg"
          alt=""
        />
        <div className="point"></div>
      </Link>
    </div>
  );
};
