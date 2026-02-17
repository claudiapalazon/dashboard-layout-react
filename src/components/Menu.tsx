import { FC } from "react";
import { Link } from "react-router-dom";
import { MenuHeader } from "./MenuHeader";

interface MenuItem {
  label: string;
  path: string;
  icon: string;
}

interface MenuProps {
  sectionTitle: string;
  setSectionTitle: (title: string) => void;
}

const services: MenuItem[] = [
  { label: "Calendario", path: "/emptySection", icon: "calendar" },
  { label: "Solicitudes", path: "/emptySection", icon: "inbox" },
];

const profile: MenuItem[] = [
  { label: "Mensajes", path: "/emptySection", icon: "chat" },
  { label: "Saldo", path: "/emptySection", icon: "money" },
  { label: "Anuncios", path: "/announcements", icon: "announcements" },
  { label: "Trabajadores", path: "/emptySection", icon: "people" },
];

const help: MenuItem[] = [
  { label: "Soporte", path: "/emptySection", icon: "support" },
  { label: "Cerrar Sesión", path: "/emptySection", icon: "close-session" },
];

const MenuList: FC<{
  items: MenuItem[];
  sectionTitle: string;
  setSectionTitle: (title: string) => void;
}> = ({ items, sectionTitle, setSectionTitle }) => (
  <nav>
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <Link
            className={
              sectionTitle === item.label
                ? "body-medium-16 active-section"
                : "body-regular-16"
            }
            to={item.path}
            onClick={() => setSectionTitle(item.label)}
          >
            <img src={`/icons/${item.icon}.svg`} alt={item.label} />
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export const Menu: FC<MenuProps> = ({ sectionTitle, setSectionTitle }) => {
  return (
    <div className="menu-container">
      <MenuHeader setSectionTitle={setSectionTitle} />
      <div className="menu">
        <div className="menu-section">
          <p className="menu-section-title body-regular-16">SERVICIOS</p>
          <MenuList
            items={services}
            sectionTitle={sectionTitle}
            setSectionTitle={setSectionTitle}
          />
        </div>
        <div className="menu-section margin-top-section">
          <p className="menu-section-title body-regular-16">PERFIL</p>
          <MenuList
            items={profile}
            sectionTitle={sectionTitle}
            setSectionTitle={setSectionTitle}
          />
        </div>
        <div className="menu-section--flex">
          <MenuList
            items={help}
            sectionTitle={sectionTitle}
            setSectionTitle={setSectionTitle}
          />
        </div>
      </div>
    </div>
  );
};
