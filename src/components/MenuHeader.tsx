import { FC } from "react";
import { Link } from "react-router-dom";

export const MenuHeader: FC<{
  setSectionTitle: (title: string) => void;
  onClose?: () => void;
}> = ({ setSectionTitle, onClose }) => {
  return (
    <div className="menu-header">
      <div className="logo-title">
        <img className="logo" src={`${import.meta.env.BASE_URL}imgs/webel-logo.png`} alt="webel-logo" />
        <h1 className="body-semibold-18">Webel</h1>
      </div>
      <div className="menu-header-actions">
        <Link
          className="notifications-container"
          to="/emptySection"
          onClick={() => setSectionTitle("Notificaciones")}
        >
          <img
            className="notifications-icon"
            src={`${import.meta.env.BASE_URL}icons/notifications.svg`}
            alt=""
          />
          <div className="point"></div>
        </Link>
        {onClose && (
          <button
            type="button"
            className="menu-close"
            onClick={onClose}
            aria-label="Cerrar menú"
          >
            <span className="menu-close-bar" />
            <span className="menu-close-bar" />
          </button>
        )}
      </div>
    </div>
  );
};
