import { FC, useEffect, useState } from "react";
import { Menu } from "./Menu";
import { Outlet } from "react-router-dom";
import { HeaderSection } from "./sections/components/HeaderSection";

export const LayOutComponent: FC = () => {
  const [sectionTitle, setSectionTitle] = useState<string>("");
  useEffect(() => {
    if (!sectionTitle) {
      switch (location.pathname) {
        case "/emptySection":
          setSectionTitle("Calendario");
          break;
        case "/announcements":
          setSectionTitle("Anuncios");
          break;
      }
    }
  }, [location.pathname]);

  return (
    <div className="layout">
      <div className="layout-menu">
        <Menu sectionTitle={sectionTitle} setSectionTitle={setSectionTitle} />
      </div>
      <div className="layout-section">
        <HeaderSection title={sectionTitle} />
        <Outlet />
      </div>
    </div>
  );
};
